const { SlashCommandBuilder } = require('discord.js');

var option

module.exports = {
	data: new SlashCommandBuilder()
		.setName("randomPokemon")
		.setDescription('generates a random pokemon'),

	async execute(interaction) {
        const num = Math.floor(Math.random() * 1025) + 1
        const URL = "https://pokeapi.co/api/v2/pokemon/" + num
        const clear = true
        const pokemon = null

        fetch(URL).then(response => {
            pokemon = response.json();
        })

        interaction.reply("Name : " + pokemon["name"] + " \n Photo : " + pokemon["sprites"]["front_default"])
	},
};