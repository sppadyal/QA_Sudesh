import { test, expect } from '@playwright/test';

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

test('Verify string reversal logic', async ({ page }) => {
    const name = "Sudesh";
    const reversed = reverseString(name);
    
    console.log(reversed);
    
    // It is best practice to add an assertion
    //expect(reversed).toBe("hsedus");
});