import { Client } from 'discord.js'
import { RegisterCommands } from '../components/commands'

export = {
    name: 'ready',
    once: true,
    isasync: false,

    execute(client: Client)
    {
        RegisterCommands(client);
    }
}