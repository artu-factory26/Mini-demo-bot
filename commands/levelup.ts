import { ChatInputCommandInteraction, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

export const levelup = {
  name: "levelup",
  description: "Simula un usuario subiendo de nivel",
  execute: async (interaction: ChatInputCommandInteraction) => {
    const embed = new EmbedBuilder()
      .setTitle("¡Felicidades!")
      .setDescription(`${interaction.user} subió de nivel!`)
      .setColor("Purple");

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId("claim_reward")
        .setLabel("Reclamar recompensa")
        .setStyle(ButtonStyle.Success)
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  },
};