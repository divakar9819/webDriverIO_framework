import {Given,When,Then} from "@wdio/cucumber-framework"
import LoginPage from '../pageobjects/login.page'

const user : User = {userName: "", password: ""}

Given(/^user click login button$/, async() => {
    console.log("1==============================")
	await LoginPage.open()
    await LoginPage.clicklLoginLink()
    console.log("2==============================")
});

When(/^user enter valid (.*) and (.*)$/, async (username,password) => {
    console.log("3==============================")
	user.userName = username;
    user.password = password;
    console.log("4==============================")
});

When(/^user click submit button for login$/, async () => {
    console.log("5==============================")
    console.log("*************************"+user.userName)
	await LoginPage.login(user)
    console.log("6==============================")
});

Then(/^user should be login successfully$/, async() => {
    console.log("7==============================")
	console.log("*8888888888888888888")
    await LoginPage.verifyLogin();
    console.log("8==============================")
});
