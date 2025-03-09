const { test, expect } = require('@playwright/test');

test.only('Client App login', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('.btn1').click();
  const email = 'testf@hotmail.com';
  const pwd = 'Srikanth@567';
  await page.locator('#firstName').fill('testFirstN');
  await page.locator('#lastName').fill('testLastN');
  await page.locator('#userEmail').fill(email);
  await page.locator('#userMobile').fill('9912056790');
  await page.locator('#userPassword').fill(pwd);
  await page.locator('#confirmPassword').fill(pwd);
  await page.locator('input[type="checkbox"]').check();
  await page.locator('#login').click();
  console.log(await page.locator('.headcolor').textContent());
  await expect(page.locator('.headcolor')).toContainText('Successfully');
  await page.locator('.btn.btn-primary').click();
  await page.locator('#userEmail').fill(email);
  await page.locator('#userPassword').fill(pwd);
  await page.locator('#login').click();
  await page.locator('.card-body b').first().textContent();
  console.log(await page.locator('.card-body b').allTextContents());
});
