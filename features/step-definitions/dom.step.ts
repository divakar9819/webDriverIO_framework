import {Given,When,Then} from '@wdio/cucumber-framework'
import DomPage from '../pageobjects/dom.page'



Given(/^click dom link$/, async () => {
	console.log("1 dom=================")
    await DomPage.open()
    await DomPage.clickDom()
});

Then(/^select dom value$/, async () => {
	console.log("1 dom=================")
    
});
