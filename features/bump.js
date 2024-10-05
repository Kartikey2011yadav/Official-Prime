const path=require("node:path");
const client=require(`${path.dirname(__dirname)}/index.js`);
const {channelMention}=require("discord.js");

const bump=()=>
{
    client.on("messageCreate",async (message)=>
    {
        if(message.channel.id==="965853012985806888")
        {
            message.content=message.content.toLowerCase();
            if(message.author.bot) return;
            const c="838797669274746890";
            message.channel.send(`Verify in ${channelMention("714168295854440573")} and chat in the ${channelMention(c)} channel!!!`);
        }
    });
}
module.exports=bump;