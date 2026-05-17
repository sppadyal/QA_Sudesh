import { test, expect, devices } from '@playwright/test';

// Define the device profile
const iPhone = devices['iPhone 13'];

test.use({
  ...iPhone,
});

test('mobile menu should be visible on iPhone', async ({ page }) => {
  await page.goto('https://saucelabs.com/');
  
  // Example: Checking for a hamburger menu that only appears on mobile
  const menuButton = page.getByRole('button', { name: 'Sign up for free' });
  await expect(menuButton).toBeVisible();
  
  await menuButton.click();
});