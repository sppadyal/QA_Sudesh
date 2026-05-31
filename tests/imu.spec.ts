import { test, expect } from '@playwright/test';

test('verify Its Time image', async ({ page }) => {

  await page.goto('https://www.imuldosa.com/');

  await page.getByRole('button', { name: 'VISIT Patient Site' }).click();

  await page.getByRole('link', { name: 'Financial Support' }).click();

  // Verify "It's Time" image is displayed
  await expect(page.getByAltText('Title Image')).toBeVisible();

});