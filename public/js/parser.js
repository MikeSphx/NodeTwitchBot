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
                switch(cmd1) {
                    case 'left':
                        console.log('moving left ' + cmd2.toString() + ' steps');
                        break;
                    case 'right':
                        console.log('moving right ' + cmd2.toString() + ' steps');
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