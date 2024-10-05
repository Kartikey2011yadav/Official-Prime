const { SlashCommandBuilder,channelMention,userMention,roleMention} = require('discord.js');
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

const arr=[
"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTExNjIyZWM3MDQ4NjRlODJlMTQzM2JjNjMxYjNkNjQ2NmQ5NjMwYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/XYEEvoX0Ub69ZgN9ai/giphy.gif",
  "https://media.giphy.com/media/2aw9gwZlltbdX92b4w/giphy.gif",
  "https://media.giphy.com/media/xUOwFZmWUC2QDHKu4M/giphy.gif",
  "https://media.giphy.com/media/8o7EM7NxECR4dBu02M/giphy.gif",
]
module.exports = {
	data: new SlashCommandBuilder()
		.setName('plead')
		.setDescription('Select a member and plead to them.')
		.addUserOption(option => option.setName('target').setDescription('The member to plead to')),
	async execute(interaction) {
        const member = interaction.options.getMember('target');
        const exampleEmbed = {
    	title: 'U pleaded with your hands',
    	image: {
    		url: arr[Math.floor(Math.random()*arr.length)],
    	},
    };
    if(!member) return;
    const u=userMention(member.id);
		return interaction.reply({ content: `You pleaded to`+` `+u,embeds:[exampleEmbed], ephemeral: false });
    // return interaction.reply({content: ${}})
	},
};