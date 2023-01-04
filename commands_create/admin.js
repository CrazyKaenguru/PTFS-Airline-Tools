const Discord = require("discord.js");


module.exports = {
    name: 'admin',
    description: "this is a ping command!",
    execute(commands){
        commands?.create({
            name:"admin",
            description:"Use some special admin only commands!",
            options:[
                {
                    name:"command",
                    description:"choose what kind of command you want to run!",
                    required:true,
                    type:Discord.ApplicationCommandOptionType.String,
                    choices:[{
                        name:"delete all flights (no need to input the flight number!)",
                        value:"dall",
                    },
                    {
                        name:"delete one special flight ",
                        value:"done",
                    },


                   ]
                },
                {
                    name:"flightnumber",
                    description:"input the a flight number (only required when deleting on special flight!)",
                    required:false,
                    type:Discord.ApplicationCommandOptionType.String,
                }

            ]
        
        
        })
    }
}