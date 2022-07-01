const Discord = require("discord.js");

const { Client, Intents, Collection, MessageEmbed, CommandInteraction, } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
 


client.on("ready", () => {
   console.log("bot opérationnel")
});

client.login("OTgwMDA2NTY2ODIyNTQzMzgw.Gb2t36.bc7MJCLW8lyGUYX3mRdDVAWctUclnRUAJohx_U")

client.on("messageCreate", message => {
     if(message.content === "/bouton"){
        var row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setCustomId("bouton1")
            .setLabel("n'appuye pas!")
            .setStyle("SUCCESS")
            .setEmoji("💕") 
        ).addComponents(new Discord.MessageButton()
            .setLabel("Site KobralostRP")
            .setStyle("LINK")
            .setEmoji("💻")
            .setURL("https://kobralost-rp.fr")
        ).addComponents(new Discord.MessageButton()
             .setLabel("Discord Kobralost")
             .setStyle("LINK")
             .setEmoji("🖥")
             .setURL("https://discord.com/invite/p2Rb8rZ6TM")
        );

        message.channel.send({content: "-__Informations Importantes__-\n**Clique sur les boutons pour pouvoir intéragir !**", components: [row]});
     }
});

client.on("interactionCreate", Interaction => {
    if(Interaction.isButton()){
        if(Interaction.customId === "bouton1"){
            Interaction.reply(`<@${Interaction.member.id}> Je t'avais prévenu, t'es con ou quoi ?!`);

            for (let i = 0; i < 5; i++) {
                const embed = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("__Gros Connard__")
            .setAuthor("KobralostRP", "https://i.imgur.com/2vJSCFY.png")
            .setDescription("Vous y trouverez un message pour vous faire chier!")
            .setTimestamp()
            .setFooter("Ce bot appartient à @Cerise#1237", "https://i.imgur.com/2vJSCFY.png")
            .setImage("https://i.imgur.com/8Nn1d2F.gif");
     
            Interaction.member.send(`<@${Interaction.member.id}> Je t'avais prévenu nan?!`);  
            Interaction.member.send({embeds: [embed]})
            .then(msg => { setTimeout(() => msg.delete(), 20000)})
    
              } 
        }
    }
});

client.on("guildMemberAdd", async member => {
    console.log("un membre est arrivé.");
    client.channels.cache.get("981833651081850882").send("<@" + member.id + "> est arrivé.");
});

client.on("guildMemberRemove", member => {
     console.log("un membre a quitté le serveur");
     client.channels.cache.get("981833651081850882").send(member.displayName + " a quitté le serveur.");
});

const prefix = "/";

client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!help
     if(message.content === prefix + "help"){
        const embed = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Liste des commandes")
            .setAuthor("KobralostRP", "https://i.imgur.com/2vJSCFY.png")
            .setDescription("Vous y trouverez la liste des commandes du bot")
            .addField("__/help__", "Affiche les commandes")
            .addField("__bouton__", "afficher un message avec bouton")
            .setTimestamp()
            .setFooter("Ce bot appartient à @Cerise#1237", "https://i.imgur.com/2vJSCFY.png")

        message.channel.send({ embeds: [embed]});    
     }
});


