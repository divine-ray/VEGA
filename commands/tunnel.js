module.exports.run = async (client, message, args) => {

    let userId = args.replace(args.substring(args.indexOf(' ')), '');
    let tMessage = args.substring(args.indexOf(' ') + 1);

    //d?settunnel userId tMessage
    if (!client.users.cache.get(userId)) {
        message.channel.send('User not found.');
    } else {
        try {
            let tunnelEnd = await client.users.cache.get(userId);

            tunnelEnd.send(tMessage);
            message.channel.send('Message sent.');
        } catch (error) {
            message.channel.send('Something went wrong...');
            console.error('Something went wrong...');
        }
    }

}