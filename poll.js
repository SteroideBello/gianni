// This command requires the discord-js package to create embeds
const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {

    // Role Verification (Optional)
     // if (!message.member.roles.find(r => r.name === 'Staff')) return message.channel.send('This requires the role: STAFF');

    // Permission Verification (Optional)
    if (!message.member.hasPermission('MENTION_EVERYONE')) return message.channel.send('This requires the permission: MENTION EVERYONE');

    if (!args[0]) return message.channel.send('Proper Usage: <prefix>poll question');

    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter('React to vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll created by ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react('✅');
    await msg.react('❌');

    message.delete({timeout: 1000}); // This waits 1000 milliseconds before deleting (1 second)

}

module.exports.config = {
  command: "poll"
}
