import { Constants } from "discord.js";

export = {
    name: "role",
    description: "I will do something with a role",
    options: [
        {
            name: "action",
            description: "What action should I take?",
            type: Constants.ApplicationCommandOptionTypes.STRING,
            required: true,
            choices:
            [
                {
                    name: "add",
                    value: "add"
                },
                {
                    name: "remove",
                    value: "remove"
                },
                {
                    name: "has",
                    value: "has"
                }
            ]
        },
        {
            name: "role",
            description: "Which role should I utilize for this operation?",
            type: Constants.ApplicationCommandOptionTypes.ROLE,
            required: true,
        },
        {
            name: "member",
            description: "Which member should I perform a role operation on?",
            type: Constants.ApplicationCommandOptionTypes.USER,
            required: true
        }   
    ],
    procedure: "role",
    allowOutsideGuildText: false
}