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
					keyboard: [["Описание"], ["Безкоштовні"], ["Платні"]],
				},
			});
		}
		// *безкоштовний курс
		if (text === "Безкоштовні") {
			await bot.sendMessage(chatId, "Це безкоштовний курс", {
				reply_markup: {
					keyboard: [
						["Basic Grammar"],
						["English for Volunteers"],
						["English for Defenders"], ["Назад"],
					],
				},
			});
		}
		if (text === "Basic Grammar") {
			await bot.sendMessage(
				chatId,
				"”Цей курс присвячений основним граматичним часам англійської мови. Після проходження цього курсу ти зможеш висловити думку в теперішьому, минулому та майбутньому часах, що вже дозволить тобі проводити базову комунікацію. Цей курс безкоштовний, адже я хочу, щоб якомога більше людей мали змогу висловитися, рідною і англійською мовами.”",
				{
					reply_markup: {
						keyboard: [
							["Present Simple"],
							["Present Continuous (Progressive)"],
							["Present Perfect"],
							["Present Tense Review"],
							["Past Simple"],
							["Past Simple vs Present Perfect"],
							["Future Simple"],
							["All tenses  "],

							["Назад"],
						],
					},
				}
			);
		}
		if (text === "Present Simple") {
			await bot.sendMessage(
				chatId,
				"https://pale-shad-8fc.notion.site/Present-Simple-778cd61a116f428db9d1464582012614"
			);
		}
		if (text === "Present Continuous (Progressive)") {
			await bot.sendMessage(
				chatId,
				"https://pale-shad-8fc.notion.site/Present-Continuous-Progressive-8c2a1921f6e64ce78688059f5cb495ac"
			);
		}
		if (text === "Present Perfect") {
			await bot.sendMessage(
				chatId,
				"https://pale-shad-8fc.notion.site/Present-Perfect-f6f72687a4f4441eb817d9897c0fcdfe"
			);
		}
		if (text === "Present Tense Review") {
			await bot.sendMessage(
				chatId,
				"https://pale-shad-8fc.notion.site/Present-Tense-Review-67f2e97ab39e4f5a89fac6cc11f7b830"
			);
		}
		if (text === "Past Simple") {
			await bot.sendMessage(
				chatId,
				"https://pale-shad-8fc.notion.site/Past-Simple-9e8d54890c134685878cef29fd63c0df"
			);
		}
		if (text === "Past Simple vs Present Perfect") {
			await bot.sendMessage(
				chatId,
				"https://pale-shad-8fc.notion.site/Past-Simple-vs-Present-Perfect-c6edb7e0a1f64516b629d81a5f1e67f0"
			);
		}
		if (text === "Future Simple") {
			await bot.sendMessage(
				chatId,
				"https://pale-shad-8fc.notion.site/Future-Simple-e56cb3100d8b4181bec387dd72fecc3a"
			);
		}
		if (text === "Future Forms ") {
			await bot.sendMessage(
				chatId,
				"https://pale-shad-8fc.notion.site/Future-Forms-ffc922cd56bd4f38bbd10a2a889126a4"
			);
		}
		if (text === "All tenses  ") {
			await bot.sendMessage(
				chatId,
				"https://pale-shad-8fc.notion.site/All-tenses-47890f8a332540be832b975407af2c8b"
			);
		}
		if (text === "English for Volunteers") {
			await bot.sendMessage(
				chatId,
				"” Цей курс розроблений для волонтерів. Тут представлена лексика, яка, на мою скромну думку, буде цікавою та потрібною для волонтерів, яким ми завдячуємо багато чим зараз. Дякую за Ваш вклад в нашу перемогу. Все є Україна!”",
				{
					reply_markup: {
						keyboard: [["Почати"], ["Назад"]],
					},
				}
			);
			if (text === "Почати") {
				await bot.sendMessage(
					chatId,
					"https://pale-shad-8fc.notion.site/English-for-Volunteers-8f58c090dc9843c79fc6ca0e15c57315",
					{
						reply_markup: {
							keyboard: [["Почати"], ["Назад"]],
						},
					}
				);
			}
		}
		if (text === "English for Defenders") {
			await bot.sendMessage(
				chatId,
				"”Цей курс був розроблений спеціально для військових. Військовим як нікому зараз необхідні знання англійської. Цей лексичний курс містить необхідні, на мою скромну думку, слова, які стосуються військової тематики. Дякую, що захищаєте нас і що ми можемо спати спокійно, доки Ви позбавлені сну. Все є Україна!”",
				{
					reply_markup: {
						keyboard: [["Почати"], ["Назад"]],
					},
				}
			);
			if (text === "Почати") {
				await bot.sendMessage(
					chatId,
					"https://pale-shad-8fc.notion.site/English-for-Defenders-1e5e942821be4546a63eb38a13c57969",
					{
						reply_markup: {
							keyboard: [["Почати"], ["Назад"]],
						},
					}
				);
			}
		}
		// ** Платний курс
		if (text === "Платні") {
			await bot.sendMessage(chatId, "/keyboard", {
				reply_markup: {
					keyboard: [
						[
							"https://pale-shad-8fc.notion.site/Present-Simple-Grammar-Fascist-c5125ceb76f04d5cb1296bdeca16c32e",
						],
						[
							"https://pale-shad-8fc.notion.site/Present-Simple-Grammar-Fascist-c5125ceb76f04d5cb1296bdeca16c32e",
						],
						[
							"https://pale-shad-8fc.notion.site/Present-Simple-Grammar-Fascist-c5125ceb76f04d5cb1296bdeca16c32e",
						],
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
					keyboard: [["Описание"], ["Безкоштовні"], ["Платні"]],
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
