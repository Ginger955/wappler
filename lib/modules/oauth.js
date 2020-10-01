const services = require('../oauth/services');
const OAuth2 = require('../oauth');

module.exports = {

    provider: function(options, name) {
        if (!name) throw new Error('oauth.provider has no name.');

        let service = this.parseOptional(options.service, 'string', null);
        let opts = service ? services[service] : {};
        opts.client_id = this.parseRequired(options.client_id, 'string', 'oauth.provider: client_id is required.');
        opts.client_secret = this.parseRequired(options.client_secret, 'string', 'oauth.provider: client_sectret is required.');
        opts.token_endpoint = opts.token_endpoint || this.parseRequired(options.token_endpoint, 'string', 'oauth.provider: token_endpoint is required.');
        opts.auth_endpoint = opts.auth_endpoint || this.parseRequired(options.auth_endpoint, 'string', 'oauth.provider: auth_endpoint is required.');
        opts.scope_separator = opts.scope_separator || this.parseOptional(options.scope_separator, 'string', ' ');
        opts.access_token = this.parseOptional(options.access_token, 'string', null);
        opts.refresh_token = this.parseOptional(options.refresh_token, 'string', null);
        opts.client_credentials = this.parseOptional(options.client_credentials, 'boolean', false);
        opts.params = Object.assign({}, opts.params, this.parseOptional(options.params, 'object', {}));
        
        this.oauth = this.oauth || {};
        this.oauth[name] = new OAuth2(this, this.parse(options), name);
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