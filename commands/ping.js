module.exports = {
    name: 'ping',
    cooldown: 5,
    description: 'Ping!',
    execute(message, args) {
        message.channel.send('Pong.');
        console.log('Issued PingPong Command')
    }
}