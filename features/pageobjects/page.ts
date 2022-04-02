/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens home page of the site
    */
     public get privacyAcceptBtn () {
        let privacy = $('//button[@data-testid="Button-primary"]');
        privacy.waitForClickable({timeout: 5000 });
        return privacy;
    }
    public open () {
        return browser.url(`https://nl.tommy.com/`)
    }
    public async clickPrivacyAcceptBtn () {
        await this.privacyAcceptBtn.click();
    }
}
