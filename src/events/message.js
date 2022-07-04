import { Client, Message } from "discord.js";

module.exports = {
    name: 'message',
    once: false,

    execute(message, client)
    {
        if(message.author.bot) return;
        if(message.channel.type == 'DM') return;
        //if(!message.content.startsWith(client.cmdPrefix)) return;

        console.log(`A message was sent: ${message}`);
    }
}