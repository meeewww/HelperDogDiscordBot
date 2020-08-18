const Discord = require('discord.js');
const Embed = new Discord.MessageEmbed()
const client = new Discord.Client


const prefix = 'q!';

client.once('ready', () => {
    console.log('online');
    client.user.setActivity('Minecraft Songs',  { type: 'LISTENING'}).catch(console.error);
})


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.substring(prefix.length).split(/ +/);

    switch(args[0]){


        case "qotd":
            const Embed = new Discord.MessageEmbed()
            .setColor('0xFFC300')
            .setImage('https://cdn.discordapp.com/attachments/711640811074486372/744511779614490664/tenor.gif')
            .setTitle('Looks like you need some help! We are here to help')
            .setDescription('q!qotd (poll) to get the qotd (**Q**uestion **O**f **t**he **d**ay) \n**Need more help join our support server here: https://discord.gg/qWpstWx** \n ')
            .setFooter('Sent By our dev team @ SeanLovesBlobs Develpomet')
            


            if(!args[1]){
                message.channel.send(Embed);
                break;
            }
            
            let msgArgs = args.slice(1).join(" ")

            message.channel.send("📋" + "*" +  "React to the message above and I will record it" + "*").then(sentMessage => {
                message.react("744492638090166354");
                message.react("744492638048223332");
            });


        break;




        

        
    }



    switch(args[0]){


        case "poll":
            const Embed = new Discord.MessageEmbed()
            .setColor('0xFFC300')
            .setImage('https://cdn.discordapp.com/attachments/711640811074486372/744511779614490664/tenor.gif')
            .setTitle('Looks like you need some help! We are here to help')
            .setDescription('This is our poll you need to do q!poll (poll) to get the poll up\n**Need more help join our support server here: https://discord.gg/qWpstWx** \n ')
            .setFooter('Sent By our dev team @ SeanLovesBlobs Develpomet')
            


            if(!args[1]){
                message.channel.send(Embed);
                break;
            }
            
            let msgArgs = args.slice(1).join(" ")

            message.channel.send("📋" + "*" + "React to the message above and I will record it" + "*").then(sentMessage => {
                message.react("744492638090166354");
                message.react("744492638048223332");
            });


        break;




        

        
    }
    


    switch(args[0]){


        case "types":
            const types = new Discord.MessageEmbed()
            .setColor('0xFFC300')
            .setImage('https://media.tenor.com/images/589415214a464931d6212befe1b07369/tenor.gif')
            .setTitle('Poll Types:')
            .setDescription('**Here are some poll types**\n\n\n**question of the day (QOTD)**\n QOTD is a daily poll that you put daily\n\n\n**Poll**\nThis is were you can put it anytime\n\n ')
            .setFooter('There will be more soon! || Sent By our dev team @ SeanLovesBlobs Develpomet')
            


            if(!args[1]){
                message.channel.send(types);
                break;
            }


        break;




        case "dog":
            const dog = new Discord.MessageEmbed()
            .setColor('947867')
            .setTitle('Here is a cute dogie... just for you')
            .setImage('https://media.tenor.com/images/e839bea4c88a90b6109ecb8de91c226f/tenor.gif')
            .setURL('https://media.tenor.com/images/e839bea4c88a90b6109ecb8de91c226f/tenor.gif')

            if(!args[1]){
                message.channel.send(dog);
                break;
            }   
        
            
        case "help":
            const help = new Discord.MessageEmbed()
            .setColor('#7289da')
            .setTitle('Help')
            .setURL('https://discord.gg/qWpstWx')
            .setDescription('`Utility`\n`q!poll (subject)` `q!qotd (subject)` `q!types`\n\n`fun`\n`q!dog`\n\n `About Stuff`\n`premid` `statuspage` `Minecraft`\n\n `Other`\n `Invite` `play - look for others to play with you`')
            .setFooter('There will be more soon!')
            .setThumbnail('https://cdn.discordapp.com/attachments/744534403350265907/744537282639560844/dogs5.jpg')
            .setImage('https://cdn.discordapp.com/attachments/744534403350265907/744537282639560844/dogs5.jpg')


            if(!args[1]){
                message.channel.send(help);
                break;
                
            }

        case "support":
            const support = new Discord.MessageEmbed()
            .setColor('#7289da')
            .setTitle('Click here to join support server')
            .setURL('https://discord.gg/qWpstWx')
            .setImage('https://media.tenor.com/images/4aabd619b2e3273bc58594dfc00ccf50/tenor.gif')
            if(!args[1]){
                message.channel.send(support);
                break;
            }

        case "premid":
            const premid = new Discord.MessageEmbed()
            .setColor('#7289da')
            .setTitle('PreMid')
            .setURL('https://premid.app/')
            .setDescription('**What is Premid**\nPreMiD is a simple, configurable utility that allows you to\nshow what youre doing on the web in your Discord now playing status\n\n**Here is an example:**')
            .setImage('https://cdn.discordapp.com/attachments/711640811074486372/744530793321463888/premid.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/711640811074486372/744531464275886160/premidlogo.png')
            .setFooter('Go to https://premid.app/ to download this or click on the blue premid at the top')
            if(!args[1]){
                message.channel.send(premid);
                break;
            }
        

        case "statuspage":
            const statuspage = new Discord.MessageEmbed()
            .setColor('009cfd')
            .setThumbnail('https://cdn.discordapp.com/attachments/744534403350265907/744534451589087302/statuspagelogo.png')
            .setImage('https://cdn.discordapp.com/attachments/744534403350265907/744534460762030080/statuspage.png')
            .setDescription('**What is StatusPage?**\n\nEasily communicate real-time status to your users. Just like DigitalOcean, Dropbox, and Intercom.\n ')
            .setURL('https://www.atlassian.com/software/statuspage?&aceid=&adposition=&adgroup=102639848354&campaign=9727778084&creative=439554637112&device=c&keyword=statuspage&matchtype=e&network=g&placement=&ds_kids=p52664748395&ds_e=GOOGLE&ds_eid=700000001541417&ds_e1=GOOGLE&gclid=Cj0KCQjwsuP5BRCoARIsAPtX_wHy-qBTafDw4NXmvtpThI37yw8qruNt9VRGNQ-J0DbQOD_9G_gO_GsaAj-zEALw_wcB&gclsrc=aw.ds')
            .setTitle('Statuspage')
            .setFooter('Click on StatusPage to go to the website')
            if(!args[1]){
                message.channel.send(statuspage);
                break;
            }

        case "invite":
            const invite = new Discord.MessageEmbed()
            .setColor('009cfd')
            .setTitle('Invite Me || Click ME! ')
            .setURL('https://discord.com/oauth2/authorize?client_id=744503626382180392&permissions=2081422583&scope=bot')
            .setDescription('This is a fun bot and Utility bot')
            if(!args[1]){
                message.channel.send(invite);
                break;
            }
        

        case "end":
            const end = new Discord.MessageEmbed()
            .setColor('ff0000')
            .setTitle('The voteing has ended!')
            .setDescription('This poll/vote is done the rep of the server can start a new one.\nthe rep can also say what won')
            if(!args[1]){
                message.channel.send(end);
                break;
            }
        
        
        case "google":
            const google = new Discord.MessageEmbed()
            .setColor('00ff02')
            .setTitle('Google')
            .setURL('https://www.google.com/')
            .setDescription('Google LLC is an American multinational technology company that specializes in Internet-related services and products,\n which include online advertising technologies, a search engine,\n cloud computing, software, and hardware\n**Here is what the website looks like:**')
            .setThumbnail('https://cdn.discordapp.com/attachments/744534403350265907/744592781753712731/googlelogo_color_272x92dp.png')
            .setImage('https://cdn.discordapp.com/attachments/744534403350265907/744592783452405861/google.png')
            .setFooter('Click on "Google" to get to google website')
            if(!args[1]){
                message.channel.send(google);
            }


        case "play":
            const play = new Discord.MessageEmbed()
            .setColor('00ff02')
            .setTitle('Looking to play')
            .setURL('https://discord.gg/ryE42tv')
            .setDescription('**Here are some channels to get friends and peps to play with you!**\n<#744595865636831272>\n<#744595891448709230>\n<#744595931457912842>\n')
            .setFooter('Cant go to these click "Looking To Play" to get accses to them')
            if(!args[1]){
                message.channel.send(play);
                break;
            }
        
            case "minecraft":
                const minecraft = new Discord.MessageEmbed()
                .setColor('00ff02')
                .setTitle('Minecraft')
                .setDescription('With new games, new updates, and new ways to play, join one of the biggest communities in gaming and start crafting today!\n\n`SPEEDRUN RULES`\n1. No texture/resource packs.\n2. No Mods.\n3. Difficulty cannot be changed once the timing starts.\n4. All runs are single player unless the category is "Co-op".\n5. You can use any release version of Minecraft (no snapshots, anything beta or earlier, or pre-releases).\n6. You can use any version of Java. (It is known to affect seed generation in some cases).\n7. Bonus Chests and cheats are not allowed...\nMore rules here: https://www.speedrun.com/mc/thread/gq26u/1#3znt1`\n\n`Servers`\nHypixel `mc.hypixel.net - ONLINE`\nHypixel China `x19hypixel.nie.netease.com - OFFLINE`\nMinesuperior! `hub.mcs.gg - online`\nInvatedLands `play.invadedlands.net - ONLINE`')
                .setImage('https://cdn.discordapp.com/attachments/711640811074486372/744635219620921374/minecraft.png')
                .setThumbnail('https://cdn.discordapp.com/attachments/711640811074486372/744635219620921374/minecraft.png')
                .setURL('https://minecraft.net')
                if(!args[1]){
                    message.channel.send(minecraft);
                }


            case "soss":
                const soss = new Discord.MessageEmbed()
                .setColor('f10000')
                .setTitle('HELP! I HAVE FALLEN AND I CANT GET UP!')
                .setImage('https://cdn.discordapp.com/attachments/711640811074486372/744511779614490664/tenor.gif')
                if(!args[1]){
                    message.channel.send(soss);
                    break;
                }
            case "servers":
                const servers = new Discord.MessageEmbed()
                .setColor('f47fff')
                .setTitle('Partnerd servers <= Click here for this weeks featred server')
                .setURL('https://discord.gg/WtXMEKJ')
                .setDescription('Twitch Community + ADS: https://discord.gg/qpCswhG\nSupers Hangout!: https://discord.gg/7e5TJX5\nExpand your server: https://discord.gg/WtXMEKJ')
                if(!args[1]){
                    message.channel.send(servers);
                    break;
                }
            

    }

            
            
                

    

    
    





    
    
});



client.login('NzQ0NTAzNjI2MzgyMTgwMzky.XzkLCA.qsdl7hHsFBx6zsBFKaiytqJi8gg');

