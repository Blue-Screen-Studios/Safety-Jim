import { Client, Interaction } from "discord.js";
import { FgYellow } from "../resources/messageFormatCodes";

export async function RegisterCommands(client: Client)
{
    const guildID = '913885055598886922'; //BSS = 888875214459535360 | Staff = 913885055598886922
    const guild = client.guilds.cache.get(guildID);
    
    let commands;

    console.log(FgYellow + `Registering Commands in the ${guild?.name} GUILD!`);

    if(guild) commands = guild.commands;
    else commands = client.application?.commands;

    await commands?.create({
        name: "support",
        description: "provides an invite link to the Blue Screen Studios server"
    })
}

export async function HandleCommands(client: Client, interaction: Interaction)
{
        //Command Handling...
        if(interaction.isCommand())
        {
            const { commandName, options } = interaction;

            switch(commandName)
            {
                case "help":
                    await interaction.reply({
                        content: "message",
                        ephemeral: true
                    })
                    break;
                default:
                    await interaction.reply({
                        content: "This command is depricated and no longer has functionality...",
                        ephemeral: true
                    })
            }
        }
}