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

const cooldowns = new Discord.Collection();


client.once('ready', () => {
    console.log('Up and Running!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' +');
    const commandName = args.shift().toLowerCase();



    //console.log('commandName', commandName)


    //console.log('hasCommand?', (client.commands.has(commandName)))

    if (!client.commands.has(commandName)) {
        message.reply('That command wasnt found!')
        console.log('An unknown Command was issued')
        return;
    }


    const command = client.commands.get(commandName);

    if (command.guildOnly && message.channel.type !== 'text') {
        console.log('Failed to execute Guild command in DMs')
        return message.reply('I can\'t execute that command inside DMs!')
    }

    if (command.args && !args.length) {

        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            console.log('Advised Proper Command Usage')
        } return message.channel.send(reply);
    }

    //console.log(command)

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                console.log('remnded user in regards to slowmode')
                return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
            }
        }

    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);
