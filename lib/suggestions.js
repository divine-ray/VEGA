const Discord = require('discord.js');


module.exports = async function (message) {



    if (message.channel.id !== '818447460666048553' || message.author.bot) {
        //728215285907193896 is dead chat
        //813479808637599785 is #botter in paderborn
        //818447460666048553 is #broadcas in BF
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
        var upvote = 0;
        replyMessage.react('🔻');
        var downvote = 0;
    }
    
    message.reactions.cache 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
        const filter = (reaction, user) => {
            return ['🔺', '🔻'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        message.awaitReactions(filter, {time: 5000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
        
                if (reaction.emoji.name === '🔺') {
                    message.reply('you reacted with a thumbs up.');
                   upvote++;
                } else {
                    message.reply('you reacted with a thumbs down.');
                    downvote++;
                }
            })
    
            .catch(collected => {
                message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                message.channel.send(upvote - downvote) 
                console.log(`${upvote} have been casted`)
                console.log(`${downvote} have been casted`)
            });
    
            
    */
    /*
    client.on('messageReactionAdd', async (reaction, user) => {
        // When we receive a reaction we check if the reaction is partial or not
        if (reaction.partial) {
            // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
            try {
                await reaction.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message: ', error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }
        // Now the message has been cached and is fully available
        console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
        // The reaction is now also fully available and the properties will be reflected accurately:
        console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
    });
    
    */

};


