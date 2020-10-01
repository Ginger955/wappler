const fs = require('fs-extra');
const Scope = require('./scope');
const Parser = require('./parser');
const db = require('./db');
const validator = require('../validator');
const config = require('../setup/config');
const debug = require('debug')('server-connect:app');
const { clone } = require('../core/util');
const { toSystemPath } = require('../core/path');

function App(req, res) {
    this.error = false;
    this.data = {};
    this.meta = {};
    this.settings = {};
    this.modules = {};

    this.req = req;
    this.res = res;
    this.global = new Scope();
    this.scope = this.global;
    this.mail = {};
    this.auth = {};
    this.db = {};
    
    this.set({
        $_ERROR: this.error,
        //$_SERVER: process.env,
        $_ENV: process.env,
        $_GET: req.query,
        $_POST: req.method == 'POST' ? req.body : {},
        $_PARAM: req.params,
        $_HEADER: req.headers,
        $_COOKIE: req.cookies,
        $_SESSION: req.session
    });

    let urlParts = req.originalUrl.split('?');

    // Try to keep same as ASP/PHP
    this.set('$_SERVER', {
        CONTENT_TYPE: req.headers['content-type'],
        HTTP_ACCEPT: req.headers['accept'],
        HTTP_ACCEPT_CHARSET: req.headers['accept-charset'],
        HTTP_ACCEPT_ENCODING: req.headers['accept-encoding'],
        HTTP_ACCEPT_LANGUAGE: req.headers['accept-language'],
        HTTP_CONNECTION: req.headers['connection'],
        HTTP_COOKIE: req.headers['cookie'],
        HTTP_HOST: req.headers['host'],
        HTTP_REFERER: req.headers['referer'],
        HTTP_USER_AGENT: req.headers['user-agent'],
        HTTPS: req.protocol == 'https',
        PATH_INFO: req.path,
        QUERY_STRING: urlParts[1],
        REMOTE_ADDR: req.ip,
        REQUEST_METHOD: req.method,
        SERVER_NAME: req.hostname,
        URL: urlParts[0]
    });
}

