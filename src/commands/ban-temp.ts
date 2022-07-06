import { Constants } from "discord.js";

export = {
    name: "ban-temp",
    description: "I will ban the specified user and thier ip address temporarily from this server!",
    options: [
        {
            name: "user",
            description: "Which user should I ban?",
            type: Constants.ApplicationCommandOptionTypes.USER,
            required: true
        },
        {
            name: "ban-time",
            description: "How many hours until I unban this user?",
            type: Constants.ApplicationCommandOptionTypes.INTEGER,
            required: true
        },
        {
            name: "reason",
            description: "Why am I banning this user?",
            type: Constants.ApplicationCommandOptionTypes.STRING,
            required: false
        }
    ],
    procedure: "tempban"
}