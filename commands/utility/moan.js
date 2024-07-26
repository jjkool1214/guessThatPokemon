const { SlashCommandBuilder } = require('discord.js');

const moans = ["UNGHHH~", "DYADDY ;)", "FUCHHHHHK"]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('moan')
		.setDescription('just moans super loudly'),
	async execute(interaction) {
		await interaction.reply(moans[Math.random(0, 2)]);
	},
};