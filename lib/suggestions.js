

module.exports = function (message) {



    if (message.channel.id !== '727086329393053736') {
        return
    }

    var messageContent = message.content

    console.log(messageContent);

    message.delete()

}