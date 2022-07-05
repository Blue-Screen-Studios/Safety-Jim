import { Client, Interaction } from "discord.js";

export async function RegisterCommands(client: Client)
{
    const guildID = '913885055598886922'; //BSS = 888875214459535360 | Staff = 913885055598886922
    const guild = client.guilds.cache.get(guildID);
    
    let commands;

    console.log( `Registering Commands in the ${guild?.name} server!`);

    if(guild) commands = guild.commands;
    else commands = client.application?.commands;

    commands?.create({
        name: "test",
        description: "a basic command to test our bot"
    })
}

export async function HandleCommands(client: Client, interaction: Interaction)
{
        //Command Handling...
        if(interaction.isCommand())
        {
            const { commandName, options } = interaction;

            console.log("Hello")
            switch(commandName)
            {
                case "":
                    await interaction.reply({
                        content: "",
                        ephemeral: true
                    })
                    break;
                default:
                    await interaction.reply({
                        content: "This command does not execute any code...",
                        ephemeral: true
                    })
            }
        }
}