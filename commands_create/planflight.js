const Discord = require("discord.js");


module.exports = {
    name: 'planflight',
    description: "this is a ping command!",
    execute(commands){
        commands?.create({
            name:"planflight",
            description:"plan a Flight!",
            options:[
                {
                    name:"pilot",
                    description:"Enter the pilots name",
                    required:true,
                    type:Discord.ApplicationCommandOptionType.User,
                },
                {
                    name:"aircraft",
                    description:"Enter your Aircrafts Name!",
                    required:true,
                    type:Discord.ApplicationCommandOptionType.String,
                },
                {name:"maxpassengers",
                  description:"Enter the max amount of passengers!",
                   required:true,
                type:Discord.ApplicationCommandOptionType.Integer},
                {
                    name:"departure",
                    description:"Enter your airport of departure!",
                    required:true,
                    type:Discord.ApplicationCommandOptionType.String,
                },
                {
                    name:"destination",
                    description:"Enter your airport of destination!",
                    required:true,
                    type:Discord.ApplicationCommandOptionType.String,
                },
                {
                    name:"time",
                    description:"Time when the flight will take off!",
                    required:true,
                    type:Discord.ApplicationCommandOptionType.String,
                },
            ]
        })
    }
}