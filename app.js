var tmi = require('tmi.js');
var apikey = require(__dirname + '/apikey.js');

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "C00LD0GS",
        password: apikey.key
    },
    channels: ["d_o_g_s_"]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
    client.action("d_o_g_s_", "Hello I'm a good bot! :)");
});

client.on('chat', function(channel, user, message, self) {
    client.action("d_o_g_s_", user['display-name'] + " you are a total noob bro.");
});