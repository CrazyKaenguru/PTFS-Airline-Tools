const Discord = require("discord.js");


module.exports = {
    name: 'book',
    description: "this is a ping command!",
    execute(commands){
        commands?.create({
            name:"book",
            description:"book a flight!",
            options:[
                {

                    name:"flight",
                    description:"Enter the flights number!",
                    required:true,
                    type:Discord.ApplicationCommandOptionType.String,
                },
                {

                    name:"class",
                    description:"Which class do you want to fly?!",
                    required:true,
                    type:Discord.ApplicationCommandOptionType.String,
                    choices:[
                        {
                        name:"Economy Class",
                        value:"Economy Class",
                    },
                    {
                        name:"Business Class",
                        value:"Business Class",

                    },
                    {
                        name:"First Class",
                        value:"First Class",

                    }
                ]
                },
            ]
            
        })
    }
}