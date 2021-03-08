const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const suggestions = require('./lib/suggestions.js')

const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

//const client = new Discord.Client();
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
    console.log('All Systems are good to go.');
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        status: "dnd",  // You can show online, idle... Do not disturb is dnd
        activity: {
            name: "Vega, help",  // The message shown
            type: "playing" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
});

client.on('message', message => {

    suggestions(message)

    if (message.content == 'sues' //&& guild.id('813472749603258368')
    ) {                                  //472734482206687243 schrekl
        message.channel.send('no u')
    }
    if (!message.content.startsWith(prefix)) {
        return
    }

    if (!message.content.startsWith(PREFIX)) return;
    let cmdName = message.content.substring(message.content.indexOf(PREFIX) + 2).split(new RegExp(/\s+/)).shift();
    let argsToParse = message.content.substring(message.content.indexOf(' ') + 1);

    module.exports.argsToParse = argsToParse;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    console.log('commandName', commandName)

    console.log('hasCommand?', (client.commands.has(commandName)))

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) {
        console.log('An unknown command has been issued')
        message.reply('Could not find that command.')
        return;
    }

    //const command = client.commands.get(commandName);

    if (command.guildOnly && message.channel.type !== 'text') {
        console.log('Failed to execute Guild command in DMs')
        return message.reply(`Unable to execute ${command.name} in DMs`)
    }

    if (command.args && !args.length) {

        let reply = `You have not supplied enough arguments, ${message.author}!`;
        if (command.usage) {
            reply += `\nUse the command like this: \`${prefix}${command.name} ${command.usage}\``;
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
                console.log('reminded user in regards to slowmode')
                return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
            }
        }


    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was a fatal error trying to execute that command.');
    }

});



client.login(token);
