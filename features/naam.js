const path=require("node:path");
const client=require(`${path.dirname(__dirname)}/index.js`);
const {roleMention,userMention}=require("discord.js");

const naam=()=>
{
    client.on("messageCreate",async (message)=>
    {
        if(message.author.bot) return;
        message.content=message.content.toLowerCase();
        if(message.content==="soham")
        {
            message.channel.send("yaar mai nahi khelraha .... tum he log khel lo, bohot lag ho rha 😑");
        }
        else if(message.content==="rishita" || message.content==="rimjhimsheetal") message.channel.send("HuiHui 🌝");
        else if(message.content=== "sup niggas") message.channel.send(`${roleMention("969165296621461524")} ${roleMention("919561488384008192")}`);
        else if(message.content==="vc") message.channel.send(`${roleMention("969165296621461524")}`);
        else if(message.content==="brawlhalla" || message.content==="brawl")
        {
            const id="957920699677286400";
            const role=roleMention(id);
            message.channel.send(role);
        }
        else if(message.content==="zakie")
        {
            message.channel.send("I am the lurker here 😎");
        }
        else if(message.content==="devu" ||
            message.content==="devanshi")
        {
            message.channel.send("Choti Billi hu me 🐱");
        }
        else if(message.content==="prigaya")
        {
            message.channel.send("Meri biwi ko koi kuch nhi bolega 😗");
        }
        else if(message.content==="abid" || message.content==="prim ki biwi")
        {
          message.channel.send("Meri prigaya ko koi kuch nhi bolega 😍");
        }
        else if(message.content==="saswat")
        {
            message.channel.send("I am the Giga Nigga here 😏");
        }
        else if(message.content==="bella" || message.content==="harmeet")
        {
            message.channel.send("Kya aapko pata he mera ghar Aluminium ka he 😅");
        }
        else if(message.content==="aditya")
        {
            message.channel.send("Bandar hu me 🐵");
        }
        else if(message.content==="srimjoy")
        {
            message.channel.send("Pepsi peeyo kyonki me chumtiya hu 😊");
        }
        else if(message.content==="saloni")
        {
            message.channel.send("Bebo oo bebo, dil mera lelo 💕");
        }
        else if(message.content==="sunny")
        {
            message.channel.send("Nashedi hu me, fir bhi owner hu me 😎");
        }
        else if(message.content==="somie")
        {
            message.channel.send("Me hu Sonnie Meri Tamanna 🙂");
        }
        else if(message.content==="deepu" || message.content==="deepsikha")
        {
            message.channel.send("Noob hu me, papa ki pari hu me 🤩");
        }
        else if(message.content==="umang")
        {
            message.channel.send("Apni gendo me lelo mujhe 😋");
        }
        else if(message.content==="aryan")
        {
            message.channel.send("Naya laptop k saath bhi skills bada nhi saka 😑");
        }
        else if(message.content==="humdard")
        {
            message.channel.send("Tu mera dard he,tu mera humdard he 😭");
        }
        else if(message.content==="tanishq")
        {
            message.channel.send("Today is your lucky day, fellas 😏");
        }
        else if(message.content==="arpit")
        {
            message.channel.send("Kanyaein honi chahihe paas me 🤔");
        }
        else if(message.content==="zayn")
        {
            message.channel.send("Yum Yum Girls with cigarette😋");
        }
        else if(message.content =="kartikey")
        {
            message.channel.send("Glitch in Matrix 😕");
        }
        else if(message.content=="cameshia" || message.content=="basanti")
        {
            message.channel.send("Me in kutto k saamne nhi naachungi 🤡");
        }
        else if(message.content==="rishi")
        {
            message.channel.send("I'm a Barbie girl, in a Barbie world 💅🙆‍♀️");
        }
        else if(message.content==="valo" || message.content==="valorant" || message.content==="valorand")
        {
            const id2="1099698560703930478";
            const role2=roleMention(id2);
            message.channel.send(role2);
        }
        else if(message.content==="niggas assemble")
        {
            const user1=userMention("903455907701207041");
            const user2=userMention("1007815580847452180");
            const user3=userMention("779206329813696522");
            const user4=userMention("425222078581440512");
            const user5=userMention("580441314055815188");
            const user6=userMention("881473891212595260");
            const user7=userMention("698605476828545044");
            const user8=userMention("581034690429976577");
            message.channel.send(`Niggas Assemble ${user1} ${user2} ${user3} ${user4} ${user5} ${user6} ${user7} ${user8} !!!`);
        }
    });
}
module.exports=naam;