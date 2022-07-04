import { Client } from 'discord.js'
import { RegisterCommands } from './../procedures/commands'

export = {
    name: 'ready',
    once: true,
    isasync: false,

    exectue(client: Client)
    {
        RegisterCommands(client);
    }
}