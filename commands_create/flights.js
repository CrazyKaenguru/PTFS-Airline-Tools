const Discord = require("discord.js");


module.exports = {
    name: 'flights',
    description: "this is a ping command!",
    execute(commands){
        commands?.create({
            name:"flights",
            description:"view all FLights of this server!!",
            
        })
    }
}