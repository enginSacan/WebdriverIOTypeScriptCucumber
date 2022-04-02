import Page from './page';

/**
 * Account page containing specific selectors and methods for a account page
 */
class AddressPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get addressPageBtn () {
        let addressPage = $('//a[@data-testid="/myaccount/addressbook?storeId=30019&langId=31&catalogId=10158"]');
        addressPage.waitForDisplayed({ timeout:5000 });
        return addressPage;
    }
    public get addAddressBtn () {
        let addAddress = $('//button[@data-testid="address-add-button"]');
        addAddress.waitForDisplayed({ timeout:5000 });
        return addAddress;
    }
    public get firstName () {
        let fName = $('#firstName');
        fName.waitForDisplayed({ timeout:5000 });
        return fName;
    }
    public get lastName () {
        let name =  $('#lastName');
        name.waitForDisplayed({ timeout:5000 });
        return name;
    }
    public get address () {
        let address1 =  $('#address1');
        address1.waitForDisplayed({ timeout:5000 });
        return address1;
    }
    public get homeNumber () {
        let hNum =  $('#address2');
        hNum.waitForDisplayed({ timeout:5000 });
        return hNum;
    }
    public get city () {
        let city1 = $('#city');
        city1.waitForDisplayed({ timeout:5000 });
        return city1;
    }
    public get zipCode () {
        let zCode = $('#zipCode');
        zCode.waitForDisplayed({ timeout:5000 });
        return zCode;
    }
    public get phone () {
        let phone1 = $('#phone1');
        phone1.waitForDisplayed({ timeout:5000 });
        return phone1;
    }
    public get saveBtn () {
        let saveBtn1 = $('//button[@data-testid="address-save-button"]');
        saveBtn1.waitForClickable({ timeout:5000 });
        return saveBtn1;
    }

    public async goToAddressPage () {
        await this.addressPageBtn.click();
    }
    public async addNewAddress (name: string, surname: string, homeAddress: string, homeNum: string, city: string, zipNum: string, telephone: string) {
       await this.addAddressBtn.click();
       await this.firstName.setValue(name);
       await this.lastName.setValue(surname);
       await this.address.setValue(homeAddress);
       await this.homeNumber.setValue(homeNum);
       await this.city.setValue(city);
       await this.zipCode.setValue(zipNum);
       await this.phone.setValue(telephone);
       await this.saveBtn.click();
    }

    
    
    
    
    
    
    
    
    
}

export default new AddressPage();

