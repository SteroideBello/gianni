// Calling the package
const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const fs = require('fs');

let userData = JSON.parse(fs.readFileSync('commands/userData.json', 'utf8'));

client.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if(err) console.error(err);

  var jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if (jsfiles.length <= 0) { return console.log('No commands found...')}
  else { console.log(jsfiles.length + ' commands found.')}

  jsfiles.forEach((f, i) => {
    var cmds = require(`./commands/${f}`);
    console.log(`Command ${f} loading...`);
    client.commands.set(cmds.config.command, cmds);
  })
})


// Listener Event: Message Received (This will run every time a message is received)
client.on('message', message => {

  // Variables
  var sender = message.author; // The person who sent the message
  var msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase
  var prefix = '/' // The text before commands
  var cont = message.content.slice(prefix.length).split(" ");
  var args = cont.slice(1);

  if (client.user.id === message.author.id) {return}

  // Events
  if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
  if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 0;

  fs.writeFile('commands/userData.json', JSON.stringify(userData), (err) => {
    if (err) console.error(err);
  })

  if(!message.content.startsWith(prefix)) return;

  var cmd = client.commands.get(cont[0])
  if (cmd) cmd.run(client, message, args);

  let mention1 = message.mentions.users.first();
  let mention = message.mentions.members.first()

  const filter = (reaction, user) => ['✅', '❎'].includes(reaction.emoji.name) && user.id === mention.id;

  if (msg.startsWith (prefix + 'CHALLENGE')) {
    if (mention == null) {
    message.channel.send(message.author + ", You need to mention someone!")
    return}
    if(mention == message.author) {
    message.channel.send(message.author + ", You can't challenge yourself!")
    return}
    if(mention1 == client.users.get('580835593618063367')) {
    message.channel.send(message.author + ", I'm too strong to compete with you, try mentioning another player")
    return}
    if(mention1 == client.users.get('155149108183695360')) {
    message.channel.send(message.author + ", you can't challenge a bot! Find the courage to challenge a real person!!")
    return}
    if(mention1 == client.users.get('184405311681986560')) {
    message.channel.send(message.author + ", you can't challenge a bot! Find the courage to challenge a real person!!")
    return}
    if(mention1 == client.users.get('395385545326592010')) {
    message.channel.send(message.author + ", you can't challenge a bot! Find the courage to challenge a real person!!")
    return}
    if(mention1 == client.users.get('365975655608745985')) {
    message.channel.send(message.author + ", you can't challenge a bot! Find the courage to challenge a real person!!")
    return}
    if(mention1 == client.users.get('204255221017214977')) {
    message.channel.send(message.author + ", you can't challenge a bot! Find the courage to challenge a real person!!")
    return}
    if(mention1 == client.users.get('585194004581449758')) {
    message.channel.send(message.author + ", Not sure, BeeBot was created the year -3192 and by the time it was the only survivor of that time")
    return}
    if (message.member.roles.has('580756695790125057') && mention.roles.has('580756764962848769')) {
    message.channel.send(message.author + ", You can't challenge a Bronze member!!")
    return}
    if (message.member.roles.has('580756671555567638') && mention.roles.has('580756764962848769')) {
    message.channel.send(message.author + ", You can't challenge a Bronze member!!")
    return}
    if (message.member.roles.has('580756671555567638') && mention.roles.has('580756752446914573')) {
    message.channel.send(message.author + ", You can't challenge a Silver member!!")
    return}
    if (message.member.roles.has('580756632997462017') && mention.roles.has('580756764962848769')) {
    message.channel.send(message.author + ", You can't challenge a Bronze member!!")
    return}
    if (message.member.roles.has('580756632997462017') && mention.roles.has('580756752446914573')) {
    message.channel.send(message.author + ", You can't challenge a Silver member!!")
    return}
    message.channel.send(mention + ', you are being challenged to a **Random map** with **Random hero** by '  + message.author + '! **_DO YOU ACCEPT?_**').then(async msg => {
      await msg.react('✅');
      await msg.react('❎');

      msg.awaitReactions(filter, {
        max: 1,
        time: 300000,
        errors: ['time']
      }).then(collected => {

        const reaction = collected.first();

        switch (reaction.emoji.name) {
          case '✅':
          var embed = new Discord.RichEmbed()
          .setDescription(mention + ' **vs** ' + message.author + '\n\nPlay in: ' + messages[random_index] + '\n0 - 0')
          .addField("Time", message.createdAt)
          .setColor('RANDOM')
          client.channels.get(`608559455113838602`).send(embed)
          break;
          case '❎':
          message.channel.send(message.author + ', ' + mention + ' has declined the game request!')
          break;
        }

      }).catch(collected => {
        return message.channel.send(message.author + ', the request has timed out!');
      });
    })
  }


const messages = ['\n**Central Core** with **Magmax**', '\n**Central Core** with **Rime**', '\n**Central Core** with **Morfe**', '\n**Central Core** with **Aurora**', '\n**Central Core** with **Necro**', '\n**Central Core** with **Brute**', '\n**Central Core** with **Nexus**', '\n**Central Core** with **Shade**', '\n**Central Core** with **Euclid**', '\n**Central Core** with **Chrono**', '\n**Central Core** with **Reaper**', '\n**Central Core** with **Rameses**', '\n**Central Core** with **Jolt**', '\n**Central Core** with **Ghoul**', '\n**Central Core** with **Cent**', '\n**Central Core** with **Jötunn**', '\n**Central Core** with **Candy**', '\n**Central Core** with **Mirage**', '\n**Central Core Hard** with **Magmax**', '\n**Central Core Hard** with **Rime**', '\n**Central Core Hard** with **Morfe**', '\n**Central Core Hard** with **Aurora**', '\n**Central Core Hard** with **Necro**', '\n**Central Core Hard** with **Brute**', '\n**Central Core Hard** with **Nexus**', '\n**Central Core Hard** with **Shade**', '\n**Central Core Hard** with **Euclid**', '\n**Central Core Hard** with **Chrono**', '\n**Central Core Hard** with **Reaper**', '\n**Central Core Hard** with **Rameses**', '\n**Central Core Hard** with **Jolt**', '\n**Central Core Hard** with **Ghoul**', '\n**Central Core Hard** with **Cent**', '\n**Central Core Hard** with **Jötunn**', '\n**Central Core Hard** with **Candy**', '\n**Central Core Hard** with **Mirage**', '\n**Vicious Valley** with **Magmax**', '\n**Vicious Valley** with **Rime**', '\n**Vicious Valley** with **Morfe**', '\n**Vicious Valley** with **Aurora**', '\n**Vicious Valley** with **Necro**', '\n**Vicious Valley** with **Brute**', '\n**Vicious Valley** with **Nexus**', '\n**Vicious Valley** with **Shade**', '\n**Vicious Valley** with **Euclid**', '\n**Vicious Valley** with **Chrono**', '\n**Vicious Valley** with **Reaper**', '\n**Vicious Valley** with **Rameses**', '\n**Vicious Valley** with **Jolt**', '\n**Vicious Valley** with **Ghoul**', '\n**Vicious Valley** with **Cent**', '\n**Vicious Valley** with **Jötunn**', '\n**Vicious Valley** with **Candy**', '\n**Vicious Valley** with **Mirage**', '\n**Vicious Valley Hard** with **Magmax**', '\n**Vicious Valley Hard** with **Rime**', '\n**Vicious Valley Hard** with **Morfe**', '\n**Vicious Valley Hard** with **Aurora**', '\n**Vicious Valley Hard** with **Necro**', '\n**Vicious Valley Hard** with **Brute**', '\n**Vicious Valley Hard** with **Nexus**', '\n**Vicious Valley Hard** with **Shade**', '\n**Vicious Valley Hard** with **Euclid**', '\n**Vicious Valley Hard** with **Chrono**', '\n**Vicious Valley Hard** with **Reaper**', '\n**Vicious Valley Hard** with **Rameses**', '\n**Vicious Valley Hard** with **Jolt**', '\n**Vicious Valley Hard** with **Ghoul**', '\n**Vicious Valley Hard** with **Cent**', '\n**Vicious Valley Hard** with **Jötunn**', '\n**Vicious Valley Hard** with **Candy**', '\n**Vicious Valley Hard** with **Mirage**', '\n**Elite Expanse** with **Magmax**', '\n**Elite Expanse** with **Rime**', '\n**Elite Expanse** with **Morfe**', '\n**Elite Expanse** with **Aurora**', '\n**Elite Expanse** with **Necro**', '\n**Elite Expanse** with **Brute**', '\n**Elite Expanse** with **Nexus**', '\n**Elite Expanse** with **Shade**', '\n**Elite Expanse** with **Euclid**', '\n**Elite Expanse** with **Chrono**', '\n**Elite Expanse** with **Reaper**', '\n**Elite Expanse** with **Rameses**', '\n**Elite Expanse** with **Jolt**', '\n**Elite Expanse** with **Ghoul**', '\n**Elite Expanse** with **Cent**', '\n**Elite Expanse** with **Jötunn**', '\n**Elite Expanse** with **Candy**', '\n**Elite Expanse** with **Mirage**', '\n**Wacky Wonderland** with **Magmax**', '\n**Wacky Wonderland** with **Rime**', '\n**Wacky Wonderland** with **Morfe**', '\n**Wacky Wonderland** with **Aurora**', '\n**Wacky Wonderland** with **Necro**', '\n**Wacky Wonderland** with **Brute**', '\n**Wacky Wonderland** with **Nexus**', '\n**Wacky Wonderland** with **Shade**', '\n**Wacky Wonderland** with **Euclid**', '\n**Wacky Wonderland** with **Chrono**', '\n**Wacky Wonderland** with **Reaper**', '\n**Wacky Wonderland** with **Rameses**', '\n**Wacky Wonderland** with **Jolt**', '\n**Wacky Wonderland** with **Ghoul**', '\n**Wacky Wonderland** with **Cent**', '\n**Wacky Wonderland** with **Jötunn**', '\n**Wacky Wonderland** with **Candy**', '\n**Wacky Wonderland** with **Mirage**', '\n**Glacial Gorge** with **Magmax**', '\n**Glacial Gorge** with **Rime**', '\n**Glacial Gorge** with **Morfe**', '\n**Glacial Gorge** with **Aurora**', '\n**Glacial Gorge** with **Necro**', '\n**Glacial Gorge** with **Brute**', '\n**Glacial Gorge** with **Nexus**', '\n**Glacial Gorge** with **Shade**', '\n**Glacial Gorge** with **Euclid**', '\n**Glacial Gorge** with **Chrono**', '\n**Glacial Gorge** with **Reaper**', '\n**Glacial Gorge** with **Rameses**', '\n**Glacial Gorge** with **Jolt**', '\n**Glacial Gorge** with **Ghoul**', '\n**Glacial Gorge** with **Cent**', '\n**Glacial Gorge** with **Jötunn**', '\n**Glacial Gorge** with **Candy**', '\n**Glacial Gorge** with **Mirage**', '\n**Dangerous District** with **Magmax**', '\n**Dangerous District** with **Rime**', '\n**Dangerous District** with **Morfe**', '\n**Dangerous District** with **Aurora**', '\n**Dangerous District** with **Necro**', '\n**Dangerous District** with **Brute**', '\n**Dangerous District** with **Nexus**', '\n**Dangerous District** with **Shade**', '\n**Dangerous District** with **Euclid**', '\n**Dangerous District** with **Chrono**', '\n**Dangerous District** with **Reaper**', '\n**Dangerous District** with **Rameses**', '\n**Dangerous District** with **Jolt**', '\n**Dangerous District** with **Ghoul**', '\n**Dangerous District** with **Cent**', '\n**Dangerous District** with **Jötunn**', '\n**Dangerous District** with **Candy**', '\n**Dangerous District** with **Mirage**', '\n**Peculiar Pyramid** with **Magmax**', '\n**Peculiar Pyramid** with **Rime**', '\n**Peculiar Pyramid** with **Morfe**', '\n**Peculiar Pyramid** with **Aurora**', '\n**Peculiar Pyramid** with **Necro**', '\n**Peculiar Pyramid** with **Brute**', '\n**Peculiar Pyramid** with **Nexus**', '\n**Peculiar Pyramid** with **Shade**', '\n**Peculiar Pyramid** with **Euclid**', '\n**Peculiar Pyramid** with **Chrono**', '\n**Peculiar Pyramid** with **Reaper**', '\n**Peculiar Pyramid** with **Rameses**', '\n**Peculiar Pyramid** with **Jolt**', '\n**Peculiar Pyramid** with **Ghoul**', '\n**Peculiar Pyramid** with **Cent**', '\n**Peculiar Pyramid** with **Jötunn**', '\n**Peculiar Pyramid** with **Candy**', '\n**Peculiar Pyramid** with **Mirage**', '\n**Monumental Migration** with **Magmax**', '\n**Monumental Migration** with **Rime**', '\n**Monumental Migration** with **Morfe**', '\n**Monumental Migration** with **Aurora**', '\n**Monumental Migration** with **Necro**', '\n**Monumental Migration** with **Brute**', '\n**Monumental Migration** with **Nexus**', '\n**Monumental Migration** with **Shade**', '\n**Monumental Migration** with **Euclid**', '\n**Monumental Migration** with **Chrono**', '\n**Monumental Migration** with **Reaper**', '\n**Monumental Migration** with **Rameses**', '\n**Monumental Migration** with **Jolt**', '\n**Monumental Migration** with **Ghoul**', '\n**Monumental Migration** with **Cent**', '\n**Monumental Migration** with **Jötunn**', '\n**Monumental Migration** with **Candy**', '\n**Monumental Migration** with **Mirage**', '\n**Humongous Hollow** with **Magmax**', '\n**Humongous Hollow** with **Rime**', '\n:trophy: **STELLAR SQUARE** with **MORFE**:trophy: **50 CPs TO THE WINNER :confetti_ball:**',  '\n**Humongous Hollow** with **Morfe**', '\n**Humongous Hollow** with **Aurora**', '\n**Humongous Hollow** with **Necro**', '\n**Humongous Hollow** with **Brute**', '\n**Humongous Hollow** with **Nexus**', '\n**Humongous Hollow** with **Shade**', '\n**Humongous Hollow** with **Euclid**', '\n**Humongous Hollow** with **Chrono**', '\n**Humongous Hollow** with **Reaper**', '\n**Humongous Hollow** with **Rameses**', '\n**Humongous Hollow** with **Jolt**', '\n**Humongous Hollow** with **Ghoul**', '\n**Humongous Hollow** with **Cent**', '\n**Humongous Hollow** with **Jötunn**', '\n**Humongous Hollow** with **Candy**', '\n**Humongous Hollow** with **Mirage**', '\n**Haunted Halls** with **Magmax**', '\n**Haunted Halls** with **Rime**', '\n**Haunted Halls** with **Morfe**', '\n**Haunted Halls** with **Aurora**', '\n**Haunted Halls** with **Necro**', '\n**Haunted Halls** with **Brute**', '\n**Haunted Halls** with **Nexus**', '\n**Haunted Halls** with **Shade**', '\n**Haunted Halls** with **Euclid**', '\n**Haunted Halls** with **Chrono**', '\n**Haunted Halls** with **Reaper**', '\n**Haunted Halls** with **Rameses**', '\n**Haunted Halls** with **Jolt**', '\n**Haunted Halls** with **Ghoul**', '\n**Haunted Halls** with **Cent**', '\n**Haunted Halls** with **Jötunn**', '\n**Haunted Halls** with **Candy**', '\n**Haunted Halls** with **Mirage**', '\n**Quiet Quarry** with **Magmax**', '\n**Quiet Quarry** with **Rime**', '\n**Quiet Quarry** with **Morfe**', '\n**Quiet Quarry** with **Aurora**', '\n**Quiet Quarry** with **Necro**', '\n**Quiet Quarry** with **Brute**', '\n**Quiet Quarry** with **Nexus**', '\n**Quiet Quarry** with **Shade**', '\n**Quiet Quarry** with **Euclid**', '\n**Quiet Quarry** with **Chrono**', '\n**Quiet Quarry** with **Reaper**', '\n**Quiet Quarry** with **Rameses**', '\n**Quiet Quarry** with **Jolt**', '\n**Quiet Quarry** with **Ghoul**', '\n**Quiet Quarry** with **Cent**', '\n**Quiet Quarry** with **Jötunn**', '\n**Quiet Quarry** with **Candy**', '\n**Quiet Quarry** with **Mirage**', '\n**Frozen Fjord** with **Magmax**', '\n**Frozen Fjord** with **Rime**', '\n**Frozen Fjord** with **Morfe**', '\n**Frozen Fjord** with **Aurora**', '\n**Frozen Fjord** with **Necro**', '\n**Frozen Fjord** with **Brute**', '\n**Frozen Fjord** with **Nexus**', '\n**Frozen Fjord** with **Shade**', '\n**Frozen Fjord** with **Euclid**', '\n**Frozen Fjord** with **Chrono**', '\n**Frozen Fjord** with **Reaper**', '\n**Frozen Fjord** with **Rameses**', '\n**Frozen Fjord** with **Jolt**', '\n**Frozen Fjord** with **Ghoul**', '\n**Frozen Fjord** with **Cent**', '\n**Frozen Fjord** with **Jötunn**', '\n**Frozen Fjord** with **Candy**', '\n**Frozen Fjord** with **Mirage**', '\n**Ominous Occult** with **Magmax**', '\n**Ominous Occult** with **Rime**', '\n**Ominous Occult** with **Morfe**', '\n**Ominous Occult** with **Aurora**', '\n**Ominous Occult** with **Necro**', '\n**Ominous Occult** with **Brute**', '\n**Ominous Occult** with **Nexus**', '\n**Ominous Occult** with **Shade**', '\n**Ominous Occult** with **Euclid**', '\n**Ominous Occult** with **Chrono**', '\n**Ominous Occult** with **Reaper**', '\n**Ominous Occult** with **Rameses**', '\n**Ominous Occult** with **Jolt**', '\n**Ominous Occult** with **Ghoul**', '\n**Ominous Occult** with **Cent**', '\n**Ominous Occult** with **Jötunn**', '\n**Ominous Occult** with **Candy**', '\n**Ominous Occult** with **Mirage**', '\n**Restless Ridge** with **Magmax**', '\n**Restless Ridge** with **Rime**', '\n**Restless Ridge** with **Morfe**', '\n**Restless Ridge** with **Aurora**', '\n**Restless Ridge** with **Necro**', '\n**Restless Ridge** with **Brute**', '\n**Restless Ridge** with **Nexus**', '\n**Restless Ridge** with **Shade**', '\n**Restless Ridge** with **Euclid**', '\n**Restless Ridge** with **Chrono**', '\n**Restless Ridge** with **Reaper**', '\n**Restless Ridge** with **Rameses**', '\n**Restless Ridge** with **Jolt**', '\n**Restless Ridge** with **Ghoul**', '\n**Restless Ridge** with **Cent**', '\n**Restless Ridge** with **Jötunn**', '\n**Restless Ridge** with **Candy**', '\n**Restless Ridge** with **Mirage**', '\n**Peculiar Pyramid Perimetr** with **Magmax**', '\n**Peculiar Pyramid Perimetr** with **Rime**', '\n**Peculiar Pyramid Perimetr** with **Morfe**', '\n**Peculiar Pyramid Perimetr** with **Aurora**', '\n**Peculiar Pyramid Perimetr** with **Necro**', '\n**Peculiar Pyramid Perimetr** with **Brute**', '\n**Peculiar Pyramid Perimetr** with **Nexus**', '\n**Peculiar Pyramid Perimetr** with **Shade**', '\n**Peculiar Pyramid Perimetr** with **Euclid**', '\n**Peculiar Pyramid Perimetr** with **Chrono**', '\n**Peculiar Pyramid Perimetr** with **Reaper**', '\n**Peculiar Pyramid Perimetr** with **Rameses**', '\n**Peculiar Pyramid Perimetr** with **Jolt**', '\n**Peculiar Pyramid Perimetr** with **Ghoul**', '\n**Peculiar Pyramid Perimetr** with **Cent**', '\n**Peculiar Pyramid Perimetr** with **Jötunn**', '\n**Peculiar Pyramid Perimetr** with **Candy**', '\n**Peculiar Pyramid Perimetr** with **Mirage**'];
number = 307;
const random_index = Math.floor(Math.random() * (number - 1 + 1)) +1;

// Vedere il profilo di qualche giocatore sul gioco
  if (msg.startsWith(`${prefix}PROFILE`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if (!text) return message.reply('Hey, say a correct name please')
    message.channel.send('https://evades.io/profile/'+ text) }

//Money [Access your balance]
  if (msg === prefix + 'CP') {
    message.channel.send({embed:{
      title:"Bank",
      color:0xFFA07A,
      fields:[{
        name:'Account name',
        value:message.author.username,
        inline:true
      },
      {
        name:'CP',
        value:userData[sender.id + message.guild.id].money,
        inline:true
    }]
    }})
  }

  if(message.content.startsWith(`${prefix}createchannel`)) {
    const args = message.content.slice(15);
    message.guild.createChannel(`${args}`).then(channel => {
      channel.setTopic(`This is a test channel`)
    })
  }


});

// Listener Event: Bot Launched
client.on('ready', () => {
  console.log('Evades Tournaments is online...') // Runs when the bot is launched

  // Status
  client.user.setStatus('Online') // Status can be 'Online', 'Idle', 'Invisible', & 'dnd'

  // Game
  client.user.setActivity('Playing Evades.io Tournaments!')
});

// Login
client.login('NTgwODM1NTkzNjE4MDYzMzY3.XOW41w.2P2qZYFI78rfUGGbzkbPzbD0VkI') // Token of the bot
