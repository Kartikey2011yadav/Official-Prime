const path=require("node:path");
const client=require(`${path.dirname(__dirname)}/index.js`);
const {userMention}=require("discord.js");
const spam=()=>
{   
    let MemArr={};
    // client.on("messageCreate",async (message)=>
    // {
    //     const mem=message.member;
    //     if((message.content.includes("<@") && message.content.includes(">")) || message.content==="valo" || message.content==="valorand" || message.content==="valorant" || message.content==="brawl" || message.content==="brawlhalla")
    //     {
    //       if(message.author.bot) return;
    //       if(mem in MemArr) MemArr[mem]++;
    //       else MemArr[mem]=1;
    //       for(const [member,count] of Object.entries(MemArr))
    //       {
    //         if(count>=6)
    //         {
    //           let flag=0;
    //           const guild=client.guilds.cache.get(process.env.guildid);
    //           const TimeoutMem=guild.members.cache.get(member.slice(2,member.length-1));
    //           TimeoutMem
    //           .timeout(60*1000,'Kar aur spam bsdk')
    //           .catch(()=>{flag=1;console.error;message.channel.send(`Khushi mana tu roles me upar he bot ke varna gand pe laat padti abhi ${member}`);})
    //           .then(()=>{if(flag==0) console.log;});
    //           MemArr[member]=0;
    //         }
    //         else if(count>=5)
    //         {
    //           message.channel.send(`Ab ek baar aur spam kiya to timeout mil jaega ${member}`);
    //         }
    //         else if(count>=3)
    //         {
    //           message.channel.send(`Spam mat kar chumtiye, sab so rhe he ${member}`);
    //         }
    //       }  
    //     }
    //   else
    //     {
    //       MemArr[mem]=0;
    //     }
    //     if(message.content===userMention(mem.id))
    //     {
    //         message.channel.send(`Khud ko kyu tag kar rha he bhosdike ${userMention(mem.id)}`);
    //     }
    // });
}

module.exports=spam;