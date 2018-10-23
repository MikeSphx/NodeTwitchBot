import parse from '/js/parser.js'
const io = window.io;
const ioClient = io.connect('http://localhost:3005');
ioClient.on('cmd', (msg) => parse(msg));

let frame = 0
window.walking = false;
setInterval(function() {
    frame = (frame + 1) % 10
    if (walking) {
        return;
    }
    let url = 'https://maplestory.io/api/GMS/latest/pet/5000207/stand0/' + frame + '/';
    let img = new Image();
    img.src = url;
    img.addEventListener('load', function() {
        let corgo = document.getElementById('corgo');
        corgo.src = url
    });
}, 1000);