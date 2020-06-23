module.export = {
    name: 'ping',
    description: 'Ping!',
    execute(mesage,args) {
        message.channel.send('Pong.');
        console.log('Issued PingPong Command')
    }
}