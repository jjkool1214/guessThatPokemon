const { SlashCommandBuilder } = require('discord.js');

var option

module.exports = {
	data: new SlashCommandBuilder()
		.setName('splice')
		.setDescription('takes in the input and cuts it into its pieces'),



	async execute(interaction) {
        const num = Math.floor(Math.random() * 1025) + 1
        const URL = "https://pokeapi.co/api/v2/pokemon/" + num

        fetch(URL).then(response => {
            if(!response.ok){
                await interaction.reply("Something went wrong!")
            }
        })
	},
};