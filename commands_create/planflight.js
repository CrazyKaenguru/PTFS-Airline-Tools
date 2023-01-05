const Discord = require("discord.js");


module.exports = {
    name: 'planflight',
    description: "this is a ping command!",
    execute(commands){
        commands?.create({
            name:"planflight",
            description:"plan a Flight!",
            options:[
               // {
                //    name:"pilot",
                //    description:"Enter the pilots name",
                //    required:true,
                //    type:Discord.ApplicationCommandOptionType.User,
              //  },
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
                    choices:[{
                        name:"Tokyo",
                        value:"ITKO",
                    },
                    {
                        name:"Henstridge Airfield",
                        value:"IHEN",
                    },
                    {
                        name:"Barra Airport",
                        value:"IBAR",
                    },
                    {
                        name:"Paphos",
                        value:"IPAP",
                    },
                    {
                        name:"RAF Scampton",
                        value:"ISCM",
                    },
                    {
                        name:"Al Najaf",
                        value:"IJAF",
                    },
                    {
                        name:"Air Base Garry",
                        value:"IGAR",
                    },
                    {
                        name:"Larnaca Intl.",
                        value:"ILAR"
                    },
                    {
                        name:"Paphos Intl.",
                        value:"IPAP",
                    },
                    {
                        name:"Grindavik",
                        value:"IGRV",
                    },
                    {
                        name:"Izolirani",
                        value:"IZOL",
                    },
                    {
                        name:"Saba Airport",
                        value:"IDCS",
                    },
                    {
                        name:"Lukla Airport",
                        value:"ILKL",
                    },
                    {
                        name:"Perth Intl.",
                        value:"IPPH",
                    },
                    {
                        name:"Boltic Airfield",
                        value:"IBLT",
                    },
                    {
                        name:"Greater Rockford",
                        value:"IRFD",
                    },
                    {
                        name:"Mellor Intl.",
                        value:"IMLR",
                    },
                    {
                        name:"Training Centre",
                        value:"ITRC",
                    },
                    {
                        name:"Saint Barthelemy",
                        value:"IBTH",
                    },
                    {
                        name:"Ufo Base",
                        value:"IUFO",
                    },
                    {
                        name:"Sauthamptona Airport",
                        value:"ISAU",
                    },
                    ]
                },
                {
                    name:"destination",
                    description:"Enter your airport of destination!",
                    required:true,
                    type:Discord.ApplicationCommandOptionType.String,
                    choices:[{
                        name:"Tokyo",
                        value:"ITKO",
                    },
                    {
                        name:"Henstridge Airfield",
                        value:"IHEN",
                    },
                    {
                        name:"Barra Airport",
                        value:"IBAR",
                    },
                    {
                        name:"Paphos",
                        value:"IPAP",
                    },
                    {
                        name:"RAF Scampton",
                        value:"ISCM",
                    },
                    {
                        name:"Al Najaf",
                        value:"IJAF",
                    },
                    {
                        name:"Air Base Garry",
                        value:"IGAR",
                    },
                    {
                        name:"Larnaca Intl.",
                        value:"ILAR"
                    },
                    {
                        name:"Paphos Intl.",
                        value:"IPAP",
                    },
                    {
                        name:"Grindavik",
                        value:"IGRV",
                    },
                    {
                        name:"Izolirani",
                        value:"IZOL",
                    },
                    {
                        name:"Saba Airport",
                        value:"IDCS",
                    },
                    {
                        name:"Lukla Airport",
                        value:"ILKL",
                    },
                    {
                        name:"Perth Intl.",
                        value:"IPPH",
                    },
                    {
                        name:"Boltic Airfield",
                        value:"IBLT",
                    },
                    {
                        name:"Greater Rockford",
                        value:"IRFD",
                    },
                    {
                        name:"Mellor Intl.",
                        value:"IMLR",
                    },
                    {
                        name:"Training Centre",
                        value:"ITRC",
                    },
                    {
                        name:"Saint Barthelemy",
                        value:"IBTH",
                    },
                    {
                        name:"Ufo Base",
                        value:"IUFO",
                    },
                    {
                        name:"Sauthamptona Airport",
                        value:"ISAU",
                    },
                    ]
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