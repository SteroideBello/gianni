const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

message.delete().catch();
client.channels.get(`452603397733089280`).send(message.author + ", Has crashed the bot!")
message.author.send('**6 commands found**\n\n\n**Usage:** /help\n**Description:** Display a list of commands\n\n**Usage:** /challenge\n**Description:** Challenge someone\n\n**Usage:** /cp\n**Description:** Show your points\n\n**Usage:** /leadeboard\n**Description:** Show the leadeboard\n\n**Usage:** /report\n**Description:** Report a player\n\n\n\n**Admin Commands**\n\n\n**Usage:** /add\n**Description:** Add points to someone\n\n**Usage:** /remove\n**Description:** Remove points to someone\n\n**Usage:** /reset\n**Description:** Remove bronze role to everyone **_SOON YOU CAN REMOVE A SPECIFIC ROLE_**\n\n**Usage:** /poll\n**Description:** Create a poll\n\n**Usage:** /clear\n**Description:** Clear a certain number of messages')

}

module.exports.config = {
  command: "help"
}
