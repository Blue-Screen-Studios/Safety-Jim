import { Client, Interaction, Permissions } from "discord.js";

export async function Run(client: Client, interaction: Interaction)
{
    if(!interaction.isCommand()) return;

    const message: string =  interaction.options.getString("message")!;

    if(!interaction.memberPermissions?.has(Permissions.FLAGS.SEND_MESSAGES))
    {
        await interaction.reply({
            content: "You do not have permission to do that... :(",
            ephemeral: true
        })
    }
    else
    {
        if(interaction.options.getBoolean("public")!)
        {
            interaction.reply({
                content: message,
                ephemeral: false
            })
        }
        else
        {
            interaction.reply({
                content: message,
                ephemeral: true
            })
        }
    }
}