App.prototype = {
    set: function(key, value) {
        this.global.set(key, value);
    },

    get: function(key, def) {
        let value = this.global.get(key);
        return value !== undefined ? value : def;
    },

    remove: function(key) {
        this.global.remove(key);
    },

    setSession: function(key, value) {
        this.req.session[key] = value;
    },

    getSession: function(key) {
        return this.req.session[key];
    },

    removeSession: function(key) {
        delete this.req.session[key];
    },

    setCookie: function(name, value, opts) {
        this.res.cookie(name, value, opts);
    },

    getCookie: function(name, signed) {
        return signed ? this.req.signedCookies[name] : this.req.cookies[name];
    },

    removeCookie: function(name, opts) {
        this.res.clearCookie(name, {
            domain: opts.domain,
            path: opts.path
        });
    },

    setMailer: function(name, options) {
        return this.mail[name] = options;
    },

    getMailer: function(name) {
        if (this.mail[name]) {
            return this.mail[name];
        }

        if (config.mail[name]) {
            return setMailer(name, config.mail[name]);
        }

        if (fs.existsSync(`app/modules/mailer/${name}.json`)) {
            let action = fs.readJSONSync(`app/modules/mailer/${name}.json`);
            return setMailer(name, action.options);
        }

        throw new Error(`Couldn't find mailer "${name}".`);
    },

    setAuthProvider: function(name, options) {
        const Provider = require('../auth/' + options.provider.toLowerCase());
        return this.auth[name] = new Provider(this, options, name);
    },

    getAuthProvider: function(name) {
        if (this.auth[name]) {
            return this.auth[name];
        }

        if (config.auth[name]) {
            return this.setAuthProvider(name, config.auth[name]);
        }

        if (fs.existsSync(`app/modules/securityproviders/${name}.json`)) {
            let action = fs.readJSONSync(`app/modules/securityproviders/${name}.json`);
            return this.setAuthProvider(name, action.options);
        }

        throw new Error(`Couldn't find security provider "${name}".`);
    },

    setDbConnection: function(name, options) {
        if (options.connection && options.connection.filename) {
            options.connection.filename = toSystemPath(options.connection.filename);
        }

        this.db[name] = db(options);
        this.res.on('finish', () => this.db[name].destroy());

        return this.db[name];
    },

    getDbConnection: function(name) {
        if (this.db[name]) {
            return this.db[name];
        }

        if (config.db[name]) {
            return this.setDbConnection(config.db[name]);
        }

        if (fs.existsSync(`app/modules/connections/${name}.json`)) {
            let action = fs.readJSONSync(`app/modules/connections/${name}.json`);
            return this.setDbConnection(name, action.options);
        }

        throw new Error(`Couldn't find database connection "${name}".`);
    },

    define: async function(cfg) {
        if (cfg.settings) {
            this.settings = clone(cfg.settings);
        }
        
        if (cfg.vars) {
            this.set(clone(cfg.vars));
        }
        
        if (cfg.meta) {
            this.meta = clone(cfg.meta);
            await validator.init(this, this.meta);
        }
        
        await this.exec(cfg.exec || cfg);
    },

    exec: async function(actions, internal) {
        if (actions.exec) {
            return this.exec(actions.exec, internal);
        }
        
        if (Array.isArray(actions)) {
            for (let action of actions) {
                await this.exec(action, internal);
            }
            return;
        }

        actions = clone(actions);

        await this._exec(actions.steps || actions);

        if (this.error !== false) {
            if (actions.catch) {
                this.scope.set('$_ERROR', this.error.message);
                await this._exec(actions.catch);
                this.error = false;
            } else {
                throw this.error;
            }
        }

        if (!internal && !this.res.headersSent && !this.noOutput) {
            this.res.json(this.data);
        }
    },

    _exec: async function(steps) {
        if (typeof steps == 'string') {
            return this.exec(await fs.readJSON(`app/modules/${steps}.json`), true);
        }

        if (this.res.headersSent) {
            // do not execute other steps after headers has been sent
            return;
        }

        if (Array.isArray(steps)) {
            for (let step of steps) {
                await this._exec(step);
                if (this.error) return;
            }
            return;
        }

        if (steps.disabled) {
            return;
        }

        if (steps.action) {
            try {
                const module = require('../modules/' + steps.module);

                if (typeof module[steps.action] != 'function') {
                    throw new Error(`Action ${steps.action} doesn't exist in ${steps.module || 'core'}`);
                }

                debug(`Executing action step ${steps.action}`);
                debug(`options: %O`, steps.options);

                const data = await module[steps.action].call(this, clone(steps.options), steps.name);

                if (data instanceof Error) {
                    throw data;
                }
    
                if (steps.name) {
                    this.scope.set(steps.name, data);
    
                    if (steps.output) {
                        this.data[steps.name] = data;
                    }
                }
            } catch (e) {
                this.error = e;
                return;
            }
        }
    },

    parse: function(value, scope) {
        return Parser.parseValue(value, scope || this.scope);
    },

    parseRequired: function(value, type, err) {
        if (value === undefined) {
            throw new Error(err);
        }

        let val = Parser.parseValue(value, this.scope);

        if (type == '*') {
            if (val === undefined) {
                throw new Error(err);
            }
        } else if (type == 'boolean') {
            val = !!val;
        } else if (typeof val != type) {
            throw new Error(err);
        }

        return val;
    },

    parseOptional: function(value, type, def) {
        if (value === undefined) return def;

        let val = Parser.parseValue(value, this.scope);

        if (type == '*') {
            if (val === undefined) val = def;
        } else if (type == 'boolean') {
            if (val === undefined) {
                val = def;
            } else {
                val = !!val;
            }
        } else if (typeof val != type) {
            val = def;
        }

        return val;
    },

    parseSQL: function(sql) {
        if (!sql) return null;

        ['values', 'orders'].forEach((prop) => {
            if (Array.isArray(sql[prop])) {
                sql[prop] = sql[prop].filter((value) => {
                    if (!value.condition) return true;
                    return !!Parser.parseValue(value.condition, this.scope);
                });
            }
        });

        if (sql.wheres && sql.wheres.rules) {
            if (sql.wheres.conditional && !Parser.parseValue(sql.wheres.conditional, this.scope)) {
                delete sql.wheres;
            } else {
                sql.wheres.rules = sql.wheres.rules.filter(function filterConditional(rule) {
                    if (!rule.rules) return true;
                    if (rule.conditional && !Parser.parseValue(rule.conditional, this.scope)) return false;
                    rule.rules = rule.rules.filter(filterConditional);
                    return rule.rules.length;
                }, this);

                if (!sql.wheres.rules.length) {
                    delete sql.wheres;
                }
            }
        }

        return Parser.parseValue(sql, this.scope);
    },
};

module.exports = App;