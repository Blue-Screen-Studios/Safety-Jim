import { APIErrors, Client, Guild, GuildMember, Interaction, Permissions, ReactionCollector, Role, User } from "discord.js";

export async function Run(client: Client, interaction: Interaction)
{
    if(!interaction.isCommand()) return;

    if(!interaction.memberPermissions?.has(Permissions.FLAGS.MANAGE_ROLES))
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
        const action: string = interaction.options.getString("action")!;
        const role: Role = interaction.options.getRole("role")!;
        const user: User = interaction.options.getUser("user")!;

        const member: GuildMember = guild.members.cache.get(user.id)!;

        //If we are trying to modify our own role, reply with a message saying we can't and return...
        if(client.user?.id === member.id && action != "has")
        {
            await interaction.editReply({
                content: "Woah there! You must modify my own roles manually..."
            })

            return;
        }

        //If we are trying to modify a users role with a role managed by an integration, reply with a message saying we can't and return...
        if(role.managed && action != "has")
        {
            await interaction.editReply({
                content: "This role is managed by an another integration, and therefore can not be added, removed, or deleted!"
            })

            return;
        }

        switch(action)
        {
            case "add":
                await member.roles.add(role);
                
                interaction.reply({
                    content: `I have added the <@&${role.id}> role to <@${user.id}>`
                })

                return;
            
            case "remove":
                await member.roles.remove(role);

                interaction.reply({
                    content: `I have removed the <@&${role.id}> role to <@${user.id}>`
                })

                return;
            
            default "has":
                await member.roles.cache.some(r => r === role);
        }
            try
            {
                
            }
            catch
            {
                await interaction.editReply({
                    content: "I do not have permission to do that... :(\nRequired Permissions: `MANAGE_ROLES`\nRequired Role Heirchy Level: `Above Target Mentionable`"
                });
            }
        }
    }
}