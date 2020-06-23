//add lüdde integation
// :)

module.exports = {
    const http = require("http");

    http.get('http://xj4kuswsas2jjggi.myfritz.net:8080/downloadtext', (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            var list = data.split(";");
            const downloadEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Momentan verfügbare Dateien:')
                .setURL('http://xj4kuswsas2jjggi.myfritz.net:8080/download/')
                for (let step = 0; step < list.length-1; step++) {
                    .addField(list[step])
                }
                .setTimestamp()
                .setFooter('Die Verfügbarkeit der Website wird nicht gewährleistet.');
            channel.send(downloadEmbed);
        }
    });
}
