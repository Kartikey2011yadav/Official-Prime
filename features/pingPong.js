const path=require("node:path");
const client=require(`${path.dirname(__dirname)}/index.js`);

const pingPong=()=>
{
    client.on("messageCreate",async (message)=>
    {
        if (message.content===`ping`)
        {
            message.channel.send("pong!");
        }
        else if(message.content===`pong`)
        {
            message.channel.send("ping!");
        }
    });
}
module.exports=pingPong;