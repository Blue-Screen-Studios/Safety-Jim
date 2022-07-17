import { Client, Guild, GuildMember, Interaction, Permissions, Role, RoleResolvable, User } from "discord.js";

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
        const role: any  = interaction.options.getRole("role")!;
        const user: User = interaction.options.getUser("member")!;

            
        const member: GuildMember = guild.members.cache.get(user.id)!;

        try
        { 
            //If we are trying to modify a users role with a role managed by an integration, reply with a message saying we can't and return...
            if(role.managed && action != "has")
            {
                await interaction.editReply({
                    content: "This role is managed by another integration, and therefore can not be added, removed, or deleted!"
                })

                return;
            }

            switch(action)
            {
                case "add":
                    await member.roles.add(role);
                    
                    interaction.editReply({
                        content: `I have added the <@&${role.id}> role to <@${user.id}>`
                    })

                    return;
                
                case "remove":
                    await member.roles.remove(role);

                    interaction.editReply({
                        content: `I have removed the <@&${role.id}> role from <@${user.id}>`
                    })

                    return;
                
                case "has":
                    
                    
                    if(member.roles.cache.some(r => r === role) == true)
                    {    
                        interaction.editReply({
                            content: `<@${user.id}> has the role <@&${role.id}>`
                        })
                    }
                    else
                    {
                        interaction.editReply({
                            content: `<@${user.id}> does not have the role <@&${role.id}>`
                        })
                    }

                return;
            }
        }
        catch(ex)
        {
            console.log(ex);
            await interaction.editReply({
                content: "I do not have permission to do that... :(\nRequired Permissions: `MANAGE_ROLES`\nRequired Role Heirchy Level: `Above Target Mentionable`"
            });
        }
    }
}
