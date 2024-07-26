const { SlashCommandBuilder } = require('discord.js');

var option

module.exports = {
	data: new SlashCommandBuilder()
		.setName('splice')
		.setDescription('takes in the input and cuts it into its pieces')
        .addStringOption(option => 
            option.setName("input")
            .setDescription("Input to splice")
            .setRequired(true)
        ),
	async execute(interaction) {
		const input = interaction.options.getString("input");
        let index = 1;
        await interaction.reply(input[0]);

        while(index < input.length){
            await interaction.followUp(input[index]);
            index++;
        }
	},
};