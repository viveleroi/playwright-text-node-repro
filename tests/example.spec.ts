import { test, expect } from '@playwright/test';

test('works', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.locator('//h1/span')).toHaveText('Playwright');
  await expect(page.locator('//h1/span/text()[1]')).toHaveText('Playwright');
});
