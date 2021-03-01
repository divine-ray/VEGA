module.exports = {
    name: 'resources',
    cooldown: 60,
    description: 'Prints all related Links and Data.',
    execute(message, args) {
        message.channel.send('Trello board https://trello.com/b/ZwgV8nIn/demon-bot, Github https://github.com/CreepTV/DemonBot');
        console.log('Issued Resources Info Command')
    }
}