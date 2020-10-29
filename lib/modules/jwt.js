const jwt = require('jsonwebtoken');

/*
options: {
    "alg": "String", // algorithm for signing (HS256, HS384, HS512, RS256, RS384, RS512, ES256, ES384, ES512)
    "key": "String", // key for signing
    "iss": "String", // issuer
    "sub": "String", // subject
    "aud": "String", // audience
    "jti": "String", // token id
    "iat": "Number", // time that the token was issued (now)
    "nbf": "Number", // time before which the token cannot be accepted (now + 60)
    "exp": "Number", // expiration time (now + 3600)
    "headers": "Object", // header items
    "claims": "Object" // claim items
}
*/
exports.sign = function(options) {
    options = this.parse(options);

    let opts = {};

    if (options.alg) opts.algorithm = options.alg;
    if (options.iss) opts.issuer = options.iss;
    if (options.sub) opts.subject = options.sub;
    if (options.aud) opts.audience = options.aud;
    if (options.jti) opts.jwtid = options.jti;
    
    return jwt.sign({
        ...options.claims
    }, options.key, {
        ...opts,
        expiresIn: 3600,
        notBefore: 60
    });
};