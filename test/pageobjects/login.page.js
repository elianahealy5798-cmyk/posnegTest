import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get inputUsername () {
        return $('#user-name'); // 
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get logoutLink() {
        return $('#logout_sidebar_link');
    }

    get error() {
        return $('h3[data-test="error"]')
    }

    credentials = {
        users: ['standard_user', 'problem_user', 'error_user', 'visual_user', 'performance_glitch_user'],
        password: 'secret_sauce'
    };
    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        
    }
    open () {
        return super.open('login');
    }

    async logout() {
        await this.burgerMenu.click();
        await this.logoutLink.click();
    }
}

export default new LoginPage();
