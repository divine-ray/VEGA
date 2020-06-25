// at the top of your file
const Discord = require('discord.js');

module.exports = {
    cooldown: 5,
    name: 'test-embed',
    aliases: ['embed'],
    description: '...!',
    execute(message, args) {

        console.log('Issued Embed Command')
        const exampleEmbed = new Discord.MessageEmbed()
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

        message.reply(exampleEmbed);

    }


}
