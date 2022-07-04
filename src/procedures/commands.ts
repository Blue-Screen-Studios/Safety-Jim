import { Client } from "discord.js";

export async function RegisterCommands(client: Client)
{
    const guildID = '913885055598886922'; //BSS = 888875214459535360 | Staff = 913885055598886922
    const guild = client.guilds.cache.get(guildID);
    
    let commands;

    console.log( `Registering Commands in the ` + guild?.name + ` server!`);

    if(guild) commands = guild.commands;
    else commands = client.application?.commands;

    commands?.create({
        name: "test",
        description: "a basic command to test our bot"
    })
}

