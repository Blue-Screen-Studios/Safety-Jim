import { Client } from 'discord.js'

module.exports = {
    name: 'ready',
    once: true,

    exectue(client) {
        console.log(`${client.user.name} has logged into discord via token...`);
    }
}