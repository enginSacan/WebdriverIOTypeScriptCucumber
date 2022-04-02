import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * login page containing specific selectors and methods for a login popup page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        let email = $('#create-account-email');
        email.waitForDisplayed({timeout: 5000});
        return email;
    }
    public get signInEmail () {
        let email = $('#signin-email');
        email.waitForDisplayed({timeout: 5000});
        return email;
    }
    public get signInPassword () {
        let sPassword = $('#signin-password');
        sPassword.waitForDisplayed({timeout: 5000});
        return sPassword;
    }
    public get inputPassword () {
        let password = $('#create-account-password');
        password.waitForDisplayed({timeout: 5000});
        return password;
    }

    public get logınBtn () {
        let login = $('//button[@data-testid="sign-in-button"]');
        login.waitForClickable({timeout: 5000});
        return login;
    }

    public get createAccountPageBtn () {
        let account = $('//button[@data-testid="register"]');
        account.waitForClickable({timeout: 5000});
        return account;
    }
    public get createAccountBtn () {
        let account = $('//button[@data-testid="Button-primary"]');
        account.waitForClickable({timeout: 5000});
        return account;
    }
    public get acceptDataCheckBox () {
        let data = $$('//label[@data-testid="checkbox-label"]')[0];
        data.waitForDisplayed({timeout: 5000});
        return data;
    }
    public get accountBtn () {
        let account = $('//div[@data-testid="HeaderMyAccount"]');
        account.waitForClickable({timeout: 5000});
        return account;
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async createAccount(username: string, password: string) {
        this.goToCreateAccount();
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.acceptDataCheckBox.click();
        await this.createAccountBtn.click();
    }
    public async loginWithCrendetials (username: string, password: string) {
        await this.logınBtn.click();
        await this.signInEmail.setValue(username);
        await this.signInPassword.setValue(password);
        await this.createAccountBtn.click();
    }
    public async createAccountWithoutCredentials() {
        this.goToCreateAccount();
        browser.pause(1000);
        await this.createAccountBtn.click();
        browser.pause(1000);
        await this.createAccountBtn.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
    public async goToCreateAccount () {
        super.clickPrivacyAcceptBtn();
        await this.logınBtn.click();
        browser.pause(2000);
        await this.createAccountPageBtn.click();
    }
}

export default new LoginPage();
