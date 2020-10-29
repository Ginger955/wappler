const services = require('../oauth/services');
const OAuth2 = require('../oauth');

module.exports = {

    provider: async function(options, name) {
        if (!name) throw new Error('oauth.provider has no name.');

        let service = this.parseOptional(options.service, 'string', null);
        let opts = service ? services[service] : {};
        opts.client_id = this.parseOptional(options.client_id, 'string', null);
        opts.client_secret = this.parseOptional(options.client_secret, 'string', null);
        opts.token_endpoint = opts.token_endpoint || this.parseRequired(options.token_endpoint, 'string', 'oauth.provider: token_endpoint is required.');
        opts.auth_endpoint = opts.auth_endpoint || this.parseRequired(options.auth_endpoint, 'string', 'oauth.provider: auth_endpoint is required.');
        opts.scope_separator = opts.scope_separator || this.parseOptional(options.scope_separator, 'string', ' ');
        opts.access_token = this.parseOptional(options.access_token, 'string', null);
        opts.refresh_token = this.parseOptional(options.refresh_token, 'string', null);
        opts.jwt_bearer = this.parseOptional(options.jwt_bearer, 'string', false);
        opts.client_credentials = this.parseOptional(options.client_credentials, 'boolean', false);
        opts.params = Object.assign({}, opts.params, this.parseOptional(options.params, 'object', {}));

        if (opts.jwt_bearer && this.scope.has(opts.jwt_bearer)) {
            opts.jwt_bearer = this.scope.get(opts.jwt_bearer);
        }

        let oauth = new OAuth2(this, this.parse(options), name);
        await oauth.init();
        
        this.oauth = this.oauth || {};
        this.oauth[name] = oauth;
        
        return {
            access_token: oauth.access_token,
            refresh_token: oauth.refresh_token
        };
    },

    authorize: function(options) {
        const oauth = this.oauth[options.provider];
        if (!oauth) throw new Error(`oauth.authorize: provider "${options.provider}" doesn't exist.`);
        return oauth.authorize(this.parse(options.scopes), this.parse(options.params));
    },

    refresh: function(options) {
        const oauth = this.oauth[options.provider];
        if (!oauth) throw new Error(`oauth.refresh: provider "${options.provider}" doesn't exist.`);
        return oauth.refreshToken(this.parse(options.refresh_token));
    },

};