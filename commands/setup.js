const Discord = require("discord.js");

var initalized = false //this is needed for general assembly and setup

module.exports = {
    name: 'setup',
    guildOnly: true,
    aliases: ['init'],
    isInitalized() { return initalized },

    description: 'Creates the required roles for a couple features of this bot.',
    execute(message, args) {

        //console.log(message.guild.roles.find.cache("Present (General Assemby)"))
        // message.reply(message.guild.roles.cache.find(role => role.name === 'Present (General Assemby'))

        //console.log(message.guild.roles.cache.find(role => role.name === 'Vacant (General Assemby)'))




        const role1 = message.guild.roles.cache.find(role => role.name === 'Vacant (General Assemby)')
        const role2 = message.guild.roles.cache.find(role => role.name === 'Present (General Assemby)')

        if (!role1 || !role2) {
            message.channel.send('Setting up Roles..');

        } else {
            message.channel.send('Required roles have been found, skipping creation')
        }

        if (!role1) {
            message.guild.roles.create({
                data: {
                    name: 'Vacant (General Assemby)',
                    color: [169, 49, 32],
                    mentionable: true,
                },
                reason: 'Needed for the General Assembly',
            })
            message.channel.send('Created Role Vacant (General Assemby)');
        }

        if (!role2) {
            message.guild.roles.create({
                data: {
                    name: 'Present (General Assemby)',
                    color: [47, 99, 48],
                    mentionable: true,
                },
                reason: 'Needed for the General Assembly',
            })
            message.channel.send('Created Role Present (General Assemby)')


        }

        initalized = true

    }
}
