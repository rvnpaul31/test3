const Discord= require('discord.js')
const db = require('quick.db')
function sleep(ms) {
return new Promise((resolve) => {
  setTimeout(resolve, ms)})}
  const ms = require('ms')

module.exports = {
name: 'watch',
aliases: [],
run: async (client, message, args) => {
let prefix =  db.get(` ${process.env.owner}.prefix`)
if(prefix === null) prefix = process.env.prefix;
  let color = db.get(`${process.env.owner}.color`) 
   if(color === null  ) color = process.env.color

if(process.env.owner ===message.author.id || db.get(`ownermd.${message.author.id}`) === true) {

    if(!message.guild) return;


       if (args.length) {
        let str_content = args.join(" ")
        client.user.setPresence({ activity: { name: str_content, type: "WATCHING" }})
        .then(p => message.channel.send(`Je regarde maintenant ${str_content}`))
.catch(e => { return message.channel.send(`Une erreur a été rencontré.`); });
db.set(`watch`, str_content)
db.delete(`play`)
db.delete(`stream`)
db.delete(`listen`)
    } else {
    }
} else {

}

}
}