const Discord = require('discord.js');
const client = new Discord.Client();




client.on("message", message => {
	var prefix = "";
 if (message.content === "welcome.png") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`

	  ` 𝐖elcome 𝐓o , **Universe.**
`)
   message.channel.sendEmbed(embed)
    
   }
   }); 
   
   
   
   
   
   
client.on("message", message => {
	var prefix = "";
 if (message.content === "welcome") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`

	  ` 𝐖elcome 𝐓o , **Universe.**
`)
   message.channel.sendEmbed(embed)
    
   }
   }); 
   
   
   
   
   
   
   
   
   
   
   
   
   
client.login(process.env.WE);   
