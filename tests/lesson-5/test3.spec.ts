import { test } from '@playwright/test';

test('Test: To-Do list', async ({ page }) => {
    await test.step('Go to the page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click on To do list', async () => {
        await page.click("//a[contains(text(), 'Bài học 3: Todo page')]");
    });

    await test.step('Them moi Todo list', async () => {
        for (let i = 0; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`To do ${i}`);
            await page.click("//button[@id='add-task']");
        }
    });

    await test.step(' Xoá các todo có số lẻ ', async () => {
        // xuất hiện dialog để accept OK hay không từ trình duyệt
        page.on('dialog', async dialog => {
            await dialog.accept();
        })

        for (let i = 0; i < 100; i++) {
            if (i % 2 !== 0) {
                await page.click(`//button[@id='to-do-${i}-delete']`);
            }
        }
    });
})