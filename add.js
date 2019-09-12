const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {



    if (!message.member.hasPermission('MANAGE_ROLES')) {
        return message.reply('You\'re missing the permission `MANAGEROLES` to use this command.').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 5000); // delete after 5 seconds.
        })
    }

    if (!args[0]) return message.reply('Please specify an amount to add.')
    if (isNaN(args[0])) return message.reply('That was not a valid number!')

    let user = message.mentions.users.first() || message.author
    message.channel.send('Successfully added **' + args[0] + ' _CP_** to ' + user)
    client.channels.get(`605485160166588452`).send(message.author + ' Has successfully added **' + args[0] + ' _CP_** to ' + user + 's ' + user.id)
    db.add(`money_${message.guild.id}_${message.author.id}`, args[0])

}

module.exports.config = {
  command: "add"
}
