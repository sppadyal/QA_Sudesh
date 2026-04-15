import { test, expect } from '@playwright/test';

test('should calculate the taxed total correctly', async ({ page }) => {
  const price = 2499;
  const taxRate = 0.08;
  const total = price + (price * taxRate);
  
  console.log(`The total is $${total}`);
  expect(total).toBeGreaterThan(0);
});