module.export = {
    name: 'userinfo',
    description: 'Tells Username and ID',
    execute(mesage, args) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
        console.log('Issued Userinfo Command')
    }

}