import { config } from 'dotenv'
import { Client, Collection, CommandInteractionOptionResolver, Intents } from 'discord.js'
import * as fs from 'fs'

declare function require(name:string): any;

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


const eventFiles = fs.readdirSync("./src/events/").filter((file: string) => file.endsWith('.ts'));

for(const file of eventFiles)
{
    const module: string = file.substring(0, file.length - 3);

    const event = require(`./events/${module}`);

    if(event.once)
    {
        client.once(event.name, (...args) => event.exectue(...args, client));
    }
    else
    {
        if(event.isasync) client.on(event.name, async (...args) => await event.exectue(...args, client));
        else client.on(event.name, (...args) => event.exectue(...args, client));
    }
}

//====================================================================================================