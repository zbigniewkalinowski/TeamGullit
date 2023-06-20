import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://teamgullit.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Team Gullit/);
});
