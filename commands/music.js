const {SlashCommandBuilder} = require("discord.js");
module.exports=
  {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("For testing"),
    async execute(interaction)
      {
        return interaction.reply("Ok Tested!!!");
      }
  };