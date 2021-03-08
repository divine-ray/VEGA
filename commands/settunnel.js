module.exports.run = async (client, message, args) => {

    if (client.users.fetch(args, false)) {
        client.users.fetch(args, false).then((fetchedUser) => {
            let user = fetchedUser;
            user.send('Hello');
        })
    } else {
        return;
    }
}