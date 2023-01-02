const { QuickDB } = require('quick.db');
const db = new QuickDB(); // using default driver

const Discord = require("discord.js");
const fs = require('fs');


module.exports = {
    name: 'planflight',
    description: "this is a ping command!",
    execute(client, interaction){
     console.log(interaction.options.getString("aircraft"))
     var  flightnumber
     var flightnumberending=(Math.random() * (9999 - 1) + 1).toString().split(".")[0];
    if(interaction.guild.name.split(" ")[1]!=undefined)
    {
        // Generates a unique flightnumber when the guild name is more than one word
        flightnumber=interaction.guild.name.split(" ")[0].charAt(0)+interaction.guild.name.split(" ")[1].charAt(0)+" "+flightnumberending
        for(var i= flightnumber; db.has(i.toString())==false;)
        {
            flightnumber=interaction.guild.name.split(" ")[0].charAt(0)+interaction.guild.name.split(" ")[1].charAt(0)+" "+flightnumberending
        }
    }
    else
    {
        // Generates a unique flightnumber when the guild name is only one word
     flightnumber=interaction.guild.name.slice(0,2)+" "+flightnumberending
     for(var i= flightnumber; db.has(i.toString())==false;)
        {
            flightnumber=interaction.guild.name.slice(0,2)+" "+flightnumberending
        }
    }
     console.log(flightnumber)
     db.set(flightnumber, [{ pilot: interaction.options.getMember("pilot").id },{maxpassengers: interaction.options.getInteger("maxpassengers")}]);



        const respEmbed = new Discord.EmbedBuilder()
.setTitle("planflight:")

        interaction.reply({embeds:[respEmbed]})
    }
}