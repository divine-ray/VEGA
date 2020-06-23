module.exports = {
    name: 'beep',
    description: 'Boop!',
    execute(message, args) {
        message.channel.send('Beep');
        console.log('Issued BeepBoop Command')
    }
}