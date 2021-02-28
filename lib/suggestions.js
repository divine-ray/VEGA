const Discord = require('discord.js');


module.exports = async function (message) {



    if (message.channel.id !== '728215285907193896') {
        return
    }

    var messageContent = message.content

    console.log(messageContent);


    if (message.author.id !== '724547079556431946') {
                             //724547079556431946 = bot ID
                        
        message.delete()

        const SuggestionEmbed = new Discord.MessageEmbed();
        SuggestionEmbed.setColor('RANDOM');
        SuggestionEmbed.setTitle("Vorschlag:");
        SuggestionEmbed.setDescription(messageContent);
        SuggestionEmbed.setTimestamp()


        const replyMessage = await message.channel.send(SuggestionEmbed);

        replyMessage.react('🔺');
        replyMessage.react('🔻');








    }









};


