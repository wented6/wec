const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});
client.on('message', msg => {
  if (msg.content === 'welcome') {
    msg.reply('` 𝐖elcome 𝐓o , **Universe.**');
  }
}); 




























   
   
   
   
   
   
   
   
   
   
   
   
   
client.login(process.env.WE);   
