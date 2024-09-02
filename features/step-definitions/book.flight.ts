import {Given,When,Then} from '@wdio/cucumber-framework'
import BookFlightPage from '../pageobjects/book.flight.page';

Given(/^user click book flight link$/, async () => {
	console.log("1 book flight")
    await BookFlightPage.open()
    //await browser.maximizeWindow();
    await BookFlightPage.clickBookFlight();


});

When(/^user enter all valid details$/, async() => {
	console.log("2 book flight")
    await BookFlightPage.bookFlight()
});

When(/^user click continue button for book flight$/, async() => {
	console.log("3 book flight")
});

Then(/^user should be flight available page$/, async () => {
	console.log("4 book flight")
});
