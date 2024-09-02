import Page from "./page";
import {$,browser,expect} from '@wdio/globals'

class LoginPage extends Page{

    public async open(){
        console.log("calling open method===========================")
        return super.open('');
    }

    public get getuserName(){
        return $('input[name="userName"]')
    }

    public get getPassword(){
        return $('input[name="password"]')
    }

    public get getSubmitButton(){
        return $('input[name="submit"]')
    }


    public async clicklLoginLink() {
        const loginLink = await $('a[href="login.php"]')
        await loginLink.waitForClickable({ timeout: 1000 });
        await loginLink.click();
    }

    public async login(user: User){
        console.log("login method+++++++++++++++++++++++")
        console.log(user.userName)
        console.log(user.password)
        const userNameElement = await this.getuserName;
        await browser.waitUntil(
            async () => await userNameElement.isDisplayed(),
            {
                timeout: 1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );
        await userNameElement.setValue(user.userName)

        const passwordElement = await this.getPassword;
        await browser.waitUntil(
            async () => await passwordElement.isDisplayed(),
            {
                timeout: 1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );
        await passwordElement.setValue(user.password)

        const submitElement = await this.getSubmitButton;
        await browser.waitUntil(
            async () => await submitElement.isDisplayed(),
            {
                timeout: 1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );
        await submitElement.click();

        await browser.pause(2000);

    }

    public async verifyLogin(){
        const loginSuccessUrl = await browser.getUrl();
        await expect(loginSuccessUrl).toContain("login_sucess.php")
        await browser.pause(500)

    }




}

export default new LoginPage();