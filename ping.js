const db = require('quick.db')
const Discord = require('discord.js')


module.exports.run = async (client, message, args) => {

  message.channel.send('Test')

}

module.exports.config = {
  command: "ping"
}
