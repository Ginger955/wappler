module.exports = function(server, appSession) {
    const io = require('socket.io')();
    const session = require('express-socket.io-session');
    
    io.use(session(appSession, { autoSave: true }));

    // TODO: listen to socket connection, messages etc.

    io.attach(server);

    return io;
};