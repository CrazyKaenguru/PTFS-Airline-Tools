const Discord = require("discord.js");
const fs = require('fs');
const { QuickDB } = require('quick.db');
const book = require("./book");
const db = new QuickDB();
const bookingsdb = db.table("bookings");
const flightdb = db.table("flights");
module.exports = {
    name: 'takeoff',
    description: "this is a ping command!",
  async  execute(client, interaction){
        const successembed = new Discord.EmbedBuilder()
.setTitle("Successfully took off!")
.setDescription("The Fflight has been removed from the list!")
.setColor('#ffff00')
const flightnum=interaction.options.getString("flight")
console.log(interaction.user.id)
if(await flightdb.has(flightnum)&&await flightdb.get(`${flightnum}.pilot`)==interaction.user.id)
{
     var allbookings = await bookingsdb.all()
     for(let i=0;i<allbookings.length;i++)
     {
        if(allbookings[i].value.flightnumber==flightnum)
        {
            await bookingsdb.delete(allbookings[i].id)
        }
     }
    await flightdb.delete(flightnum)
        interaction.reply({embeds:[respond("The flight has been successfully removed from the list!",true)]})

    }
    else
    {
        interaction.reply({embeds:[respond("Flightnumber was input wrong or you aren't the pilot!",false)]})
    }
}
}
function respond(description,success)
{
    var title
   if(success)
   {
    title="Successfull takeoff!"
   }
   else
   {
    title="An error encourred!"
   }
    const successembed = new Discord.EmbedBuilder()
.setTitle(title)
.setDescription(description)
.setColor('#ffff00')
return successembed
}