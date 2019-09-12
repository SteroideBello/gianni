const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

  let money = db.fetch(`money_${message.guild.id}`, { sort: '.data'})
  if (money === null) money = 0;
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = bot.users.get(money[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${money[i].data}CP\n`
    }

    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
    .setDescription("🥇 **<@275465983664324620> `500` _CP_**\n🥈 **<@467049631222726656> `350` _CP_**\n🥉 **<@415994777604063232> `300` _CP_**\n**4. <@337268244010237958> `210` _CP_**\n**5. <@458196903012859916> `180` _CP_**\n**6. <@212042388397359104> `110` _CP_**\n**7. <@413898461889429514> `100` _CP_**\n**8. <@402053003474894849> `100` _CP_**\n**9. <@572610788657856527> `100` _CP_**\n**10. <@299284182734077952> `100` _CP_**")
    .addField("**_THE LEADERBOARD GET A RESET EVERY WEEK_**", message.createdAt)
    .setColor('LIGHT_GREY')

message.channel.send(embed)

}

module.exports.config = {
  command: "leaderboard"
}
