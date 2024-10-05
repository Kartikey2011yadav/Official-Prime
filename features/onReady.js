const path=require("node:path");
const client=require(`${path.dirname(__dirname)}/index.js`);
const { ActivityType } = require("discord.js");
const {Events} = require("discord.js");

const onReady=()=>
{
    client.on(Events.ClientReady, () =>
    {
        client.user.setActivity("over ŒFFĪÇÍÆL PRÍMÊ Server",
        {
          type: ActivityType.Watching,
        });
        console.log('Ready!');
    });
}
module.exports=onReady;