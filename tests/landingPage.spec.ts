import { test, expect } from '@playwright/test';

test('Landing page main tab', async ({ page }) => {
  await page.goto('https://teamgullit.com/');
  await expect(page).toHaveTitle(/Team Gullit/);

  function navigationItemNews() {
    return page.getByRole('navigation').getByRole('link', { name: 'News', exact: true })
  }

  function navigationItemTeam() {
    return page.getByRole('navigation').getByRole('link', { name: 'Team', exact: true })
  }

  function navigationItemFifa23() {
    return page.getByRole('navigation').getByRole('link', { name: 'Fifa 23', exact: true })
  }

  function navigationItemPartners() {
    return page.getByRole('navigation').getByRole('link', { name: 'Partners', exact: true })
  }

  await expect(navigationItemNews()).toBeEnabled()
  await expect(navigationItemTeam()).toBeEnabled()
  await expect(navigationItemFifa23()).toBeEnabled()
  await expect(navigationItemPartners()).toBeEnabled()

  navigationItemNews().click()
  await expect(page).toHaveURL('https://www.teamgullit.com/news');
  navigationItemTeam().click();
  await expect(page).toHaveURL('https://www.teamgullit.com/team');
  navigationItemFifa23().click();
  await expect(page).toHaveURL('https://www.teamgullit.com/fifa-23');
  navigationItemPartners().click();
  await expect(page).toHaveURL('https://www.teamgullit.com/partners');

});
