const puppeteer = require('puppeteer');

async function scrapeChannel(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('https://academic.oup.com/journals/search-results?page=1&q=data+mining&SearchSourceType=1&allJournals=1');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();

    const [el2] = await page.$x('//*[@id="img"]');
    const src = await el2.getProperty('src');
    const avatarURL = await src.jsonValue();

    browser.close();

    return {name, docURL}
    
}

module.exports = {
    scrapeChannel
}