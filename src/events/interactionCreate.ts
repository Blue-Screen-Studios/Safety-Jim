import { Client, Interaction, Message } from "discord.js";

module.exports = {
    name: 'interactionCreate',
    once: true,

    execute(interaction: Interaction, client: Client)
    {
        if(interaction.isCommand())
        {
            const { commandName, options } = interaction;

        }
    }
}