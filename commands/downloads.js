//add lüdde integation
// :)
/*const Discord = require("Discord.js");

module.exports = {
    name: 'downloads',
    aliases: ['dl', 'download'],
    cooldown: 5,
    description: 'Prints all available Files from our download site.',

    execute(message) {
        const http = require("http");

        http.get('http://xj4kuswsas2jjggi.myfritz.net:8080/downloadtext', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {

                const downloadEmbed = new Discord.MessageEmbed();
                downloadEmbed.setColor("#6e3684");
                downloadEmbed.setTitle("Downloadpage");
                downloadEmbed.setURL("http://xj4kuswsas2jjggi.myfritz.net:8080/download/");
                downloadEmbed.setDescription("Eine Liste aller Dateien.");



                downloadEmbed.setTimestamp();
                downloadEmbed.setFooter("Die Erreichbarkeit der Website wird nicht gewährleistet.");

                message.channel.send(data);
            });

        });
    }
}*/

//add lüdde integation
// :)
const Discord = require("Discord.js");

module.exports = {
    name: 'downloads',
    cooldown: 5,
    description: 'Prints all available Files.'

    execute(message) {
        const http = require("http");

        http.get('http://xj4kuswsas2jjggi.myfritz.net:8080/downloadtext', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                const downloadEmbed = new Discord.MessageEmbed();
                downloadEmbed.setColor("#6e3684");
                downloadEmbed.setTitle("Downloadpage");
                downloadEmbed.setURL("http://xj4kuswsas2jjggi.myfritz.net:8080/download/");
                downloadEmbed.setDescription("Eine Liste aller dämonischen Dateien.");

                for (let i = 0; i < data.length - 1; i++) {
                    downloadEmbed.addField("Benutzer: ", data[i]["name"]);
                    for (let j = 0; j < data[i]["files"].length - 1; j++) {
                        downloadEmbed.addField(" " + data[i]["files"][j]["file"] + ": ", data[i]["files"][j]["url"])
                    }
                }


                downloadEmbed.setTimestamp();
                downloadEmbed.setFooter("Die Erreichbarkeit der Website wird nicht gewährleistet.");

                message.channel.send(downloadEmbed);
            });

        });
    }
}
