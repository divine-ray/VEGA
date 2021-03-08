// module.exports.run = async (client, message, args) => {

//     let userId = args.replace(args.substring(args.indexOf(' ')), '');
//     let tMessage = args.substring(args.indexOf(' ') + 1);

//     // d?settunnel userId tMessage
//     if (!client.users.cache.get(userId)) {
//         message.channel.send('User not found.');
//     } else {
//         try {
//             let tunnelEnd = await client.users.cache.get(userId);

//             tunnelEnd.send(tMessage);
//             message.channel.send('Message sent.');
//         } catch (error) {
//             message.channel.send('Something went wrong...');
//             console.error('Something went wrong...');
//         }
//     }

// }

const discord = require('discord.js');
const client = new discord.Client();
const argsToParse = require('../index.js');

module.exports = {
    name: 'tunnel',
    cooldown: 5,
    aliases: ['t'],
    description: 'DMs a User anonymously',
    execute(message) {
        const args = argsToParse.argsToParse;
        let userId = args.replace(args.substring(args.indexOf(' ')), '');
        let tMessage = args.substring(args.indexOf(' ') + 1);

        if (!client.users.cache.get(userId)) {
            message.channel.send('User not found.');
        } else {
            try {
                let tunnelEnd = client.users.cache.get(userId);

                tunnelEnd.send(tMessage);
                message.channel.send('Message sent.');
            } catch (error) {
                message.channel.send('Something went wrong...')
                console.error('Something went wrong');
            }
        }
    }
}