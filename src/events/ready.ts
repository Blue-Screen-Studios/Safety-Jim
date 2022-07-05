import { Client } from 'discord.js'
import { RegisterCommands } from './../procedures/commands'

export = {
    name: 'ready',
    once: true,
    isasync: false,

    execute(client: Client)
    {
        RegisterCommands(client);
    }
}