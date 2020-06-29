module.exports = {
    name: 'avatar',
    cooldown: 5,
    aliases: ['icon', 'pfp', 'pp'],
    description: 'Prints a link to the Profile Picture of the mentioned User(s)',
    execute(message) {
        if (!message.mentions.users.size) {
            message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
            return
        }
        const avatarList = message.mentions.users.map(user => {
            `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
            return

        });
        message.channel.send(avatarList);
    }

}