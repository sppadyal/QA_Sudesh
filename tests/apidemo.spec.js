import { test, expect } from '@playwright/test';

test('Browser Name', async ({ browserName }) => {

  console.log(browserName);

});