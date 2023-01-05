const Discord = require("discord.js");
const fs = require("fs");
const { QuickDB } = require("quick.db");
const db = new QuickDB(); // using default driver
const flightdb = db.table("flights");
const bookingsdb = db.table("bookings");

module.exports = {
  name: "book",
  description: "this is a ping command!",
  async execute(client, interaction) {
   
    var flightnumber = interaction.options.getString("flight");
    var bookingdball=await bookingsdb.all()
    console.log(bookingdball)
    if (!(await flightdb.has(flightnumber))) {
      interaction.reply({
        embeds: [respond("An error encourred!", "flight not found!")],
      });
      return;
    }
   for(let i=0;i<bookingdball.length;i++)
   {
    if(bookingdball[i].value.user==interaction.user.id)
    {
      interaction.reply({ embeds: [respond("An error encourred!", "You already booked this flight!")],});
      return
    }
   }
   var flight = await flightdb.get(flightnumber);
   if(flight.bookedseats>=flight.maxpassengers)
   {
    interaction.reply({ embeds: [respond("An error encourred!", "All seats have already been booked!")],});
      return
   }
   
    
   
    const bookedclass = interaction.options.getString("class");
    var bookingnumber = (Math.random() * (9999 - 1) + 1) .toString() .split(".")[0];
    if ((await bookingsdb.all().length) != undefined) {
      for ( i = await bookingsdb.all().length; await bookingsdb.has(bookingnumber); i++) {
        //wait until nique bookingid has been found
        bookingnumber = (Math.random() * (9999 - 1) + 1)
          .toString()
          .split(".")[0];
      }
     
    }
   // console.log(bookingnumber);
    await bookingsdb.set(bookingnumber,{user:interaction.user.id,flightnumber:flightnumber,class:bookedclass})
    await flightdb.add(`${flightnumber}.bookedseats`,1)
    interaction.reply({
        embeds: [respond("Successfully booked flight!", "Your bookingnumber is: \n**"+bookingnumber+"**")],
      });
  }
};

function respond(title, description) {
  const resembed = new Discord.EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor("#ffff00");
  return resembed;
}
