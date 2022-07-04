import { Client } from 'discord.js'
import { RegisterCommands } from '../commands'

export = {
    name: 'ready',
    once: true,

    exectue(client: Client)
    {
        RegisterCommands(client);
    }
}