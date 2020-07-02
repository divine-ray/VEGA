const Discord = require('discord.js');
const { client } = require('./redis');

module.exports = async function (message) {



    if (message.channel.id !== '728215285907193896') {
        return
    }

    var messageContent = message.content

    console.log(messageContent);


    if (message.author.id !== '724547079556431946') {

        message.delete()

        const suggestionEmbed = new Discord.MessageEmbed();
        suggestionEmbed.setColor('RANDOM');
        suggestionEmbed.setTitle("Vorschlag:");
        suggestionEmbed.setDescription(messageContent);
        suggestionEmbed.setTimestamp()
        //autor anzeigen?



        const replyMessage = await message.channel.send(suggestionEmbed);

        replyMessage.react('🔺');
        replyMessage.react('🔻');

        // hole alle Suggestions
        // deserialisiere von JSON zu Javascript-Array
        // wenn nicht vorhanden, dann null
        let allSuggestions = await client.get('suggestions').then(JSON.parse)

        // erweitere Array, wenn vorhanden
        // oder initialisiere neues Array, wenn null
        // füge neues Array-Element hinzu (push)
        allSuggestions = (allSuggestions || []).concat(
            `dies war ein Vorschlag um ${suggestionEmbed.timestamp}: ${suggestionEmbed.description}`
        )

        // speichere die Änderungen
        await client.set('suggestions', JSON.stringify(allSuggestions))

        console.log(allSuggestions);

    }
};
