const Discord = require("discord.js");


module.exports = {
    name: 'takeoff',
    description: "this is a ping command!",
    execute(commands){
        commands?.create({
            name:"takeoff",
            description:"use this command to remove the flight from the list",
            options:[
                {
                    name:"flight",
                    description:"Enter the flights number!",
                    required:true,
                    type:Discord.ApplicationCommandOptionType.String,
                },
            ]
        })
    }
}