import { Client, Constants, Interaction, User } from "discord.js";
import { FgCyan, FgGreen, FgRed, FgWhite, FgYellow } from "../resources/messageFormatCodes";
import * as fs from 'fs';

//The extension to use when searching the file system (ts for ts-node, js for js-node)
const fileExtension = '.ts';

//This is the path to the command definitions & procedures directories
const commandDefsPath = './../commands/'
const proceduresPath = './../procedures/'

//Fetch a list of command definitions in our command definitions directory
const commandDefs = fs.readdirSync(__dirname + commandDefsPath).filter((file: string) => file.endsWith(fileExtension));
const procedures = fs.readdirSync(__dirname + proceduresPath).filter((file: string) => file.endsWith(fileExtension));

export async function RegisterCommands(client: Client)
{
    //Leave guildID empty to register commands across all servers (this process can take about 2 hours)
    const guildID = '913885055598886922'; //BSS = 888875214459535360 | Staff = 913885055598886922
    const guild = client.guilds.cache.get(guildID); //Get the guild to register our commands in from our clients cache of joined guilds
    let commands; //Create our commands object to hold our command data

    if(guild) 
    {
        commands = guild.commands;
        console.log(FgYellow + `Registering Commands in the ${guild?.name} GUILD!`);
    } 
    else
    {
        commands = client.application?.commands;
    }

    //For each command file, load the module and create the commands using the propreties defined in the command definition
    for(const file of commandDefs)
    {
        const module: string = file.substring(0, file.length - 3);
        const m_command = require(`${commandDefsPath}${module}`);

        console.log(FgCyan + `Loaded command module: ${m_command.name}` + FgWhite);
        
        console.log(m_command);

        await commands?.create({
            name: m_command.name,
            description: m_command.description,
            options: m_command.options,
        })
    }

    console.log(FgGreen + "Commands registered!");
}

export async function HandleCommands(client: Client, interaction: Interaction)
{
    if(interaction.isCommand())
    {
        const { commandName, options } = interaction;
        console.log("COMMAND NAME: " + commandName);
        const commandDefPath = `${commandDefsPath}${commandName}`;

        const m_command = require(commandDefPath);
        
        console.log(`${FgYellow}Running command at path: ${FgCyan}${commandDefPath}${FgYellow} using procedure ${FgCyan}${m_command.procedure}${FgWhite}`);

        console.log(m_command.procedure);

        const procedureName = m_command.procedure;
        
        //Does this command have a procedure in it's definition?
        if(procedureName == undefined || procedureName == null)
        {
            console.log(`${FgRed}ERROR_NULL_PROCEDURE${FgWhite}`);

            interaction.reply({
                content: "```diff\n- ERROR: This command does not run a procedure!\n```",
                ephemeral: true
            })
        }
        else
        {
            console.log(procedures);

            if(procedures.includes(`${procedureName}${fileExtension}`))
            {
                const procedureDefPath = `${proceduresPath}${procedureName}`;
                console.log(procedureDefPath);
    
                const procedure = require(procedureDefPath);

                await procedure.Run(client, interaction);
            }
            else
            {
                console.log("Procedure does not exist!");
            }
        }
    }

    /*
    //Command Handling...
    if(interaction.isCommand())
    {

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
        
    }*/
}