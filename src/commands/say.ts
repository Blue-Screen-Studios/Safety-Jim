import { Constants } from "discord.js";

export = {
    name: "say",
    description: "I will repeat what you tell me to!",
    options: [
        {
            name: "message",
            description: "What should I say?",
            type: Constants.ApplicationCommandOptionTypes.STRING,
            required: true
        },
        {
            name: "public",
            description: "Should I make this message public?",
            type: Constants.ApplicationCommandOptionTypes.BOOLEAN,
            required: true
        }
    ],
    procedure: "say",
    allowOutsideGuildText: false
}