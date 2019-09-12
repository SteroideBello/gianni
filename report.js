const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Couldn't find user.");
      let rreason = args.join(" ").slice(22);

      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", rreason);

      let reportschannel = message.guild.channels.find(x => x.name === "mod-log");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);


}

module.exports.config = {
  command: "report"
}
