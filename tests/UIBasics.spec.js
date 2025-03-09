const { test, expect } = require('@playwright/test');

test('basic test with browser', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await browser.newPage();
  const userName = page.locator('#username');
  const signIn = page.locator('#signInBtn');
  const cardsNames = page.locator('.card-body a');
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title());
  await userName.type('Rahulshetty');
  await page.locator('[type="password"]').fill('learning');
  await signIn.click();
  console.log(await page.locator('[style*="block"]').textContent());
  await expect(page.locator('[style*="block"]')).toHaveText(
    'Incorrect username/password.'
  );
  await userName.fill('rahulshettyacademy');
  await signIn.click();
  console.log(await cardsNames.first().textContent());
  // console.log(await cardsNames.allTextContents());
  const names = await cardsNames.allTextContents();
  await expect(cardsNames).toHaveText([
    'iphone X',
    'Samsung Note 8',
    'Nokia Edge',
    'Blackberry'
  ]);
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
});

test('basic test with page', async ({ page }) => {
  await page.goto('https://google.com');
  console.log(await page.title());
  await expect(page).toHaveTitle('Google');
});
