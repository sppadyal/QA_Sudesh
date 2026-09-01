const {chromium} = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();