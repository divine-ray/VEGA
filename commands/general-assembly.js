
const {isInitalized} = require('./setup.js')

module.exports = {
    name: 'general-assembly',
    cooldown: 5,
    guildOnly: true,
    aliases: ['ga', 'vollversammlung', 'vs'],
    description: 'Forces everyone into a voice channel.',
    execute(message) {

        if (isInitalized() === true) {
            console.log('yup');
            message.member.roles.add(727090802341445632n)

        }
        else {
            console.log('nope');

        }






    }
}