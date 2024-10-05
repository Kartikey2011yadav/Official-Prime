const { SlashCommandBuilder,channelMention,userMention,roleMention} = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const {AttachmentBuilder} = require("discord.js");
var arr=[
  "https://media.giphy.com/media/lDPPhStHv9Jfpem7wI/giphy.gif",
  "https://media.giphy.com/media/gOUwm7vv70UOQ/giphy.gif",
  "https://media.giphy.com/media/p958oeYVp4zlEAc35y/giphy.gif",
  "https://media.giphy.com/media/n4FSXlTBaRN2E/giphy.gif",
  "https://media.giphy.com/media/mGitwbTBzSnqU/giphy.gif",
]
module.exports = {
	data: new SlashCommandBuilder()
		.setName('die')
		.setDescription('Die from Cringe!!!'),
	async execute(interaction) {
        const exampleEmbed = {
    	title: 'Died from Cringe!!!',
    	image: {
    		url: arr[Math.floor(Math.random()*arr.length)],
    	},
    };
		return interaction.reply({ content: `May I Rest In Peace`+` `,embeds:[exampleEmbed], ephemeral: false });
    // return interaction.reply({content: ${}})
	},
};
