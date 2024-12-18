const path=require("node:path");
const client=require(`${path.dirname(__dirname)}/index.js`);
const {Events} = require("discord.js");

const interactionFunc=()=>
{
    client.on(Events.InteractionCreate, async interaction =>
    {
        if (!interaction.isChatInputCommand()) return;
          
        const command = client.commands.get(interaction.commandName);
          
        if (!command) return;
          
        try 
        {
            await command.execute(interaction);
        } 
        catch (error) 
        {
            console.error(error);
            if (interaction.replied || interaction.deferred)
            {
                await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
            } 
            else
            {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    });
}
module.exports=interactionFunc;