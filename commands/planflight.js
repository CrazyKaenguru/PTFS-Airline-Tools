const { QuickDB } = require('quick.db');
const db = new QuickDB(); // using default driver

const Discord = require("discord.js");
const fs = require('fs');
const { ActionRowBuilder, ButtonBuilder,ButtonStyle } = require('discord.js');

module.exports = {
    name: 'planflight',
    description: "this is a ping command!",
    execute(client, interaction){
    // console.log(interaction.options.getString("aircraft"))
     var  flightnumber
     var flightnumberending=(Math.random() * (9999 - 1) + 1).toString().split(".")[0];
    if(interaction.guild.name.split(" ")[1]!=undefined)
    {
        // Generates a unique flightnumber when the guild name is more than one word
        flightnumber=interaction.guild.name.split(" ")[0].charAt(0)+interaction.guild.name.split(" ")[1].charAt(0)+"_"+flightnumberending
        for(var i= flightnumber; db.has(i.toString())==false;)
        {
            flightnumber=interaction.guild.name.split(" ")[0].charAt(0)+interaction.guild.name.split(" ")[1].charAt(0)+"_"+flightnumberending
        }
    }
    else
    {
        // Generates a unique flightnumber when the guild name is only one word
     flightnumber=interaction.guild.name.slice(0,2)+"_"+flightnumberending
     for(var i= flightnumber; db.has(i.toString())==false;)
        {
            flightnumber=interaction.guild.name.slice(0,2)+"_"+flightnumberending
        }
    }
     console.log(typeof(flightnumber))
     // Set the flight  in the database.
     const pilot=interaction.options.getMember("pilot").id
     const aircraft=interaction.options.getString("aircraft")
     const departure=interaction.options.getString("departure")
     const destination=interaction.options.getString("destination")
     const maxpassengers=interaction.options.getInteger("maxpassengers")
     const time=interaction.options.getString("time")
     
    
     db.set(flightnumber, { pilot: pilot ,aircraft: aircraft,departure: departure,destination: destination,maxpassengers: maxpassengers,time: time,confirmed:false,guild:interaction.guild.id});


    const row = new ActionRowBuilder()
    .addComponents(
        
        new ButtonBuilder()
            .setCustomId(flightnumber+"confirm")
            .setLabel("Confirm!")
            .setStyle(ButtonStyle.Primary),
        
          
    )
    .addComponents(
        
        new ButtonBuilder()
            .setCustomId(flightnumber+"quit")
            .setLabel("Quit!")
            .setStyle(ButtonStyle.Primary),
        
          
    );

  interaction.reply({ content: 'please confirm this flight!', components: [row] ,ephemeral: true});
    }
}