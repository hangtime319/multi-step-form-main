import { test, expect } from '@playwright/test';

test('multi-step form full flow', async ({ page }) => {
  await page.goto('/');

  // Step 1: Your Info
  await page.fill('#name', 'Test User');
  await page.fill('#email', 'test@example.com');
  await page.fill('#phone', '+1234567890');
  await page.click('button:has-text("Next Step")');

  // Step 2: Select Plan
  await page.click('text=Pro');
  await page.locator('input[aria-label="Toggle between monthly and yearly billing"]').click({ force: true });
  await page.click('button:has-text("Next Step")');

  // Step 3: Add-Ons
  await page.click('label:has-text("Online service")');
  await page.click('button:has-text("Next Step")');

  // Step 4: Summary -> Confirm
  await expect(page.locator('text=Pro (Yearly)')).toBeVisible();
  await page.click('button:has-text("Confirm")');

  // Thank You
  await expect(page.locator('text=Thank you!')).toBeVisible();
});
