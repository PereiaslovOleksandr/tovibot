const TelegramApi = require("node-telegram-bot-api");

const token = "5202216584:AAGieEKogHFyPAaSDLBRPFSOUi6pHTRhjR0";

const bot = new TelegramApi(token, { polling: true });

const start = () => {
	// команды бота
	bot.setMyCommands([
		{ command: "/start", description: "/start" },
		{ command: "/info", description: "/info" },
		{ command: "/keyboard", description: "/keyboard" },
	]);

	bot.on("message", async (msg) => {
		const text = msg.text;
		const chatId = msg.chat.id;

		// keyboard

		if (text === "/start") {
			await bot.sendMessage(chatId, "/start", {
				reply_markup: {
					keyboard: [["Описание"], ["Челенджы"]],
				},
			});
		}

		if (text === "Челенджы") {
			await bot.sendMessage(chatId, "/keyboard", {
				reply_markup: {
					keyboard: [
						[
							"https://pale-shad-8fc.notion.site/Present-Simple-Grammar-Fascist-c5125ceb76f04d5cb1296bdeca16c32e",
						],
						["Назад"],
					],
				},
			});
		}

		if (text === "Назад") {
			await bot.sendMessage(chatId, "/keyboard", {
				reply_markup: {
					keyboard: [["Описание"], ["Челенджы"]],
				},
			});
		}
		// bot.sendMessage(chatId, `Ты мне написал (${text}) Это так мило`);

		// Старт бота
		if (text === "/start") {
			// стикер приветствия
			await bot.sendSticker(
				chatId,
				`CAACAgIAAxkBAAED5Z9iBtbExYdZqmOOZkN3w9eMjDrDVAACbBoAAp_9OUjO9zrazER_2iME`
			);
			// сообщения приветствия
			return bot.sendMessage(
				chatId,
				`Добро пожаловать в телеграм бот по изучению Анг.Мовы Tovi`
			);
			// предложения о выборе языка
		}
		// информацыя про пользавателя
		if (text === "/info") {
			return bot.sendMessage(
				chatId,
				`тебя зовут  ${msg.from.first_name} ${msg.from.last_name}`
			);
		}
		// return bot.sendMessage(chatId, "Я тебя не понимаю,попробуй еще раз! ");

		console.log(msg);
	});
};
start();
vvvv