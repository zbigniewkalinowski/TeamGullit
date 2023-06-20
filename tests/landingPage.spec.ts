import { test, expect } from '@playwright/test';

test('Landing page main tab', async ({ page }) => {
  await page.goto('https://teamgullit.com/');
  await expect(page).toHaveTitle(/Team Gullit/);

  const news = page.getByRole('navigation').getByRole('link', { name: 'News', exact: true })
  const team = page.getByRole('navigation').getByRole('link', { name: 'Team', exact: true })
  const fifa23 = page.getByRole('navigation').getByRole('link', { name: 'Fifa 23', exact: true })
  const partners = page.getByRole('navigation').getByRole('link', { name: 'Partners', exact: true })

  await expect(news).toBeEnabled()
  await expect(team).toBeEnabled()
  await expect(fifa23).toBeEnabled()
  await expect(partners).toBeEnabled()

  news.click()
  
});

// test('Go to news', async ({ page }) => {
// })

