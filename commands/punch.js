const { SlashCommandBuilder,channelMention,userMention,roleMention } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

// const exampleEmbed = new EmbedBuilder()
// 	.setColor(0x0099FF)
// 	.setTitle('Kicked')
//   .setURL('https://tenor.com/bvi31.gif')
// 	.setDescription('KO!!!!')
//   .setImage('https://tenor.com/bvi31.gif')

const { AttachmentBuilder } = require('discord.js');
// ...
const file = new AttachmentBuilder('../assets/discordjs.png');

var arr=[
"https://media.giphy.com/media/13HXKG2HGN8aPK/giphy.gif",
"https://media.giphy.com/media/RkLaH1ptACyAzQ1dWj/giphy.gif",
"https://media.giphy.com/media/dAknWZ0gEXL4A/giphy.gif",
"https://media.giphy.com/media/6HnZTkTOmcV2w/giphy.gif",
"https://media.giphy.com/media/ejV32lvTPfD1e/giphy.gif",
"https://media.giphy.com/media/I6plPWpNVEKIM/giphy.gif",
"https://media.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif",
"https://media.giphy.com/media/NkZBbWZ9ykcxO/giphy.gif",
"https://media.giphy.com/media/l0HlLFVBqUVwxSOzu/giphy.gif",
"https://media.giphy.com/media/vIka9RbQ5VYbu/giphy.gif"
]
module.exports = {
	data: new SlashCommandBuilder()
		.setName('punch')
		.setDescription('Select a member and punch them.')
		.addUserOption(option => option.setName('target').setDescription('The member to be punched')),
	async execute(interaction) {
        const exampleEmbed = {
    	title: 'KO Flawless Victory With Bare Hands!!!',
    	image: {
    		url: arr[Math.floor(Math.random()*arr.length)],
    	},
    };
		const member = interaction.options.getMember('target');
    if(!member) return;
    const user=userMention(member.id);
		return interaction.reply({ content: `You punched `+user,embeds:[exampleEmbed], ephemeral: false });
    // return interaction.reply({content: ${}})
	},
};
