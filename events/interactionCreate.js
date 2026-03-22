const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'open_ticket') {
      const embed = new EmbedBuilder()
        .setTitle('Ticket abierto')
        .setDescription(`Hola ${interaction.user}, tu ticket ha sido creado.`)
        .setColor('Green');

      await interaction.reply({ embeds: [embed], ephemeral: true });
    }
  },
};