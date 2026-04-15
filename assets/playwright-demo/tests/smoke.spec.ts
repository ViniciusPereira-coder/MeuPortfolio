import { test, expect } from '@playwright/test';

test('fluxo basico com Playwright', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Playwright enables reliable web automation/i })).toBeVisible();

  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL(/\/docs\/intro/);

  await page.getByRole('link', { name: 'Trace viewer' }).first().click();
  await expect(page).toHaveURL(/trace-viewer/);
});
