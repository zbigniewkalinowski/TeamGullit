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

test('Team page', async ({ page }) => {
  await page.goto('https://teamgullit.com/');

  function navigationItemTeam() {
    return page.getByRole('navigation').getByRole('link', { name: 'Team', exact: true })
  }

  navigationItemTeam().click()
  await expect(page).toHaveURL('https://www.teamgullit.com/team');
  await expect(page.getByRole('heading', { name: 'Players' })).toHaveText('Players')
  await expect(page.getByRole('heading', { name: 'Coaches' })).toHaveText('Coaches')

  await page.getByRole('link', { name: 'Levi de Weerd NL Flag Levi de Weerd TG-LevideWeerd Socialmedia logo icon Socialmedia logo icon Socialmedia logo icon Socialmedia logo icon' }).click();

  await expect(page.getByRole('heading', { name: 'Levi de Weerd' })).toHaveText('Levi de Weerd')
  await page.getByRole('navigation').getByRole('link', { name: 'Team', exact: true }).click();

  await page.getByRole('link', { name: 'Levi de Weerd NL Flag Levi de Weerd TG-LevideWeerd Socialmedia logo icon Socialmedia logo icon Socialmedia logo icon Socialmedia logo icon' }).getByRole('link', { name: 'Socialmedia logo icon' }).first().click();

  await expect(page.getByRole('link', { name: 'Levi de Weerd NL Flag Levi de Weerd TG-LevideWeerd Socialmedia logo icon Socialmedia logo icon Socialmedia logo icon Socialmedia logo icon' }).getByRole('link', { name: 'Socialmedia logo icon' }).first()).toBeEnabled()
})


test('partners page', async ({ page }) => {
  await page.goto('https://teamgullit.com/');

  function navigationItemPartners() {
    return page.getByRole('navigation').getByRole('link', { name: 'Partners', exact: true })
  }
  navigationItemPartners().click();
  await expect(page).toHaveTitle('Team Gullit Partners');
  await expect(page.getByRole('img', { name: 'This is a picture of Levi de Weerd with his FIFA set-up.' })).toBeVisible();

function ajaxPartnerButton() {
  return page.getByRole('link', { name: 'Ajax Esports logo' })
}
ajaxPartnerButton().click();
await expect(page).toHaveURL('https://www.ajax.nl/teams/ajax-esports/');
await page.goto('https://www.teamgullit.com/static/partners');

})