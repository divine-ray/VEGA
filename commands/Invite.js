// at the top of your file
const Discord = require('discord.js');

module.exports = {
    cooldown: 5,
    name: 'invite',
    aliases: ['link','addbot'],
    description: '...!',
    execute(message, args) {

        console.log('Issued Invite Command')
        const inviteEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('OAUTH2 Link')
            .setURL('https://discord.gg/KmwrXAPVAc')
           // .setAuthor('Ludima',// '', ''//)

            .setDescription('Add this bot to your Server!')

            .setThumbnail('')
            .addFields(
                { name: 'Invite Link:', value: 'https://discord.com/api/oauth2/authorize?client_id=724547079556431946&permissions=8&scope=bot' },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
            )
            //.addField('Inline field title', 'Some value here', true)
            .setImage('')
            .setTimestamp()
            .setFooter('Copyright 2021 CreepCorp Inc.', '');

        message.reply(inviteEmbed);

    }


}
