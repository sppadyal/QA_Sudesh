import { test, expect } from '@playwright/test';

// 1. Your Interface and Function stay the same
interface Product {
    name: string;
    price: number;
    category: string;
}

function getTaxedTotal(price: number, taxRate: number): number {
    return price + (price * taxRate);
}

// 2. Wrap your logic in a 'test' block
test('Calculate and verify MacBook Pro total price', async ({ page }) => {
    
    const myLaptop: Product = {
        name: "MacBook Pro",
        price: 2499,
        category: "Electronics"
    };

    const salesTax: number = 0.08;
    const finalPrice = getTaxedTotal(myLaptop.price, salesTax);

    // Logging for your visibility in the terminal
    console.log(`The total for ${myLaptop.name} is $${finalPrice.toFixed(2)}`);

    // 3. Add an assertion (Best practice for automation)
    // This tells Playwright the test actually passed or failed
    expect(finalPrice).toBe(2698.92);
});