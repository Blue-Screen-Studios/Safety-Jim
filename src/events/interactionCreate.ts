import { Client, Interaction } from "discord.js";

export = {
    name: 'interactionCreate',
    once: true,

    execute(interaction: Interaction, client: Client)
    {
        //Command Handling...
        if(interaction.isCommand())
        {
            const { commandName, options } = interaction;

            console.log("Hello")
            switch(commandName)
            {
                case "":
                    interaction.reply({
                        content: "",
                        ephemeral: true
                    })
                    break;
                default:
                    interaction.reply({
                        content: "This command does not execute any code...",
                        ephemeral: true
                    })
            }
        }
    }
}