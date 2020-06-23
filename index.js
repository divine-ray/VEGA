const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
clientcommands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Up and Running!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
    
    
    
    
    
    
    
    
    
    
    
    /*if (command === 'ping') {
		client.commands.get('ping').execute(message, args);
    } 
    else if (command === 'beep') {
		client.commands.get('beep').execute(message, args);
    } 
    else if (command === 'server') {
		client.commands.get('server').execute(message, args);
    }
    else if (command === 'avatar') {
		client.commands.get('avatar').execute(message, args);
    }
    else if (command === 'clear_messages') {
		client.commands.get('clear_messages').execute(message, args);
    }
    else if (command === 'info') {
		client.commands.get('info').execute(message, args);
	}
    else if (command === 'serverinfo') {
        client.commands.get('serverinfo').execute(message, args);
    }
    else if (command === 'userinfo') {
		client.commands.get('userinfo').execute(message, args);
     }
    */
    
    const command = args.shift().toLowerCase();
    }
    
    
    

)
client.login(token);
