const { test, expect } = require('@playwright/test');

test('verify frontend changes', async ({ page }) => {
  // Navigate to the local HTML file
  await page.goto('file://' + __dirname + '/../abiz.html');

  // Switch to dark mode by clicking the label for the checkbox
  await page.locator('label[for="theme-toggle"]').click();

  // Wait for a moment to ensure theme applies and animations start
  await page.waitForTimeout(1000);

  // Take a screenshot
  await page.screenshot({ path: 'tests/screenshot.png' });
});
