import { test, expect } from "@playwright/test";

test("Click all left menu tabs", async ({ page }) => {
  test.setTimeout(60000);

   page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  const menuItems = [
    "Admin",
    "PIM",
    "Leave",
    "Time",
    "Recruitment",
    "My Info",
    "Performance",
    "Dashboard",
    "Directory",
    "Maintenance",
    "Claim",
    "Buzz",
  ];

  const expectedHeaders: Record<string, string> = {
    Admin: "Admin",
    PIM: "Personal Information",
    Leave: "Leave",
    Time: "Time",
    Recruitment: "Recruitment",
    "My Info": "My Info",
    Performance: "Performance",
    Dashboard: "Dashboard",
    Directory: "Directory",
    Maintenance: "Maintenance",
    Claim: "Claim",
    Buzz: "Buzz",
  };

  for (const menu of menuItems) {
    await page.getByRole("link", { name: menu }).click();
    console.log(`Clicked on ${menu} menu item`);
    // Handle Maintenance password confirmation
    if (menu === "Maintenance") {
      await page.locator('input[name="password"]').click();
      await page.locator('input[name="password"]').fill("admin123");
      await page.getByRole("button", { name: "Confirm" }).click();
    }
    // Validate URL
    const headerText = await page.locator("h6").first().textContent();

expect(headerText?.trim()).toBe(expectedHeaders[menu]);

console.log(`✓ ${menu} page opened successfully`);
  }
});
