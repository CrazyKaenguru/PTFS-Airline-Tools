const Discord = require("discord.js");
const fs = require('fs');


module.exports = {
    name: 'help',
    description: "this is a ping command!",
    execute(client, interaction){
        const helpEmbed = new Discord.EmbedBuilder()
.setTitle("All Commands:")
.setDescription(`
**/help**   to view all Commands!
**/flights**   to view all flights on this server!
**/flights [flightinfo]**   to view to view all information of a special flight!
**/planflight [pilot] [aircraft] [maxpassengers] [departure] [destination] [time]**"   to plan a flight!
**/takeoff [flightnumber]**   to remove a flight from the list! (only the pilot of the flight can do this)
**/book [flightnumber] [class]**   to book a flight!
**/admin [command] [(flightnumber)]**   to remove one or all flights from the list! (admin only)  `)
.setColor('#ffff00')
        interaction.reply({embeds:[helpEmbed]})
    }
}