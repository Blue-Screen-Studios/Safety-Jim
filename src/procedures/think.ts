import { Client, Interaction } from "discord.js";

export async function Run(client: Client, interaction: Interaction)
{
    if(!interaction.isCommand()) return;

    await interaction.deferReply({
        ephemeral: false
    })

    setTimeout(() => {
        interaction.deleteReply()
    }, 5000);
}