//add lüdde integation
// :)
const Discord = require("discord.js");

module.exports = {
    name: 'downloads',
    cooldown: 5,
    aliases: ['dl', 'download'],
    description: 'Prints all available Files.',

    async execute(message) {
        const http = require("http");

        console.log('calling http');


        const res = await new Promise(resolve => http.get('http://xj4kuswsas2jjggi.myfritz.net:8080/downloadtext', resolve));

        console.log('has response', res !== undefined);

        let string = '';

        res.on('data', (chunk) => {
            console.log('recieves data');

            string += chunk;
        });

        const response = await new Promise(resolve => {
            res.on('end', () => {
                var data = JSON.parse(string);

                console.log('has data %j', data);

                const downloadEmbed = new Discord.MessageEmbed();
                downloadEmbed.setColor("#6e3684");
                downloadEmbed.setTitle("Downloadpage");
                downloadEmbed.setURL("http://xj4kuswsas2jjggi.myfritz.net:8080/download/");
                downloadEmbed.setDescription("Eine Liste aller dämonischen Dateien.");



                for (let i = 0; i < data.length; i++) {
              
                    downloadEmbed.addField("Benutzer: ", data[i]["name"]);
                    for (let j = 0; j < data[i]["files"].length; j++) {
                        downloadEmbed.addField(" " + data[i]["files"][j]["file"] + ": ", data[i]["files"][j]["url"]);
                    }
                }




                downloadEmbed.setTimestamp();
                downloadEmbed.setFooter("Die Erreichbarkeit der Website wird nicht gewährleistet.");


                console.log(downloadEmbed);


                //message.channel.send(JSON.stringify(data, null, 2));
                resolve(downloadEmbed);

            });
        })

        console.log(response);

        message.channel.send(response)

    }
}
