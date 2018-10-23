export default function parse(msg) {
    console.log(msg);
    let message = msg.message;
    if (message.startsWith('!') && message.length > 1) {
        const commandList = message.substring(1).split(' ');
        let cmd0 = commandList[0];
        let cmd1;
        let cmd2;
        switch(cmd0) {
            case 'walk':
                if (commandList.length < 2) {
                    break;
                };
                cmd1 = commandList[1];
                cmd2 = commandList.length > 2 && !isNaN(parseInt(commandList[2])) ? parseInt(commandList[2]) : 1;
                let steps = cmd2
                let frame = 0
                walking = true;
                switch(cmd1) {
                    case 'left':
                        console.log('moving left ' + cmd2.toString() + ' steps');
                        setInterval(function() {
                            frame = (frame + 1) % 10;
                            steps = steps - 1;
                            if (steps < 0) {
                                window.walking = false;
                                return;
                            };
                            let url = 'https://maplestory.io/api/GMS/latest/pet/5000207/move/' + frame + '/';
                            let img = new Image();
                            img.src = url;
                            img.addEventListener('load', function() {
                                let corgo = document.getElementById('corgo');
                                corgo.src = url
                            });
                        }, 1000);
                        break;
                    case 'right':
                        console.log('moving right ' + cmd2.toString() + ' steps');
                        setInterval(function() {
                            frame = (frame + 1) % 10;
                            steps = steps - 1;
                            if (steps < 0) {
                                window.walking = false;
                                return;
                            };
                            let url = 'https://maplestory.io/api/GMS/latest/pet/5000207/move/' + frame + '/';
                            let img = new Image();
                            img.src = url;
                            img.addEventListener('load', function() {
                                let corgo = document.getElementById('corgo');
                                corgo.src = url;
                                corgo.style.transform = 'rotatey(180deg)';
                            });
                        }, 1000);
                        break;
                };
                break;
            case 'bark':
                cmd1 = commandList.length > 1 ? commandList[1] : 'Poggers!';
                console.log(cmd1 + ' Woof!');
                break;
        };
    };
};