const { test, expect } = require('@playwright/test');

test('verify frontend changes', async ({ page }) => {
  // Navigate to the local HTML file
  await page.goto('file://' + __dirname + '/../abiz.html');

  // Scroll down the page to trigger animations
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Wait for a moment to ensure animations have completed
  await page.waitForTimeout(2000); // Increased wait time for animations

  // Take a screenshot
  await page.screenshot({ path: 'tests/screenshot.png' });
});
