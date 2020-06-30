
const { isInitalized } = require('./setup.js')

module.exports = {
    name: 'general-assembly',
    cooldown: 5,
    guildOnly: true,
    aliases: ['ga', 'vollversammlung', 'vs'],
    description: 'Forces everyone into a voice channel.',
    execute(message) {

        if (isInitalized() === true) {
            console.log('yup');
            message.reply('Initializing a General Assembly..')
            //message.member.roles.add()

        }
        else {
            console.log('nope');
            message.reply('You need to run the setup command first!')
        }






    }
}