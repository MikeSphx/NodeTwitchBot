  /////////////////
 // SERVER CODE //
/////////////////
const server = require("socket.io").listen(3005);
const clients = new Map();

// event fired every time a new client connects:
server.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    clients.set(socket, 1); // TODO: replace 1 with some socket related value

    // when socket disconnects, remove it from the list:
    socket.on("disconnect", () => {
        clients.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
    });
});

  /////////
 // TMI //
/////////
var tmi = require('tmi.js');
var apikey = require(__dirname + '/apikey.js');

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true
    },
    identity: {
        username: 'C00LD0GS',
        password: apikey.key
    },
    channels: ['d_o_g_s_']
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
    client.action('d_o_g_s_', 'Hello I\'m a good bot! :)');
});

client.on('chat', function(channel, user, message, self) {
    if (self) return;
    client.action('d_o_g_s_', user['display-name'] + ': ' + message);
    for (const [socket, socketVal] of clients.entries()) {
        socket.emit('cmd', {'user': user, 'message': message});
    }
});

client.on('action', function(channel, user, message, self) {
    if (self) return;
    client.action('d_o_g_s_', user['display-name'] + ':' + message)
});