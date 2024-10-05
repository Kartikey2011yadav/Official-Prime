const path=require("node:path");
const client=require(`${path.dirname(__dirname)}/index.js`);
const { addSpeechEvent, SpeechEvents } = require("discord-speech-recognition");
const { joinVoiceChannel} = require('@discordjs/voice');

const speech=()=>
{
    let connection;

    client.on(SpeechEvents.speech, (msg) =>
    {
        if (!msg.content)
        {
            return;
        }
        const ch=client.channels.cache.get("962590186598989824");
        ch.send(msg.content);
        if(msg.content==="disconnect")
        {
            ch.send("Disconnected!!!");
            connection.destroy();
            return;
        }
    });

    client.on("messageCreate",async (message)=>
    {
        if(message.content==="join" || message.content==="connect")
        {
            message.content=message.content.toLowerCase();
            const voiceChannel = message.member?.voice.channel;
            if (voiceChannel)
            {
              connection=joinVoiceChannel(
              {
                channelId: voiceChannel.id,
                guildId: voiceChannel.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator,
                selfDeaf: false,
              });
              if(connection) console.log("Connected!!!");
            }
        }
    });
    addSpeechEvent(client);
}
module.exports=speech;