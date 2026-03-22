# Mini Demo Bot - Portafolio Profesional

Este repositorio es una **demostración de cómo desarrollo y estructuro bots de Discord** usando JavaScript, TypeScript y Python. Incluye ejemplos de modularización, uso de embeds, buttons (Components v2) y automatizaciones, mostrando un estilo limpio y escalable.

---

## 🔹 Stack utilizado
- **Lenguajes:** JavaScript, TypeScript, Python
- **Librerías / Frameworks:** discord.js v14
- **Base de datos (ejemplos futuros):** MongoDB
- **Otras herramientas:** Modularización de comandos y eventos, Components v2, embeds, scripts de automatización en Python

---

---

## 📌 Detalle de los ejemplos

### 1️⃣ `commands/ping.js`
- Comando modular básico en JavaScript
- Responde con “Pong!” al ser ejecutado
- Muestra la estructura mínima de un comando modular

### 2️⃣ `commands/ticket.js`
- Comando avanzado en JS
- Incluye **botón (Components v2)** para abrir tickets
- Ideal para sistemas de soporte o interacción con usuarios

### 3️⃣ `commands/levelup.ts`
- Comando avanzado en TypeScript
- Usa **embeds y botones** para notificar subida de nivel
- Demuestra manejo de tipado, modularización y buenas prácticas

### 4️⃣ `events/interactionCreate.js`
- Event handler para botones
- Escucha interacciones de Components v2
- Responde con embeds de forma modular

### 5️⃣ `python-scripts/logger.py`
- Script en Python para registrar logs con timestamp
- Ejemplo de automatización que complementa sistemas del bot

---

## 🚀 Cómo usar este proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/tuusuario/mini-demo-bot.git
Instalar dependencias:
```
npm install
Ejecutar el bot (ejemplo para JS/TS):
node commands/ping.js   # o tu entrypoint principal
Ejecutar script Python:
python python-scripts/logger.py

Este repositorio está diseñado como portafolio de ejemplo, mostrando cómo estructuro y desarrollo bots de Discord de manera profesional y escalable. Cada ejemplo demuestra:

Modularización de comandos y eventos
Uso de embeds y buttons (Components v2)
Scripts de automatización en Python
Preparación para sistemas más grandes (tickets, logs, niveles)

Si tienes dudas, sugerencias o quieres discutir cómo escalar estos ejemplos a un proyecto real, ¡estoy abierto a colaborar y mejorar juntos! 🤝
