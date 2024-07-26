const { SlashCommandBuilder } = require('discord.js');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('moan')
		.setDescription('just moans super loudly'),
	async execute(interaction) {
        const moans = ["UNGHHH~", "DYADDY ;)", "FUCHHHHHK"]
		await interaction.reply(moans[Math.floor(Math.random()) + 1]);
	},
};