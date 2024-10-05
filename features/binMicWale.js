const path=require("node:path");
const client=require(`${path.dirname(__dirname)}/index.js`);
const {userMention}=require("discord.js");

const binMicWale=()=>
{
    client.on("messageCreate",async (message)=>
    {
        if(message.content.includes("[op vc]"))
        {
            message.content=message.content.toLowerCase();
            const arr=
            [
            "956272385873571941",
            "945064832909049876",
            "945065033543614526",
            "941299955459575878",
            "941300027152826369",
            "943437016421515284"
            ];
            let flag=0;
            for(let i=0;i<arr.length;i++)
            {
                let cha=client.channels.cache.get(arr[i]);
                let Mems=cha.members;
                Mems.forEach((member)=>
                {
                    if(member.id===message.member.id)
                    {
                        flag=1;
                    }
                });
                if(flag===1)
                {
                    Mems.forEach((member)=>
                    {
                        if(member.id!==message.member.id) message.channel.send(`${userMention(member.id)}`);
                    });
                    break;
                }
            }
        }
    });
}
module.exports=binMicWale;