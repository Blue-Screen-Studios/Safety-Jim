import { Client, Constants, Interaction } from "discord.js";
import { FgCyan, FgGreen, FgYellow } from "../resources/messageFormatCodes";
import * as fs from 'fs';

export async function RegisterCommands(client: Client)
{
    //Leave guildID empty to register commands across all servers (this process can take about 2 hours)
    const guildID = '913885055598886922'; //BSS = 888875214459535360 | Staff = 913885055598886922
    const guild = client.guilds.cache.get(guildID);
    
    let commands;

    console.log(FgYellow + `Registering Commands in the ${guild?.name} GUILD!`);

    if(guild) commands = guild.commands;
    else commands = client.application?.commands;

    const commandFiles = fs.readdirSync(__dirname + "/../commands/").filter((file: string) => file.endsWith('.ts'));

    for(const file of commandFiles)
    {
        const module: string = file.substring(0, file.length - 3);
        const m_command = require(`./../commands/${module}`);

        console.log(FgCyan + `Loaded command module: ${m_command.name}`);
        
        await commands?.create({
            name: m_command.name,
            description: m_command.description
        })
    }

    console.log(FgGreen + "Commands registered!");
}

export async function HandleCommands(client: Client, interaction: Interaction)
{
    //Command Handling...
    if(interaction.isCommand())
    {
        const { commandName, options } = interaction;

        switch(commandName)
        {
            case "contribute":
                await interaction.reply({
                    content: "Here is a link to my open source GitHub repository: https://github.com/blue-screen-studios/safety-jim",
                    ephemeral: true
                })
                break;
            case "help":
                await interaction.reply({
                    content: "help message",
                    ephemeral: true
                })
                break;
            case "invite":
                await interaction.reply({
                    content: "You can invite me to your server with the following link:",
                    ephemeral: true
                })
                break;
            case "support":
                await interaction.reply({
                    content: "Here is a link to my bot support server: https://discord.gg/WvbCRGSKre",
                    ephemeral: true
                })
                break;
            default:
                await interaction.reply({
                    content: "This command is depricated and no longer has functionality...",
                    ephemeral: true
                })
                break;
        }
    }
}