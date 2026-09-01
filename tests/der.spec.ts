import { test, expect } from '@playwright/test';

test('Handle nested iframe', async ({ page }) => {

  await page.goto(
    'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe'
  );

  const outerFrame = page.frameLocator('#iframeResult');
  const innerFrame = outerFrame.frameLocator('iframe');

    const innerFrameText = await innerFrame.locator('h1').textContent();

    console.log(`Inner frame text: ${innerFrameText?.trim()}`);

});