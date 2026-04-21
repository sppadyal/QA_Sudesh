import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://staging.pivotol.ai/login');
//   //await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('sudeshpadyal');
//   //await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('sudeshpadyal');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.getByRole('button', { name: 'Assets' }).click();
//   await page.getByRole('menuitem', { name: 'Asset Tree' }).click();
//   await page.locator('div').filter({ hasText: /^Test LLC$/ }).nth(1).click({
//     button: 'right'
//   });
//   await page.getByRole('menuitem', { name: 'New root asset' }).click();
//   //await page.getByRole('textbox', { name: 'Tag' }).click();
//   await page.getByRole('textbox', { name: 'Tag' }).fill('Automation');
//   await page.getByRole('combobox', { name: 'Select an asset type' }).click();
//   await page.getByRole('option', { name: 'Location > Building (5)', exact: true }).click();
//   await page.locator('div').filter({ hasText: /^Description$/ }).click();
//   await page.getByRole('textbox', { name: 'Description' }).fill('asset creation');
//   await page.getByRole('combobox', { name: 'Select a time zone' }).click();
//   await page.getByRole('option', { name: 'Africa/Accra' }).click();
//   await page.getByRole('spinbutton', { name: 'Latitude' }).click();
//   await page.getByRole('spinbutton', { name: 'Latitude' }).fill('32');
//   await page.getByRole('spinbutton', { name: 'Longitude' }).click();
//   await page.getByRole('spinbutton', { name: 'Longitude' }).fill('36');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.close();
// });

//import { test, expect } from '@playwright/test';

test('create new root asset', async ({ page }) => {
  await page.goto('https://staging.pivotol.ai/login');
  
  // Login - simplified (removed unnecessary clicks)
  await page.getByRole('textbox', { name: 'Username' }).fill('sudeshpadyal');
  await page.getByRole('textbox', { name: 'Password' }).fill('sudeshpadyal');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Navigation
  await page.getByRole('button', { name: 'Assets' }).click();
  await page.getByRole('menuitem', { name: 'Asset Tree' }).click();

  // Interaction with Right Click
  await page.locator('div').filter({ hasText: /^Test LLC$/ }).nth(1).click({ button: 'right' });
  await page.getByRole('menuitem', { name: 'New root asset' }).click();

  // Form Filling
  await page.getByRole('textbox', { name: 'Tag' }).fill('Automation');
  await page.getByRole('combobox', { name: 'Select an asset type' }).click();
  await page.getByRole('option', { name: 'Location > Building (5)', exact: true }).click();
  
  await page.getByRole('textbox', { name: 'Description' }).fill('asset creation');
  
  await page.getByRole('combobox', { name: 'Select a time zone' }).click();
  await page.getByRole('option', { name: 'Africa/Accra' }).click();

  await page.getByRole('spinbutton', { name: 'Latitude' }).fill('32');
  await page.getByRole('spinbutton', { name: 'Longitude' }).fill('36');

  // Action
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.close();
});