import { test } from '@playwright/test';

const web = 'https://material.playwrightvn.com/';
const username = 'Hien Trinh';
const email = 'test@gmail.com';
const dob = '1995-08-15';
const bio = 'Love reading';
const country = 'uk';

test('Register test', async ({ page }) => {
    // Truy cập trang
    await test.step('Access to the page', async () => {
        await page.goto(web);
    });

    // click vào “Bài học 1: Register Page” 
    await test.step(' Click vào Bài học 1: Register Page ', async () => {
        await page.locator("//a[contains(text(), 'Bài học 1: Register Page')]").click({ delay: 400 })
    });

    // fill all info
    await test.step('fill all info', async () => {
        // fill username
        await page.locator("//input[@id='username']").fill(username);

        // press Sequentially
        await page.locator("//input[@id='email']").pressSequentially(email, { delay: 100 });

        // choose Female
        await page.locator("//input[@id='female']").setChecked(true);

        // chose Cooking (hobbies)
        await page.locator("//input[@id='cooking']").setChecked(true);

        // select Interests option 
        await page.locator("//select[@id='interests']").selectOption([
            { value: 'science' },
            { value: 'music' }
        ]);

        // select Country option
        await page.locator("//select[@id='country']").selectOption({ value: country });

        // type date
        await page.locator("//input[@id='dob']").fill(dob);

        // upload profile picture
        await page.locator("//input[@id='profile']").setInputFiles("data/Essential_SQLAlchemy_fig1.1.JPG")

        // type biography
        await page.locator("//textarea[@id='bio']").fill(bio);

        // rating
        await page.locator("//input[@id='rating']").fill("8");

        // favorite colour
        await page.locator("//input[@id='favcolor']").fill("#d400ff");

        // hover
        await page.locator('//div[@class="tooltip"]').hover();

        // Newsletter
        await page.locator("//input[@id='newsletter']").check();

        // click enable feature
        await page.click("//span[@class='slider round']");
    });



    // click Register
    //await page.click("//button[contains(text(), 'Register')]");
    await test.step('', async ({ }) => {
        await page.click("//button[normalize-space()='Register']")
    });

})