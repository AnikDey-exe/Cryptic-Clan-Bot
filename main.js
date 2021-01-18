const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log('Cryptic Clan bot is online!');
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    

    if(cmd === `${prefix}`+'ping'){
        return message.reply("This message had a ping of something seconds")
    }
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let command = botsettings.command;
    

    if(cmd === `${prefix}`+'topic'){
        return message.reply("Remember to stay on topic and don't post explicit content!")
    }
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let command = botsettings.command;
    

    if(cmd === `${prefix}`+'help'){
        return message.reply("Use ^ for the prefix. Try commands such as ping and topic!")
    }
})


bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let command = botsettings.command;
    

    if(cmd === `${prefix}`+'gay'){
        var rand = Math.random(1,2);
        console.log(rand);
        if(rand == 1){
            return message.reply("You are gay!");
        }
        else {
            return message.reply("You are not gay!");
        }
    }
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let command = botsettings.command;
    

    if(cmd === `${prefix}`+'life'){
        return message.reply("We all live and death is always lurking nearby us. Treat everyday like the last day because you never know when fate will let you perish...");
    }
})



bot.login(process.env.token);