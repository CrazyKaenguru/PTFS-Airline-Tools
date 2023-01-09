const Discord = require("discord.js");
const fs = require('fs');
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const flightdb=db.table('flights')
const bookingsdb = db.table("bookings");
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

var bookingslist=[]
const bookings=await bookingsdb.all()
for(let i=0;i<bookings.length;i++)
{
    if(bookings[i].value.flightnumber==flightnumber)
    {
        //console.log((await client.users.fetch(bookings[i].value.user)).id)
        bookingslist.push("\n**"+((await client.users.fetch(bookings[i].value.user)).username).toString()+"**")
    }
}
console.log(bookingslist)
interaction.reply({embeds:[
    respond(`Information for flight **${flightnumber}**:`,
    `flightnumber: **${flightnumber}**
     available seats: **${flight.maxpassengers-flight.bookedseats}/${flight.maxpassengers}**
     aircraft: **${flight.aircraft}**
     departure: **${flight.departure}**
     destination: **${flight.destination}**
     pilot: <@${flight.pilot}>
     time: **${flight.time}**
     passengers: ${bookingslist}
     `)]})

      
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