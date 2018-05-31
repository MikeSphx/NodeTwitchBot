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
    channels: ["i_st", "mrpandamania"]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
    client.action("mrpandamania", "Hello I'm a good bot! :)");
    client.action("i_st", "Hello I'm a good bot! :)");
});

client.on('chat', function(channel, user, message, self) {
    client.action("i_st", user['display-name'] + " you are a total noob bro.");
});