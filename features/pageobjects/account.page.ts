import Page from './page';

/**
 * Account page containing specific selectors and methods for a account page
 */
class AccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get emailErrorMessage () {
        let email = $('#create-account-email-helper-text');
        email.waitForDisplayed({ timeout:5000 });
        return email;
    }
    public get passwordErrorMessage () {
        let password = $('#create-account-password-helper-text');
        password.waitForDisplayed({ timeout:5000 });
        return password;
    }
    public get dataErrorMessage () {
        let error = $('//p[@data-error-text]');
        error.waitForDisplayed({ timeout:5000 });
        return error;
    }
    public get accountTitle () {
        let title = $('//h1[@class="my-account__title"]');
        title.waitForDisplayed({ timeout:5000 });
        return title;
    }

}

export default new AccountPage();
