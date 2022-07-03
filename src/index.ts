import { config } from 'dotenv'
import { Client, Intents } from 'discord.js'

//Configure dotenv
config()

//Create client object
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES
    ]
})

//Login client using Discord Token
client.login(process.env.DISCORD_TOKEN)