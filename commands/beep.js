module.exports = {
    cooldown: 5,
    name: 'beep',
    aliases: ['boop'],
    description: 'Boop!',
    execute(message, args) {
        message.channel.send('Beep');
        console.log('Issued BeepBoop Command')
    }
}