import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import AccountPage from '../pageobjects/account.page';
import AddressPage from '../pageobjects/address.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.loginWithCrendetials(username, password)
});

When(/^I will try to login without credentials$/, async () => {
    await LoginPage.createAccountWithoutCredentials()
})

Then(/^I should see error (.*) for names and (.*) for checkbox$/, async (message, dataMessage) => {
    await expect(AccountPage.emailErrorMessage).toBeExisting();
    await expect(AccountPage.passwordErrorMessage).toBeExisting();
    await expect(AccountPage.dataErrorMessage).toBeExisting();
    await expect(AccountPage.emailErrorMessage).toHaveTextContaining(message);
    await expect(AccountPage.passwordErrorMessage).toHaveTextContaining(message);
    await expect(AccountPage.dataErrorMessage).toHaveTextContaining(dataMessage);
    
    
});

Then(/I should see (\w+) page title$/, async (title) => {
    await expect(AccountPage.accountTitle).toBeExisting();
    await expect(AccountPage.accountTitle).toHaveTextContaining(title);
});

When(/^I will go to (\w+) page$/, async (page) => {
    if (page === 'address') {
        await LoginPage.accountBtn.click();
        await expect(AddressPage.addAddressBtn).toBeExisting();
    }
});

When(/^I will add my new address$/, async () => {
    await expect(AddressPage.addAddressBtn).toBeExisting();

});
