const express=require("express");
const server=express()
server.all("/",(req,res)=>{
  res.send("Bot is running!!!");
});

function startServer()
{
    server.listen(3000,()=>
    {
      console.log("Ready Server!!!")
    });
}

module.exports=startServer;