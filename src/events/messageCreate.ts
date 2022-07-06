import { Client, Message } from "discord.js";

export = {
    name: 'messageCreate',
    once: false,
    isasync: false,

    execute(client: Client, message: Message)
    {
        if(message.author.bot) return;
        if(message.channel.type == 'DM') return;

        console.log(`A message was sent: ${message}`);
    }
}