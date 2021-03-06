import { Client, Interaction, Permissions } from "discord.js";

export async function Run(client: Client, interaction: Interaction)
{
    if(!interaction.isCommand()) return;

    if(!interaction.memberPermissions?.has(Permissions.FLAGS.SEND_MESSAGES))
    {
        await interaction.reply({
            content: "You do not have permission to do that... :(",
            ephemeral: true
        })
    }
    else
    {
        await interaction.deferReply({
            ephemeral: false
        })
    
        setTimeout(() => {
            interaction.deleteReply();
        }, 5000);
    }
}