"use strict";

const {token} = require("./config.json");
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection,GatewayIntentBits} = require('discord.js');
const startServer=require("./server");

const client = new Client(
{
    intents:
    [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles)
{
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

startServer();
module.exports=client;
const binMicWale=require("./features/binMicWale");
binMicWale();
const bump=require("./features/bump");
bump();
const distubeFunc=require("./features/distube");
distubeFunc();
const interactionFunc=require("./features/interaction");
interactionFunc();
const naam=require("./features/naam");
naam();
const onReady=require("./features/onReady");
onReady();
const pingPong=require("./features/pingPong");
pingPong();
const spam=require("./features/spam");
spam();
const speech=require("./features/speech");
speech();
const vcUpdate=require("./features/vcUpdate");
vcUpdate();
const help=require("./features/help");
help();
client.login(token);