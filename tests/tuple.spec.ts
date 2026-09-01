import { test, expect } from "@playwright/test";

test("click on all menu items", async ({ request }) => {

    // Navigate directly
    const response = await request.get("https://rahulshettyacademy.com/practice");
    expect(response.status()).toBe(200);
    console.log("Response status: " + response.status());
  
  });