import Page from "./page";
import {$,browser } from "@wdio/globals"

class BookFlightPage extends Page{

    public open(){
        return super.open('')
    }

    public get getBookFlight(){
        return $('a[href="reservation.php"]')
    }

    public get passengerCount(){
        return $('select[name="passCount"]')
    }

    public get getDepartingFrom(){
        return $('select[name="fromPort"]')
    }

    public get getFromMonth(){
        return $('select[name="fromMonth"]')
    }

    public get getFromDay(){
        return $('select[name="fromDay"]');
    }

    public get getToArriving(){
        return $('select[name="toPort"]')
    }

    public get getToMonth(){
        return $('select[name="toMonth"]')
    }

    public get getToDay(){
        return $('select[name="toDay"]')
    }

    public get getBussinessClass(){
        return $('input[value="Business"]')
    }

    public get getAirLines(){
        return $('select[name="airline"]')
    }

    public get getContinueButton(){
        return $('input[name="findFlights"]')
    }




    public async clickBookFlight(){
        //await browser.maximizeWindow();
        const bookFlightLink = await this.getBookFlight;
        await bookFlightLink.waitForClickable({timeout:3000});
        await bookFlightLink.click();
    }

    public async bookFlight(){
        const passengerCountElement = await this.passengerCount;
        await browser.waitUntil(
            async ()=> await passengerCountElement.isDisplayed(),
            {
                timeout: 1000,
                timeoutMsg : 'Element was not displayed after 1s'
            }
        );

        await passengerCountElement.selectByVisibleText(2);

        const departingFromElement = await this.getDepartingFrom;
        await browser.waitUntil(
            async () => await departingFromElement.isDisplayed(),
            {
                timeout:1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );

        await departingFromElement.selectByVisibleText("New York")

        const departingMonthElement = await this.getFromMonth
        await browser.waitUntil(
            async () => await departingMonthElement.isDisplayed(),
            {
                timeout:1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );
        await departingMonthElement.selectByVisibleText("September")

        const departingDayElement = await this.getFromDay;
        await browser.waitUntil(
            async () => await departingDayElement.isDisplayed(),
            {
                timeout:1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );
        departingDayElement.selectByVisibleText(8)

        const arrivingElement = await this.getToArriving;
        await browser.waitUntil(
            async ()=> await arrivingElement.isDisplayed(),
            {
                timeout:1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );
        await arrivingElement.selectByVisibleText("London")

        const arrivingMonthElement = await this.getToMonth;
        await browser.waitUntil(
            async ()=> await arrivingMonthElement.isDisplayed(),
            {
                timeout:1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );
        await arrivingMonthElement.selectByVisibleText("August")

        const arrivingDayElement = await this.getToDay;
        await browser.waitUntil(
            async ()=> await arrivingDayElement.isDisplayed(),
            {
                timeout:1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );
        await arrivingDayElement.selectByVisibleText(15);

        const businessClassElement = await this.getBussinessClass;
        await browser.waitUntil(
            async () => await businessClassElement.isDisplayed(),
            {
                timeout:1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );
        await businessClassElement.click();

        const airlinePreferanceElement = await this.getAirLines;
        await browser.waitUntil(
            async () => await airlinePreferanceElement.isDisplayed(),
            {
                timeout:1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );
        await airlinePreferanceElement.selectByVisibleText("Blue Skies Airlines")

        await browser.pause(1000)

        const continueButtonElement = await this.getContinueButton;
        await browser.waitUntil(
            async () => await continueButtonElement.isDisplayed(),
            {
                timeout:1000,
                timeoutMsg: 'Element was not displayed after 1s'
            }
        );

        await continueButtonElement.click();
    



        await browser.pause(1000)
    }



}

export default new BookFlightPage();