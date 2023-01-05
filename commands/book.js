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
    // console.log(await bookingsdb.all())
    var flightnumber = interaction.options.getString("flight");
    if (!(await flightdb.has(flightnumber))) {
      interaction.reply({
        embeds: [respond("An error encourred!", "flight not found!")],
      });
      return;
    }
    var flight = await flightdb.get(flightnumber);
    console.log(flight);
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
    console.log(bookingnumber);
    await bookingsdb.set(bookingnumber,{user:interaction.user.id,flightnumber:flightnumber,class:bookedclass})
    interaction.reply({
        embeds: [respond("Successfully booked flight!", "Your bookingnumber is: \n"+bookingnumber)],
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
