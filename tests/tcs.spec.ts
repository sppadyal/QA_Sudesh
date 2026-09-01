import { test, expect } from '@playwright/test';

test('Count all Practice Site cards', async ({ page }) => {

    // Navigate directly
    await page.goto('https://rahulshettyacademy.com/practice');

    // Click Browse Practice Sites & Resources
    await page.getByRole('button', {name: 'Browse Practice Sites & Resources'}).click();

    // Verify redirect
    await expect(page).toHaveURL(/practice/);
    // Count all practice cards
   const practicingCount = await page
    .locator('button:has-text("Start Practicing")')
    .count();

   const learningCount = await page
    .locator('button:has-text("Start Learning")')
    .count();

console.log(`start practicing= ${practicingCount}`);
console.log(`start learning= ${learningCount}`);
console.log(`total= ${practicingCount + learningCount}`);
});
