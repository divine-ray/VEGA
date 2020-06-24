//add lüdde integation
// :)

const Discord = require('discord.js');

module.exports = {
    name: 'downloads',
    cooldown: 5,
    description: 'Prints all available Files.',

    execute(message) {
        const http = require("http");

        http.get('http://xj4kuswsas2jjggi.myfritz.net:8080/downloadtext', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {          
                message.channel.send(data);
            });
        });
    }
}
