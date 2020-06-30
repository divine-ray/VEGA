
const { isInitalized } = require('./setup.js')

module.exports = {
    name: 'general-assembly',
    cooldown: 5,
    guildOnly: true,
    aliases: ['ga', 'vollversammlung', 'vs'],
    description: 'Forces everyone into a voice channel.',
    execute(message) {



        if (isInitalized() === true) {
            message.reply('Are you sure you want to call a Meeting?')

            if (message.content === ['Yes' || 'yes' || 'Y' || 'y']) {
                console.log('response works')
            }
            /*
                        const VacantRole = message.guild.roles.cache.find(role => role.name === 'Vacant (General Assemby)')
            
                        console.log('yup');
                        message.reply('Initializing a General Assembly..')
                        //message.member.roles.add()
                        message.guild.members.cache.forEach(
                            member => member.roles.add(VacantRole)
                        )
                    }
                    else {
                        console.log('nope');
                        message.reply('You need to run the setup command first!')
                    }
            
            */


        }

    }
}