const path=require("node:path");
const client=require(`${path.dirname(__dirname)}/index.js`);
const {userMention}=require("discord.js");

const vcUpdate=()=>
{
    client.on('voiceStateUpdate', (oldState, newState) =>
    {
        const ch=client.channels.cache.get("962590186598989824");
        if(oldState.channelId===null) ch.send(`VC se baahar nikal laude ${userMention(newState.id)}`);
        else if(newState.channelId===null) ch.send(`VC me vaapis aa laude ${userMention(oldState.id)}`);
    });
}
module.exports=vcUpdate;