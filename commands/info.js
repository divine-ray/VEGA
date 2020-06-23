module.export = {
    name: 'argsinfo',
    description: 'Lists all Ragments and highlights the first one',
    execute(mesage,args) {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        
        } else if (args[0] === 'like') {
            return message.channel.send('trains');
        }
       
        message.channel.send(`First argument: ${args[0]}`);
    }
}