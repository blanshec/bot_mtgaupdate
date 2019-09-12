const { bot } = require("./botApi");
const { getCurrentDate, lastUpdate } = require("./getUpdate");

bot.onText(/update/, msg => {
  bot.sendMessage(msg.chat.id, `updated ${getCurrentDate()}`);
});
