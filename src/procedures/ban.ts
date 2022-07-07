import { Client, Guild, GuildMember, Interaction, Permissions, User } from "discord.js";
import { createImmediatelyInvokedArrowFunction } from "typescript";

export async function Run(client: Client, interaction: Interaction)
{
    if(!interaction.isCommand()) return;

    if(!interaction.memberPermissions?.has(Permissions.FLAGS.BAN_MEMBERS))
    {
        await interaction.reply({
            content: "You do not have permission to do that... :(",
            ephemeral: true
        })
    }
    else
    {
        await interaction.deferReply({
            ephemeral: true
        })

        const guild: Guild = interaction.guild!;
        const user: User = interaction.options.getUser("user")!;
        const banReason: string = interaction.options.getString("reason") || "None provided";

        const member: GuildMember = guild.members.cache.get(user.id)!;

        if(client.user?.id === member.id)
        {
            await interaction.editReply({
                content: "Woah there! I am not going to ban myself..."
            })
        }
        else
        {
            try
            {
                await member.ban({
                    reason: banReason 
                });

                await interaction.editReply({
                    content: `I have banned ${user.username} from ${guild.name}! Reason: ${banReason}`
                })
            }
            catch
            {
                await interaction.editReply({
                    content: "I do not have permission to do that... :(\nRequired Permissions: `BAN_MEMBERS`\nRequired Role Heirchy Level: `Above Target Mentionable`"
                })
            }
        }
    }
}