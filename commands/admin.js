const Discord = require("discord.js");
const fs = require('fs');
const { QuickDB } = require('quick.db');
const db = new QuickDB(); // using default driver
const  GuildMember= require("discord.js");
module.exports = {
    name: 'admin',
    description: "this is a ping command!",
   async execute(client, interaction){
        if(interaction.member.permissions.serialize().Administrator==false)
        {
            return
        }
      console.log(interaction.options.getString("command"))


      var dball= await db.all()
       var guildflights=[]
       for(let i=0;i<dball.length;i++)
       {
        console.log(dball[i])
        if(dball[i].value.guild==interaction.guild.id)
        {
            guildflights.push(dball[i].id)
        }
       }
    if(interaction.options.getString("command")=="dall")
    {
       
       for(let i=0;i<guildflights.length;i++)
       {
        await db.delete(guildflights[i])
       }
       console.log(guildflights)
       interaction.reply({embeds:[respond("Deleted all flights!","All flights have been removed from the list!")],ephemeral:true})
    }
    else
    {
        if(interaction.options.getString("flightnumber")==undefined)
        {
            interaction.reply({embeds:[respond("An Error encourred!","The opional field **flightnumber** hasn't been filled out!")],ephemeral:true})
        }
        for(let i=0;i<guildflights.length;i++)
       {
        if(guildflights[i]==interaction.options.getString("flightnumber"))
        {
        await db.delete(guildflights[i])
        }
       }
       console.log(guildflights)
       interaction.reply({embeds:[respond("Deleted flight "+interaction.options.getString("flightnumber"),interaction.options.getString("flightnumber")+" has been removed from the list!")],ephemeral:true})
    }
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