const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("547879725851213854")
setInterval(function() {
channel.send(` خرقي ينبض اه اه ولددددددددددددددددددددددددددد قحبهههههه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
