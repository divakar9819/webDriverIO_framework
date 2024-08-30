import Page from "./page";
import {$,browser,expect} from '@wdio/globals'

class RegistrationPage extends Page{

    public open(){
        return super.open('')
    }

    public async clickRegistrationLink(){
        console.log("Link start===================");
        const registerLink = await $('a[href="register.php"]');
        await registerLink.waitForClickable({ timeout: 5000 });
        await registerLink.click();
        
        // Wait for the new page to load
        await browser.pause(200); // Optionally, adjust this pause or use a more robust wait
        
        // Confirm that we are on the registration page
        const currentUrl = await browser.getUrl();
        console.log("Current URL after clicking:", currentUrl);
        expect(currentUrl).toContain('register.php');

        console.log("link end===================");
    }

    public get getFirstName() {
        return $('input[name="firstName"]');
    }

    public get getLastName(){
        return $('input[name="lastName"]')
    }

    public get getPhomeNumber(){
        return $('input[name="phone"]')
    }

    public get getEmail(){
        return $('input[name="userName"]')
    }

    public get getAddress(){
        return $('input[name="address1"]')
    }

    public get getCity(){
        return $('input[name="city"]')
    }

    public get getState(){
        return $('input[name="state"]')
    }

    public get getPostalCode(){
        return $('input[name="postalCode"]')
    }

    public get getCountry(){
        return $('select[name="country"]')
    }

    public get getuserName(){
        return $('input[name="email"]')
    }

    public get getPassword(){
        return $('input[name="password"]')
    }

    public get getConfirmPassword(){
        return $('input[name="confirmPassword"]')
    }

    public get getSubmitButton(){
        return $('input[name="submit"]')
    }



    public async doRegistration(user: User) {
        try {
            console.log("******************");
    
            // Await the element
            const firstNameElement = await this.getFirstName;
            // Wait until the element is displayed
            await browser.waitUntil(
                async () => await firstNameElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg: 'Element was not displayed after 1s'
                }
            );
    
            // Set the value of the first name input
            await firstNameElement.setValue(user.firstName);
    
            // Log the value set
            console.log("First name set to:", user.firstName);

            const lastNameElement = await this.getLastName;
            await browser.waitUntil( 
                async() => await lastNameElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );
            await lastNameElement.setValue(user.lastName)

            const phoneNumberElement = await this.getPhomeNumber;
            await browser.waitUntil(
                async () => await phoneNumberElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'

                }
            );

            await phoneNumberElement.setValue(user.phoneNumber)

            const emailElement = await this.getEmail;
            await browser.waitUntil(
                async () => await emailElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );

            await emailElement.setValue(user.email)

            const addressElement = await this.getAddress;
            await browser.waitUntil(
                async ()=> await addressElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );
            await addressElement.setValue(user.address)

            const cityElement = await this.getCity;
            await browser.waitUntil(
                async ()=> await cityElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );
            await cityElement.setValue(user.city)

            const stateElement = await this.getState;
            await browser.waitUntil(
                async ()=> await stateElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );
            await stateElement.setValue(user.state)

            const postalCodeElement = await this.getPostalCode;
            await browser.waitUntil(
                async ()=> await postalCodeElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );
            await postalCodeElement.setValue(user.postalCode)

            const countryElement = await this.getCountry;
            await browser.waitUntil(
                async ()=> await countryElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );
            await countryElement.selectByVisibleText("INDIA");
            console.log(countryElement.getValue()+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

            const userNameElement = await this.getuserName;
            await browser.waitUntil(
                async ()=> await userNameElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );
            await userNameElement.setValue(user.userName);

            const passwordElement = await this.getPassword;
            await browser.waitUntil(
                async ()=> await passwordElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );
            await passwordElement.setValue(user.password);

            const confirmPasswordElement = await this.getConfirmPassword;
            await browser.waitUntil(
                async ()=> await confirmPasswordElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );
            await confirmPasswordElement.setValue(user.password);

            const submitButtonElement = await this.getSubmitButton
            await browser.waitUntil(
                async () => await submitButtonElement.isDisplayed(),
                {
                    timeout: 1000,
                    timeoutMsg:'Element was not displayed adter 1s'
                }
            );

            await submitButtonElement.click();
    
            // Pause for 5 seconds (if needed)
            await browser.pause(5000);
        } catch (error) {
            console.error("An error occurred during registration:", error);
        }
    }

    public async verifyRegistration(){
        console.log("********************************")
        const registrationURL = await browser.getUrl();
        console.log(registrationURL)
        await expect(registrationURL).toContain("register_sucess.php");
        await browser.pause(1000);
    }

}

export default new RegistrationPage();