const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
});
client.on('message', msg => {
  if (msg.content === 'welcome') {
    msg.reply('` 𝐖elcome 𝐓o , **Universe.**');
  }
}); 




























   
   
   
   
   
   
   
   
   
   
   
   
   
client.login(process.env.WE);   
