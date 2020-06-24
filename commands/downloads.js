//add lüdde integation
// :)
const Discord = require("Discord.js");

module.exports = {
    name: 'downloads',
    aliases: ['dl', 'download'],
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
                var values = [];
                for (let i = 0; i < data.split(";") - 2; i++) {
                    values += { value: data.split(";")[i] };
                }

                const downloadEmbed = new Discord.MessageEmbed();
                downloadEmbed.setColor("#6e3684");
                downloadEmbed.setTitle("Downloadpage");
                downloadEmbed.setURL("http://xj4kuswsas2jjggi.myfritz.net:8080/download/");
                downloadEmbed.setDescription("Eine Liste aller dämonischen Dateien.");



                downloadEmbed.setTimestamp();
                downloadEmbed.setFooter("Die Erreichbarkeit der Website wird nicht gewährleistet.");

                message.channel.send(data);
            });

        });
    }
}
