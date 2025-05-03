import { test } from '@playwright/test';

// resolution: not see product 2 and 3

test('Product page', async ({ page }) => {
    await test.step("Go to the page", async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step("Product Page", async () => {
        await page.click("//a[contains(text(), 'Product page')]")
    });

    await test.step("Select Products", async () => {
        await page.dblclick("//button[@data-product-id='1']");
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
        await page.click("//button[@data-product-id='3']");
    });
});
