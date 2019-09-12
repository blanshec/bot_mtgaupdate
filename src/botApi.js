const TelegramBot = require("node-telegram-bot-api");

const token = "908701506:AAFLbFyjaRoq1zLetTls8zAMDkkOLHnuc0k";
const bot = new TelegramBot(token, { polling: true });

module.exports = {
  bot
};
