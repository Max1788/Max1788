const Discord = require('discord.js')
const client = new Discord.Client();

client.on('message', (message) =>{

  let prefix = ' aqui pon tu prefix'

  if(message.author.bot) return;

  if(!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.author
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();

  if (command === 'ping'){
    message.channel.send('pong!')
  }

})


const mySecret = process.env['TOKEN']
client.login(mySecret)
