const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

  if (!message.member.hasPermission('ADMIN')) { // if message.author / member does not have the permission MANAGE_GUILD, return.
      return message.reply('You\'re missing the permission `ADMIN ` to use this command.').then(msg => {
          setTimeout(() => {
              msg.delete()
          }, 5000); // delete after 5 seconds.
      })
  }

  let admin = message.guild.roles.find(x => x.name === "Bronze");

admin.members.forEach(m => {
     m.removeRole(admin.id)
})

}

module.exports.config = {
  command: "reset"
}
