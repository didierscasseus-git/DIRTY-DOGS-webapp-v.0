import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13'],
});

test('Mobile layout audit', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Check if primary buttons are present
  const canteenBtn = page.getByRole('button', { name: 'THE CANTEEN' });
  await expect(canteenBtn).toBeVisible();

  // Check touch target size for navigation links
  // Note: This is a proxy check as Playwright doesn't directly measure 'touch target' but we can check element size
  const menuLink = page.getByRole('link', { name: 'MENU' });
  const box = await menuLink.boundingBox();
  if (box) {
    expect(box.height).toBeGreaterThanOrEqual(44);
  }

  // Check if vConsole is present (if in debug mode)
  // await expect(page.locator('.vc-switch')).toBeVisible();
});
