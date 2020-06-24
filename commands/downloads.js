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
                var list = data.split(";");
                var list_2 = [];
                for (let i = 0; i < list.length-1; i++) {
                    list_2 += { value: list[i] }
                }
                const downloadEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Momentan verfügbare Dateien:')
                    .setURL('http://xj4kuswsas2jjggi.myfritz.net:8080/download/')
                    .addFields(list_2);
                
              
                message.channel.send(downloadEmbed);
        });
    }
}
