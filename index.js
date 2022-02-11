const TelegramApi = require("node-telegram-bot-api");

const token = "5202216584:AAGieEKogHFyPAaSDLBRPFSOUi6pHTRhjR0";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  // bot.sendMessage(chatId, `Ты мне написал (${text}) Это так мило`);
  if (text === "/start") {
    bot.sendMessage(
      chatId,
      `Добро пожаловать в телеграм бот по изучению Анг.Мовы Tovi`
    );
  }
  if (text === "/info") {
    bot.sendMessage(
      chatId,
      `тебя зовут  ${msg.from.first_name} ${msg.from.last_name}`
    );
  }
  console.log(msg);
});
