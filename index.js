const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (let file of commandFiles) {
    let command = require(`./commands/${file}`);

    //console.log(require(`./commands/${file}`));

    client.commands.set(command.name, command);
}

//console.log(client.commands);

client.once('ready', () => {
    console.log('Up and Running!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' +');
    const commandName = args.shift().toLowerCase();
    console.log('commandName', commandName)

    //console.log('hasCommand?', (client.commands.has(commandName)))

    if (!client.commands.has(commandName)) return;

    try {
        client.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
}
)

client.login(token);
