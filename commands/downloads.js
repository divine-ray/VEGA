//add lüdde integation
// :)
const Discord = require("Discord.js");

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

        let response = await new Promise(resolve => {
            res.on('end', () => {
                var data = JSON.parse(string);

                console.log('has data %j', data);

                // const downloadEmbed = new Discord.MessageEmbed();
                // downloadEmbed.setColor("#6e3684");
                // downloadEmbed.setTitle("Downloadpage");
                // downloadEmbed.setURL("http://xj4kuswsas2jjggi.myfritz.net:8080/download/");
                // downloadEmbed.setDescription("Eine Liste aller dämonischen Dateien.");


                // for (let i = 0; i < data.length - 1; i++) {
                //     downloadEmbed.addField("Benutzer: ", data[i]["name"]);
                //     for (let j = 0; j < data[i]["files"].length - 1; j++) {
                //         downloadEmbed.addField(" " + data[i]["files"][j]["file"] + ": ", data[i]["files"][j]["url"]);
                //     }
                // }



                // downloadEmbed.setTimestamp();
                // downloadEmbed.setFooter("Die Erreichbarkeit der Website wird nicht gewährleistet.");

                // console.log(downloadEmbed);

                const downloadEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Download List')
                    .setURL('http://xj4kuswsas2jjggi.myfritz.net:8080/downloadtext')
                    .setAuthor('Ludima',// '', ''//
                    )
                    .setDescription('All available Files of our downloads site')
                    // .setThumbnail('')
                    // .addFields(
                    //     { name: 'Regular field title', value: 'Some value here' },
                    //     { name: '\u200B', value: '\u200B' },
                    //     { name: 'Inline field title', value: 'Some value here', inline: true },
                    //     { name: 'Inline field title', value: 'Some value here', inline: true },
                    // )
                    // .addField('Inline field title', 'Some value here', true)
                    // .setImage('')
                    .setTimestamp()
                    .setFooter('Some footer text here', '');

                //message.channel.send(JSON.stringify(data, null, 2));
                resolve(downloadEmbed);
            });
        })

        response = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Download List')
            .setURL('http://xj4kuswsas2jjggi.myfritz.net:8080/downloadtext')
            .setAuthor('Ludima',// '', ''//
            )
            .setDescription('All available Files of our downloads site')
            .setThumbnail('')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('')
            .setTimestamp()
            .setFooter('Some footer text here', '');

        console.log(response);

        message.channel.send(response)

    }
}
