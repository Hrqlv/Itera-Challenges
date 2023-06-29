import { test, expect } from "@playwright/test";
import dataItera from "../DataDriven/Itera.json";

test.describe("Tests Automation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://itera-qa.azurewebsites.net/home/automation");
  });

  test("Fill form inputs and submit", async ({ page }) => {
    const { name, phone, email, password, address } = dataItera;
    await page.fill('input[id="name"]', name);
    await page.fill('input[id="phone"]', phone);
    await page.fill('input[id="email"]', email);
    await page.fill('input[id="password"]', password);
    await page.fill('textarea[id="address"]', address);
    await page.click('button[name="submit"]');
  });

  test("Select checkbox and radio button", async ({ page }) => {
    await page.click('input[id="male"]');
    await page.click('input[id="tuesday"]');
    await page.click('input[id="friday"]');
  });

  test("Select option from dropdown", async ({ page }) => {
    const dropdown = await page.locator("select.custom-select");
    await dropdown.selectOption({ value: "1" });
  });

  test("Select checkbox and radio button using data-testid", async ({
    page,
  }) => {
    await page.click("//label[@for= '2years']");
    await page.click("//label[@for= 'selenium']");
    await page.click("//label[@for= 'testng']");
  });
});
