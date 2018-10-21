import parse from '/js/parser.js'
const io = window.io;
const ioClient = io.connect('http://localhost:3005');
ioClient.on('cmd', (msg) => parse(msg));