const Discord = require("discord.js");
const fs = require('fs');
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const flightdb=db.table('flights')
module.exports = {
    name: 'flightinfo',
    description: "this is a ping command!",
   async execute(client, interaction){
     var flightnumber=interaction.options.getString("flight")
     if(!await flightdb.has(flightnumber))
     {
        interaction.reply({embeds:[respond("An error encourred!","flight not found!")]})
        return
     }
     var flight=await flightdb.get(flightnumber)
console.log(flight)

interaction.reply({embeds:[
    respond(`Information for flight **${flightnumber}**:`,
    `flightnumber: **${flightnumber}**
     available seats: **${flight.maxpassengers-flight.bookedseats}/${flight.maxpassengers}**
     aircraft: **${flight.aircraft}**
     departure: **${flight.departure}**
     destination: **${flight.destination}**
     pilot: <@${flight.pilot}>
     time: **${flight.time}**`)]})

      
    }
}


function respond(title,description)
{
    const resembed = new Discord.EmbedBuilder()
.setTitle(title)
.setDescription(description)
.setColor('#ffff00')
return resembed
}