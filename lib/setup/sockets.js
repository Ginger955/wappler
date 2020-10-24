module.exports = function(server, appSession) {
    const io = require('socket.io')();
    const session = require('express-socket.io-session');
    
    io.use(session(appSession, { autoSave: true }));

    // user hooks
    if (fs.existsSync('extensions/server_connect/sockets')) {
        const entries = fs.readdirSync('extensions/server_connect/sockets', { withFileTypes: true });

        for (let entry of entries) {
            if (entry.isFile() && extname(entry.name) == '.js') {
                const hook = require(`../../extensions/server_connect/sockets/${entry.name}`);
                if (hook.handler) hook.handler(io);
                debug(`Custom sockets hook ${entry.name} loaded`);
            }
        }
    }

    // TODO: listen to socket connection, messages etc.

    io.attach(server);

    return io;
};