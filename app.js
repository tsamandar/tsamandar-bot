const { Telegraf, Markup } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply(
    'Assalomu alaykum. "Yil brendi" ovosh berish botiga xush kelibsiz. Iltimos, bot tilini tanlang',
    {
      reply_markup: {
        inline_keyboard: [[
            { text: "🇺🇿", callback_data: "uzbek" },
            { text: "🇷🇺", callback_data: "russian" }
          ]]
      }}
  )
});

bot.action('uzbek', (ctx) => ctx.reply('Hi'))

bot.launch();
