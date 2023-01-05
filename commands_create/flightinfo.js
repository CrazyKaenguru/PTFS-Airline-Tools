const Discord = require("discord.js");


module.exports = {
    name: 'flightinfo',
    description: "this is a ping command!",
    execute(commands){
        commands?.create({
            name:"flightinfo",
            description:"view all information of a flight!",
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