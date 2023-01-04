const Discord = require("discord.js");
const fs = require('fs');

const { QuickDB } = require('quick.db');
const db = new QuickDB();
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
if(await db.has(flightnum)&&await db.get(`${flightnum}.pilot`)==interaction.user.id)
{

    await db.delete(flightnum)
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