module.export = {
    name: 'beep',
    description: 'Boop!',
    execute(mesage,args) {
        message.channel.send('Beep');
        console.log('Issued BeepBoop Command')
    }
}