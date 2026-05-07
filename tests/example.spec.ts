import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Test Automation Practice");
});

test('get started link', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Click the get started link.
  await page.locator('#name').fill('Playwright');

});
