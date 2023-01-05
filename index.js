const { Client, GatewayIntentBits } = require("discord.js");
const Discord = require("discord.js");
const prefix = "!";
require("dotenv").config();
const fs= require("fs")
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const flightdb=db.table('flights')
const client = new Discord.Client({
  allowedMentions: {
    parse: ["users", "roles"],
    repliedUser: true,
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages
  ],
  partials: ["CHANNEL"],
});
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
  //create collection of all commandscreate commands
  client.commands_create = new Discord.Collection();
  const commandFiles_create = fs
  .readdirSync("./commands_create/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles_create) {
  const command = require(`./commands_create/${file}`);

  client.commands_create.set(command.name, command);
}

client.once("ready", () => {
  console.log("Bot is online!");
  client.user.setActivity("PTFS-Airline Tools", {
    type: "WATCHING",
   });

const guildID="981253723508576336"
const guild= client.guilds.cache.get(guildID)
let commands
if(guild&&process.env.localcommand=="true")
{
    commands=guild.commands
    console.log("Command: only test guild")
}
else
{
    commands=client.application?.commands
    console.log("Command: global")
}


commands?.create({
    name:"help",
    description:"Get help!"
})
client.commands_create.get("planflight").execute(commands);
client.commands_create.get("flights").execute(commands);
client.commands_create.get("takeoff").execute(commands);
client.commands_create.get("admin").execute(commands);
client.commands_create.get("flightinfo").execute(commands);
client.commands_create.get("book").execute(commands);
//console.log(client.commands_create)


});
client.on("interactionCreate",async (interaction)=>{
    const { commandName,options}=interaction
    if (interaction.isButton()){
        const customId=interaction.customId
     console.log(customId.replace("confirm",""))
   if(customId.endsWith("confirm"))
   {
    // Updates the interaction 
    interaction.update({ content: 'Confirmed flight!', components: [] });
  //set confirmed in db true
  await flightdb.set(`${customId.replace("confirm","")}.confirmed`,true)
   }
   else
   {
    // Delete the QUITTED flight.
    interaction.update({ content: 'Quitted flight!', components: [] ,ephermal:true});
    await flightdb.delete(`${customId.replace("quit","")}`)
   }
      
        return;
    } 
	
if(!interaction.type === interaction.type.ApplicationCommand){
    return
}
if(commandName=="help")
{
    client.commands.get("help").execute(client,interaction);
}
if(commandName=="planflight")
{
    client.commands.get("planflight").execute(client,interaction);
}
if(commandName=="flights")
{
    client.commands.get("flights").execute(client,interaction);
}
if(commandName=="takeoff")
{
    client.commands.get("takeoff").execute(client,interaction);
}
if(commandName=="admin")
{
    client.commands.get("admin").execute(client,interaction);
}
if(commandName=="flightinfo")
{
    client.commands.get("flightinfo").execute(client,interaction);
}
if(commandName=="book")
{
    client.commands.get("book").execute(client,interaction);
}



})

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
});
client.login(process.env.token);