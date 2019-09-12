const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (client, message, args, config) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) { // if message.author / member does not have the permission MANAGE_GUILD, return.
        return message.reply('You\'re missing the permission `ADMINISTRATOR ` to use this command.').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 5000); // delete after 5 seconds.
        })
    }

    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, you need to input a valid number to remove.`) // if args[0] (first input) is not a number, return.
    db.subtract(`money_${user.id}`, args[0]) // subtract it now
    let bal = await db.fetch(`money_${user.id}`)

    let embed = new Discord.RichEmbed()
    .setAuthor(`Removed CP!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]}CP`)
    .addField(`Balance Updated`, `${bal}CP`)
    .setColor("RED") // random = "RANDOM"
    .setTimestamp()
    // you can change it to args[1] if you want to, but then it's not gonna work like I want it to.

    message.channel.send(embed)
    client.channels.get(`605485160166588452`).send(embed)

}

module.exports.config = {
  command: "remove"
}
