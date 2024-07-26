const { SlashCommandBuilder } = require('discord.js');

var option

module.exports = {
	data: new SlashCommandBuilder()
		.setName("pokemon")
		.setDescription('generates a random pokemon'),

	async execute(interaction) {
        const num = Math.floor(Math.random() * 1025) + 1
        const URL = "https://pokeapi.co/api/v2/pokemon/".concat(num).concat("/")
        let finding = await fetch(URL);
        let pokemon = await finding.json()
        console.log(pokemon)
        console.log(pokemon["types"].length)

        if(pokemon["types"].length < 2){
            await interaction.reply("Name : " + pokemon["name"] + " \nType : " + pokemon["types"][0]["type"]["name"] + "\nPhoto : " + pokemon["sprites"]["front_default"])
        } else {
            await interaction.reply("Name : " + pokemon["name"] + " \nType : " + pokemon["types"][0]["type"]["name"] + " & " + pokemon["types"][1]["type"]["name"] + "\nPhoto : " + pokemon["sprites"]["front_default"])
        }

	},
};