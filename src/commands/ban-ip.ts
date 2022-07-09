import { Constants } from "discord.js";

export = {
    name: "ban-ip",
    description: "I will ban the specified user and thier ip address from this server!",
    options: [
        {
            name: "user",
            description: "The user I should ban!",
            type: Constants.ApplicationCommandOptionTypes.USER,
            required: true
        },
        {
            name: "reason",
            description: "Why am I banning this user?",
            type: Constants.ApplicationCommandOptionTypes.STRING,
            required: false
        }
    ],
    procedure: "ban",
    allowOutsideGuildText: false
}