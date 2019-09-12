const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You must specify the number of text to delete');
    if(!args[0]) return message.channel.send('You must specify the number of messages to delete');
    if (isNaN(args[0])) return message.reply('That was not a valid number!')

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`**:pencil2: ${args[0]} messages have been deleted!**`).then(msg => msg.delete(5000));
    });

}

module.exports.config = {
  command: "clear"
}
