var tmi = require('tmi.js');
var apikey = require(__dirname + '/apikey.js');
var net = require('net');
var host = 'localhost';
var port = 3005;

var uiClient = new net.Socket();
uiClient.connect(port, host, function() {
    console.log('[+] Connected to: ' + host + ':' + port);
});

uiClient.on('data', function(data) {
    console.log('UI response: ' + data);
});

uiClient.on('close', function() {
    uiClient.destroy();
    console.log('[-] Connection closed.');
});

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
    uiClient.write('Twitch bot online.');
});

client.on('chat', function(channel, user, message, self) {
    if (self) return;
    client.action('d_o_g_s_', user['display-name'] + ': ' + message);
    uiClient.write(user['display-name'] + ': ' + message);
});

client.on('action', function(channel, user, message, self) {
    if (self) return;
    client.action('d_o_g_s_', user['display-name'] + ':' + message)
});
