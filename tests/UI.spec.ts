import { test } from '../fixtures/main-fixture';
import { expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Automation Testing Practice');
});

test('fill login form using page fixture', async ({ page, loginPage }) => {
  await page.goto('/');
  await loginPage.enterName('Playwright');
  await loginPage.enterEmail('playwright@example.com');
  await page.getByRole('textbox',{ name: 'Phone'}).fill('1234567890');
  await page.getByRole('textbox',{name: 'Address'}).fill('101 Test Street')
  await page.getByRole('radio', { name:'Male',exact:true}).click();
 
});
