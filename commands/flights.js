const { table } = require("console");
const Discord = require("discord.js");
const fs = require('fs');
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
    name: 'flights',
    description: "this is a ping command!",
   async execute(client, interaction){
    const tablegapsize=12
        var dball=await db.all()
        var flights=[]
        var resflights=""
        for(let i =0;i< dball.length;i++)
        {
       
        if(dball[i].value.guild==interaction.guild.id&&dball[i].value.confirmed==true)
        {
            const values=dball[i].value
            flights.push(dball[i].id.toString()+calculategapspaces(dball[i].id.toString().length)+values.time+calculategapspaces(values.time.length,20)+values.departure+calculategapspaces(values.departure.length,12)+values.destination+calculategapspaces(values.destination.length,18))//+values.aircraft+calculategapspaces(values.aircraft.length,12)+await client.users.cache.get(values.pilot).tag)
        }
        }
        function calculategapspaces(usedlength,specialgapsize)
        {
            var tablegapspaces=""
            var size
            if(specialgapsize==undefined){size=tablegapsize}
            else{ size=specialgapsize}
            for(let i=1;i<size-usedlength;i++)
            {
                
                tablegapspaces=tablegapspaces+"-"
            }
            
            tablegapspaces=tablegapspaces+"|"
            
            return tablegapspaces
        }
        for(let i=0;i<flights.length;i++)
        {
            flights[i] = flights[i].toString()+"\n"
            resflights+=flights[i]
        }
       function calulatedottedlinespacer()
       { 
        var result=""
        var max=55//flights[0].length
        for(let i=0;i<flights.length;i++)
        {
            if(flights[i].length>max)
            {
                if(flights[i].length<97)
            { max=flights[i].length}
            else{max=97}
            }
        }
       console.log(max)
       for(let i=0;i<max;i++)
       {
         result=result+"—"
       }
       return result
       }

       
resflights="```\nflight num.|time               |departure  |destination\n"+calulatedottedlinespacer()+"\n"+resflights+"\n```"
        console.log(resflights)
    
  
        interaction.reply(resflights)
    }
}