import { expect, test } from '@playwright/test';

test('page has expected h1', async ({ page }) => {
  await page.goto('/letsgo');
  await expect(page.getByRole('heading')).toBeVisible();
});
