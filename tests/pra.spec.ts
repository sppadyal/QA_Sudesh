import {test,expect} from '@playwright/test';

const users=[
    {username:'Admin',password:'admin123'},
    {username:'Bob',password:'padyal'},
    {username:'Charlie',password:'sudesh'},
];

for(const user of users){
    test(`Login test for ${user.username}`,async({page})=>{
        await page.goto('http://orangehrm-hrm-qa-4.orangehrmlive.com/auth/login');
        await page.fill('#username',user.username);
        await page.fill('#password',user.password);
        await page.click('#login-button');
        await expect(page.locator('#welcome-message')).toHaveText(`Welcome, ${user.username}!`);
    });
}
