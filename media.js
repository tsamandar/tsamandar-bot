const { Telegraf } = require('telegraf');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('start', (ctx) => ctx.reply('/start'))

// reading from media
bot.command('logo_apple', (ctx) => ctx.replyWithPhoto({ source: 'media/apple.png' }))
bot.command('logo_microsoft', (ctx) => ctx.replyWithPhoto({ source: 'media/microsoft.png' }))
bot.command('logo_google', (ctx) => ctx.replyWithPhoto({ source: 'media/google.png' }))
bot.command('logo_facebook', (ctx) => ctx.replyWithPhoto({ source: 'media/facebook.png' }))
bot.command('logo_telegram', (ctx) => ctx.replyWithPhoto({ source: 'media/telegram.png' }))

// reading media as streaming
bot.command('intro_1', (ctx) => ctx.replyWithVideo({
    source: fs.createReadStream('media/intro.mp4')
}));

bot.command('intro_2', (ctx) => ctx.replyWithVideo({
    source: 'media/intro.mp4'
}));

// search media from the internet
bot.command('random_photo', (ctx) => ctx.replyWithPhoto('https://picsum.photos/200/300/?random'));

// reply photo with caption
bot.command('meme', (ctx) => ctx.replyWithPhoto(
    { source: 'media/meme.jpg' },
    {
        caption: 'No <br>Comment</>',
        parse_mode: 'HTML'
    }
))

bot.launch();

