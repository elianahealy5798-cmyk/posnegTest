import { browser,expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        for (const username of LoginPage.credentials.users) {
            await LoginPage.open();
            await LoginPage.login(username, LoginPage.credentials.password) ;
            await browser.url('https://www.saucedemo.com/inventory.html');
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            
            await LoginPage.logout();
    }
        for (const username of LoginPage.credentials.users) {
            await browser.refresh();
            await LoginPage.open();
            await LoginPage.login(username, ``) ;
            await expect(LoginPage.error).toHaveText(expect.stringContaining('Epic sadface'));
    }
    })
})
;
