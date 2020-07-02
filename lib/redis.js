const { promisify } = require('util')
const { createClient } = require('redis')

const client = createClient({ host: 'redis' })

client.on('error', err => {
    console.error(err);
})

client.on('ready', () => {
    console.log('Redis server is ready!');
})

module.exports = {
    client: {
        ...client,
        set: promisify(client.set).bind(client),
        get: promisify(client.get).bind(client)
    }
}
