const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'ticket',
  description: 'Crear un ticket',
  execute(message) {
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('open_ticket')
          .setLabel('Abrir Ticket')
          .setStyle(ButtonStyle.Primary)
      );

    message.channel.send({ content: 'Clic en el botón para abrir un ticket!', components: [row] });
  }
};