const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        status: 'online',
        activity: {
            name: 'currently in development',
            type: 'PLAYING',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    })
    console.log('Cryptic Clan bot is online!');
})

bot.on("guildMemberAdd",function(message) {
    member.guild.channels.get('756159066564460545').send('Welcome!');
});


bot.on("guildMemberRemove", member => {
    const byeChannel = member.guild.channels.cache.find(channel => channel.name === '📄│join-and-leave-log');
    byeChannel.send(`Goodbye! ${member}`);
})

let censor = "[Sorry, I Swear]";

/*bot.on("message", async message => {
    let edit = message.content.replace(/asshole/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})*/

bot.on('message', message => {
    let delAmount;
  /*  let mutedRole= message.member.guild.roles.cache.find(role => role.name === "Muted");
    let adminRole= message.member.guild.roles.cache.find(role => role.name === "Administrator");
    let modRole= message.member.guild.roles.cache.find(role => role.name === "Moderator");
    let ownerRole= message.member.guild.roles.cache.find(role => role.name === "Owner");
    let founderRole= message.member.guild.roles.cache.find(role => role.name === "Founder");
    let memberRole= message.member.guild.roles.cache.find(role => role.name === "Server Member");
    let staffRole= message.member.guild.roles.cache.find(role => role.name === "Board of Directors"); */
    //let member = message.member;
    /*let adminRole = member.guild.roles.find("name", "Administrator");
    let modRole = member.guild.roles.find("name", "Moderator");
    let ownerRole = member.guild.roles.find("name", "Owner");
    let founderRole = member.guild.roles.find("name", "Founder");
    let memberRole = member.guild.roles.find("name", "Member");
    let staffRole = member.guild.roles.find("name", "Board of Directors");*/

   /* if(message.content.toLowerCase().includes("everyone") &&   
    !message.member.roles.cache.some(role => role.name === "Administrator") || 
    !message.member.roles.cache.some(role => role.name === "Moderator")) {
        //message.channel.type === (`"dm"`) + message.author.send(`Do not mass mention!`);
        message.delete();
        message.channel.send({embed: {
            author: {
                name: "Cryptic Clan Bot",
            },
            title: "Warn",
            color: 3447003,
            description: `${message.author.username} has been warned for: Mass Mention.`,
            timestamp: new Date(),
            footer: {
              text: "© Cryptic Clan Moderation"
            }
        }});
    }*/

   /* if(message.content.toLowerCase().includes("^verify") && message.channel.name === 'verify'){
        if(!message.member.roles.cache.has(memberRole)){
            message.delete();
            message.guild.members.cache.get(message.author.id).roles.add(memberRole);
            message.channel.type === (`"dm"`) + message.author.send(`You have been successfully verified!`);
        } 
        else if(message.member.roles.cache.has(memberRole)){
            message.delete();
            message.channel.type === (`"dm"`) + message.author.send(`You have been already verified silly!`);
        }
    }

    if(!message.content.toLowerCase().includes("^verify") && message.channel.name === 'verify'){
        message.delete();
        message.channel.type === (`"dm"`) + message.author.send(`Use the verification channel for verification only! To be verified type '^verify'.`);
    }*/

    if(message.content.toLowerCase().includes("asshole")){
        message.channel.type === (`"dm"`) + message.author.send(`Do not say that phrase at all!`);
        message.delete();
        message.channel.send({embed: {
            author: {
                name: "Cryptic Clan Bot",
            },
            title: "Warn",
            color: 3447003,
            description: `${message.author.username} has been warned for: NSFW.`,
            timestamp: new Date(),
            footer: {
              text: "© Cryptic Clan Moderation"
            }
        }});
        //message.member.roles.add(mutedRole);
        /*if(!message.member.roles.cache.has(mutedRole)){
            message.guild.members.cache.get(message.author.id).roles.add(mutedRole);
        }

        if(message.member.roles.cache.has(memberRole)){
            message.guild.members.cache.get(message.author.id).roles.remove(memberRole);
        }*/
    }

    if(message.content.toLowerCase().includes("kkk")){
        message.channel.type === (`"dm"`) + message.author.send(`Do not say that phrase at all!`);
        message.delete();
        message.channel.send({embed: {
            author: {
                name: "Cryptic Clan Bot",
            },
            title: "Warn",
            color: 3447003,
            description: `${message.author.username} has been warned for: NSFW.`,
            timestamp: new Date(),
            footer: {
              text: "© Cryptic Clan Moderation"
            }
        }});
    }

    if(message.content.toLowerCase().includes("nigga")){
        message.channel.type === (`"dm"`) + message.author.send(`Do not say that phrase at all!`);
        message.delete();
        message.channel.send({embed: {
            author: {
                name: "Cryptic Clan Bot",
            },
            title: "Warn",
            color: 3447003,
            description: `${message.author.username} has been warned for: NSFW.`,
            timestamp: new Date(),
            footer: {
              text: "© Cryptic Clan Moderation"
            }
        }});
    }

    if(message.content.toLowerCase().includes("nigger")){
        message.channel.type === (`"dm"`) + message.author.send(`Do not say that phrase at all!`);
        message.delete();
        message.channel.send({embed: {
            author: {
                name: "Cryptic Clan Bot",
            },
            title: "Warn",
            color: 3447003,
            description: `${message.author.username} has been warned for: NSFW.`,
            timestamp: new Date(),
            footer: {
              text: "© Cryptic Clan Moderation"
            }
        }});
        message.member.kick("Racial slur.");
    }

    if(message.content.toLowerCase().includes("dick")){
        message.channel.type === (`"dm"`) + message.author.send(`Do not say that phrase at all!`);
        message.delete();
        message.channel.send({embed: {
            author: {
                name: "Cryptic Clan Bot",
            },
            title: "Warn",
            color: 3447003,
            description: `${message.author.username} has been warned for: NSFW.`,
            timestamp: new Date(),
            footer: {
              text: "© Cryptic Clan Moderation"
            }
        }});
    }

    if(message.content.toLowerCase().includes("bitch")){
        message.channel.type === (`"dm"`) + message.author.send(`Do not say that phrase at all!`);
        message.delete();
        message.channel.send({embed: {
            author: {
                name: "Cryptic Clan Bot",
            },
            title: "Warn",
            color: 3447003,
            description: `${message.author.username} has been warned for: NSFW.`,
            timestamp: new Date(),
            footer: {
              text: "© Cryptic Clan Moderation"
            }
        }});
    }

    if(message.content.toLowerCase().includes("shit")){
        message.channel.type === (`"dm"`) + message.author.send(`Do not say that phrase at all!`);
        message.delete();
        message.channel.send({embed: {
            author: {
                name: "Cryptic Clan Bot",
            },
            title: "Warn",
            color: 3447003,
            description: `${message.author.username} has been warned for: NSFW.`,
            timestamp: new Date(),
            footer: { 
              text: "© Cryptic Clan Moderation"
            }
        }});
    } 

    if(message.content.toLowerCase().includes("cunt")){
        message.channel.type === (`"dm"`) + message.author.send(`Do not say that phrase at all!`);
        message.delete();
        message.channel.send({embed: {
            author: {
                name: "Cryptic Clan Bot",
            },
            title: "Warn",
            color: 3447003,
            description: `${message.author.username} has been warned for: NSFW.`,
            timestamp: new Date(),
            footer: {
              text: "© Cryptic Clan Moderation"
            }
        }});
    }

    if(message.content.toLowerCase().includes("cum")){
        message.channel.type === (`"dm"`) + message.author.send(`Do not say that phrase at all!`);
        message.delete();
        message.channel.send({embed: {
            author: {
                name: "Cryptic Clan Bot",
            },
            title: "Warn",
            color: 3447003,
            description: `${message.author.username} has been warned for: NSFW.`,
            timestamp: new Date(),
            footer: {
              text: "© Cryptic Clan Moderation"
            }
        }});
    }

    if(message.content.includes("discord.gg/") && message.channel.name !== "🎥│self-promotion" && message.channel.name !== "🤝│partners"){
        message.delete();
        message.reply("Only advertise your server in #🎥│self-promotion. No advertising here!");
    }
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}`+'ping'){
        return message.reply("This message had a ping of something seconds")
    }

    if(cmd === `${prefix}`+'rich'){
        var rand = getRandomInt1();
        var money = getRandomInt2();
        if(rand == 1){
            return message.reply("You are rich at a net worth of $"+money+"!");
        }
        else if(rand == 2){
            return message.reply("You are broke!")
        }
        else {
            return message.reply("Net worth not found :(")
        }
    }

    if(cmd === `${prefix}`+'topic'){
        return message.channel.send("Remember to stay on topic and don't post explicit content!")
    }

    if(cmd === `${prefix}`+'help'){
        return message.reply("Use ^ for the prefix. Try commands such as ping and topic!")
    }

    if(cmd === `${prefix}`+'life'){
        return message.reply("We all live and death is always lurking nearby us. Treat everyday like the last day because you never know when fate will let you perish...");
    }

    if(cmd === `${prefix}`+'gay'){
        var rand = getRandomInt1();
        console.log(rand);
        if(rand == 1){
            return message.reply("You are gay!");
        }
        else if(rand == 2){
            return message.reply("You are not gay!");
        }
    }

    if(cmd === `${prefix}`+'rob'+''+'bank') {
        var rand = getRandomInt1();
        var money = getRandomInt3();
        if(rand == 1){
            return message.reply("You success fully robbed the bank with a take of $"+money+"!")
        }
        else if(rand == 2){
            return message.reply("The cops have caught you and you are in custody! Get good next time amateur.");
        }
    }

    if(cmd === `${prefix}`+'insult'){
        var rand = getRandomInt4();
        if(rand === 1){
            return message.channel.send("A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality.");
        }
        else if(rand === 2){
            return message.channel.send("Away, you starvelling, you elf-skin, you dried neat’s-tongue, bull’s-pizzle, you stock-fish!");
        }
        else if(rand === 3){
            return message.channel.send("");
        }
        else if(rand === 4){
            return message.channel.send("");
        }
        else if(rand === 5){
            return message.channel.send("");
        }
        else if(rand === 6){
            return message.channel.send("");
        }
        else if(rand === 7){
            return message.channel.send("");
        }
        else if(rand === 8){
            return message.channel.send("");
        }
        else if(rand === 9){
            return message.channel.send("");
        }
        else if(rand === 10){
            return message.channel.send("");
        }
    }

    let hasRegistered = false;
    console.log(hasRegistered);
    if(cmd === `${prefix}`+'start'){
        hasRegistered = true;
        return message.reply("Successfully registered!");
    }

    if(cmd === `${prefix}`+'heist' && hasRegistered === false){
        return message.reply("You haven't registered yet; use ^start to register.");
    }
    else if(cmd === `${prefix}`+'heist' && hasRegistered === true){
        return message.reply("You have robbed the bank!");
    }

    let guessNumber1 = 1;
    let guessNumber2 = 2;
    let guessNumber3 = 3;
    let guessNumber4 = 4;
    let guessNumber5 = 5;


    if(cmd === `${prefix}`+'guess'+'_'+`${guessNumber1}`){
        var botGuessNumber = getRandomInt4();
        if(guessNumber1 === botGuessNumber){
            return message.reply("Correct.");
        }   
        else {
            return message.reply("Incorrect.");
        } 
    }

    if(cmd === `${prefix}`+'guess'+'_'+`${guessNumber2}`){
        var botGuessNumber = getRandomInt4();
        if(guessNumber2 === botGuessNumber){
            return message.reply("Correct.");
        }   
        else {
            return message.reply("Incorrect.");
        } 
    }

    if(cmd === `${prefix}`+'guess'+'_'+`${guessNumber3}`){
        var botGuessNumber = getRandomInt4();
        if(guessNumber3 === botGuessNumber){
            return message.reply("Correct.");
        }   
        else {
            return message.reply("Incorrect.");
        } 
    }

    if(cmd === `${prefix}`+'guess'+'_'+`${guessNumber4}`){
        console.log(botGuessNumber);
        var botGuessNumber = getRandomInt4();
        if(guessNumber4 === botGuessNumber){
            return message.reply("Correct.");
        }   
        else {
            return message.reply("Incorrect.");
        } 
    }

    if(cmd === `${prefix}`+'rickroll') {
        return message.channel.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }

    if(cmd === `${prefix}`+'id') {
        var userID = message.member.id;

        return message.reply("Your Discord User ID is: "+userID+".");
    }
    
    let warns = 0;
})

function getRandomInt1(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomInt2(min, max) {
    min = Math.ceil(500000);
    max = Math.floor(1000000000);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomInt3(min, max) {
    min = Math.ceil(100000);
    max = Math.floor(20000000);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomInt4(min, max) {
    min = Math.ceil(1);
    max = Math.floor(11);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

bot.login(process.env.token);