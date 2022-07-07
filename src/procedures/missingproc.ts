import { Client, Interaction } from "discord.js";

export async function Run(client: Client, interaction: Interaction)
{
    if(interaction.isCommand())
    {
        interaction.reply({
            content: "```diff\n-ERROR: No matching procedure could be found for this command!\n```",
            ephemeral: true
        })
    }
}