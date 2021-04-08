const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => ctx.reply("Text sent through telegraf's reply method", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Button 4", callback_data: "button4" }, { text: "Button 5", callback_data: "button5" }],
        [{ text: "Button 6", callback_data: "button6" }]
      ]
    }
  }))

bot.launch();
