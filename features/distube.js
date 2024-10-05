const path=require("node:path");
const {guildId} = require('./config.json');
const client=require(`${path.dirname(__dirname)}/index.js`);
const { DisTube } = require('distube');
const { SpotifyPlugin } = require('@distube/spotify');
const { YtDlpPlugin } = require('@distube/yt-dlp');
const distube = new DisTube(client,
{
    plugins: [new SpotifyPlugin({emitEventsAfterFetching: true}),new YtDlpPlugin()],
    searchSongs: 5,
    searchCooldown: 30,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    leaveOnStop: false,
    directLink : true,
});

const distubeFunc=()=>
{
    let ch;
    client.on("messageCreate",async (message)=>
    {
        if(message.content.startsWith("op"))
        {
            const prefix="op";
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift();
            const channel = message.member.voice.channel;
            if (!channel) message.channel.send('You are not connected to a voice channel!');
            else
            {
                if (!ch) ch=message.member.voice.channel;
                if (ch!==channel)
                {
                    message.channel.send("I am already in a voice channel");
                }
                else
                {
                    if(command==="play")
                    {
                        let url=args.join(" ");
                        if(!url)
                        {   
                            message.channel.send("Gaane ka naam to de bsdk!!!");
                            return;
                        }
                        distube.play(channel, url, 
                        {
                            message,
                            textChannel: message.channel,
                            member: message.member,
                        }).catch((err)=>{message.channel.send(`Encountered an Error ${err}`)});
                    }
                    else if(command==="stop")
                    {
                        distube.stop(guildId);
                        message.channel.send("Stopped the queue!!!");
                    }
                    else if(command==="pause")
                    {
                        distube.pause(guildId);
                        message.channel.send("Music is paused!!!");
                    }
                    else if(command==="resume")
                    {
                        distube.resume(guildId);
                        message.channel.send("Music is on again!!!");
                    }
                    else if (command === "repeat")
                    {
                        let mode = distube.setRepeatMode(message, parseInt(args[0]));
                        if(!mode)
                        {
                            message.channel.send("Specify queue or song!!!");
                            return;
                        }
                        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
                        message.channel.send("Set repeat mode to `" + mode + "`");
                    }
                    else if(command === "shuffle")
                    {
                        distube.shuffle(guildId);
                        message.channel.send("Queue is been shuffled!!!");
                    }
                    else if(command === "skip")
                    {
                        let stat=0;
                        distube.skip(guildId).catch((err)=>
                        {
                            message.channel.send(`Error:${err}`);
                            stat=1;
                        });
                        if(stat===0) message.channel.send("Skipped current song!!!");
                    }
                    else if (command === "queue") 
                    {
                        const queue = distube.getQueue(message);
                        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
                        `**${id+1}**. [${song.name}] - \`${song.formattedDuration}\``
                        ).join("\n"));
                    }
                    else message.channel.send("Invalid command!!!");
                }
            }
        }
    });

    const status = queue =>
    `Volume: \`${queue.volume}%\` | Loop: \`${
    queue.repeatMode
    ? queue.repeatMode === 2
    ? 'All Queue'
    : 'This Song'
    : 'Off'
    }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``;

    distube
        .on('playSong', (queue, song) =>
            queue.textChannel?.send(
                        `Playing \`${song.name}\` - \`${
                            song.formattedDuration
                        }\`\nRequested by: ${song.user}\n${status(queue)}`,
            ),
        )
        .on('addSong', (queue, song) =>
            queue.textChannel?.send(
                `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
            ),
        )
        .on('addList', (queue, playlist) =>
            queue.textChannel?.send(
                `Added \`${playlist.name}\` playlist (${
                    playlist.songs.length
                } songs) to queue\n${status(queue)}`,
            ),
        )
        .on('error', (textChannel, e) => {
            console.error(e);
            textChannel.send(
                `An error encountered: ${e.message.slice(0, 2000)}`,
            );
        })
        .on('finish', queue => queue.textChannel?.send('Finish queue!'))
        .on('finishSong', queue =>
            queue.textChannel?.send('Finish song!'),
        )
        .on('disconnect', queue =>
            queue.textChannel?.send('Disconnected!'),
        )
        .on('empty', queue =>
            queue.textChannel?.send(
                'The voice channel is empty! Leaving the voice channel...',
            ),
        )
        .on('searchResult', (message, result) => {
            let i = 0;
            message.channel.send(
                `**Choose an option from below**\n${result
                    .map(
                        song =>
                            `**${++i}**. ${song.name} - \`${
                                song.formattedDuration
                            }\``,
                    )
                    .join(
                        '\n',
                    )}\n*Enter anything else or wait 30 seconds to cancel*`,
            );
        })
        .on('searchCancel', message =>
            message.channel.send('Searching canceled'),
        )
        .on('searchInvalidAnswer', message =>
            message.channel.send('Invalid number of result.'),
        )
        .on('searchNoResult', message =>
            message.channel.send('No result found!'),
        )
        .on('searchDone', () => {});
}
module.exports=distubeFunc;