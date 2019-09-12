const puppeteer = require("puppeteer");
const url = "https://forums.mtgarena.com/forums/threads/58489";

const lastUpdate = [];

const getCurrentDate = async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(url);
  await page
    .$eval("h1", el => el.innerText)
    .then(date => {
      lastUpdate.push({
        date: date
          .toLowerCase()
          .split("updated: ")
          .filter(el => {
            return el !== "";
          })
      });
    })
    .then(() => {
      console.log(lastUpdate[0].date);
    })
    .catch(err => {
      console.log(err);
    });
  await browser.close();
};

module.exports = {
  getCurrentDate,
  lastUpdate
};
