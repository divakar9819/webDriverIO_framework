import {Given,When,Then} from '@wdio/cucumber-framework'
import RegistrationPage from '../pageobjects/registration.page';

const user : User = {}

    Given(/^user click registration link$/, async () => {
        await RegistrationPage.open()
        await RegistrationPage.clickRegistrationLink()
    });

    // When(/^user enter (\w+) , (\w+) , (\w+) and (\w+)$/, (firstName,lastName,phoneNumber,email) => {
    //     user.firstName = firstName
    //     RegistrationPage.doRegistration(user)
    // });

    When(/^user enter (.*) , (.*) , (.*) and (.*)$/,(firstName, lastName, phoneNumber, email) => {
        user.firstName = firstName;
        user.lastName = lastName;
        user.phoneNumber = phoneNumber;
        user.email = email;
    });



    When(/^user enter address city state postal code and country$/, () => {
        user.address = "QA Infotech";
        user.city = "noida";
        user.state = "UP";
        user.postalCode = "123456"

    });

    When (/^user enter (.*) , (.*) and confirm password$/, (username,password) => {
        user.userName = username
        user.password = password
    });


    When(/^user click submit button$/, async() => {
        await RegistrationPage.doRegistration(user)
    });

    Then(/^user registration done successfully$/, async () => {
        await RegistrationPage.verifyRegistration();
    });


