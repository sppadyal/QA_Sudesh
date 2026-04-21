import { test, expect } from '@playwright/test';

test('Practice Logic: Find 2nd Highest Price on SauceDemo', async ({ page }) => {
    // 1. Login to reach the products page 
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // 2. Locate all price elements (e.g., "$29.99", "$9.99")
    const priceElements = page.locator('.inventory_item_price');
    const allPriceTexts = await priceElements.allInnerTexts();

    // 3. APPLY LOGIC: Clean data (Question 11 - Remove whitespace/symbols)
    // We remove '$' and convert to Number
    const prices = allPriceTexts.map(text => 
        parseFloat(text.replace('$', '').trim())
    );

    console.log('Processed Prices:', prices);

    // 4. APPLY LOGIC: Find 2nd Largest (Question 8)
    const uniqueSorted = [...new Set(prices)].sort((a, b) => b - a);
    const secondLargest = uniqueSorted[1];

    console.log('The 2nd largest price is:', secondLargest);

    // 5. Assertion
    // On SauceDemo, the prices are [29.99, 9.99, 15.99, 49.99, 7.99, 15.99]
    // Sorted unique: [49.99, 29.99, 15.99, 9.99, 7.99] -> 2nd is 29.99
    expect(secondLargest).toBe(29.99);
});