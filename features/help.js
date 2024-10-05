const path=require("node:path");
const client=require(`${path.dirname(__dirname)}/index.js`);
const {userMention}= require("discord.js");

const help=()=>
{
    client.on("messageCreate", async (message)=>
    {
      if(message.author.bot) return;
      if(message.content.includes(`${userMention("1080879295586643978")}`))
      {
        message.channel.send(`Hi ${userMention(message.member.id)}, I see you need help regarding me that's why you tagged me\n
        Okay starting from features:\n
        Baad me aana abhi kaam chalu he 🤬`);
      }
    });
}
module.exports=help;