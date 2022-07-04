import { Client, Interaction, Message } from "discord.js";

module.exports = {
    name: 'interactionCreate',
    once: true,

    execute(interaction, client)
    {
        if(interaction.isCommand())
        {
            const { commandName, options } = interaction;

        }
    }
}