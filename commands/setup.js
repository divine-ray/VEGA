const Discord = require("discord.js");


var initalized = false
module.exports = {
    name: 'setup',
    cooldown: 500,
    guildOnly: true,
    aliases: ['init'],
    isInitalized() { return initalized },

    description: 'Creates the required roles for a couple features of this bot.',
    execute(message, args) {

        message.channel.send('Setting up Roles..');
        console.log('Setting up Roles..')
        message.guild.roles.create({
            data: {
                name: 'Vacant (General Assemby)',
                hexColor: '#e6083b',
            },
            reason: 'Needed for the General Assembly',
        })

        message.guild.roles.create({
            data: {
                name: 'Present (General Assemby)',
                hexColor: '#549c2d',
            },
            reason: 'Needed for the General Assembly',
        })
        //More roles n' stuff will be here
        console.log('Created all Neccesary roles for this guild');
        initalized = true
        message.channel.send('all roles are good to go now.')
        console.log(initalized)
    }

}