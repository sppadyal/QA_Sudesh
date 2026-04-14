import { test, expect } from '@playwright/test';

test('Verify string reversal logic', async ({ page }) => {
    const original: string = "Playwright";
    const expected: string = "thgirwyalP";

    // The reversal logic
    const reversed: string = original.split('').reverse().join('');

    // The Assertion: This is what makes it a real "test"
    expect(reversed).toBe(expected);
    
    // Optional: Log it so you can see it in the 'list' reporter
    console.log(`Success! original is ${original} reversed is ${reversed}`);
});