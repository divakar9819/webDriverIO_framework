import Page from "./page";
import { $, browser } from '@wdio/globals';

class DomPage extends Page {

    public open() {
        return super.open('');
    }

    public get domLink() {
        return $('=Challenging DOM');
    }

    public get bar(){
        return $('=bar')
    }

    public get getTable(){
        return $('.large-10')
    }

    public get getTableHead(){
        return this.getTable.$('table thead tr')
    }

    public get getTableHeadTh(){
        return this.getTableHead.$$('th')
    }

    public async clickDom() {
        const domElement = await this.domLink;
        await domElement.waitForClickable({
            timeout: 2000, 
            timeoutMsg: 'chalange Element not clickable after 2 seconds'
        });
        await domElement.click();
        await browser.pause(1000);  // Consider replacing this with a more reliable wait condition

        // const barElement = await this.bar;
        // await barElement.waitForClickable({
        //     timeout:2000,
        //     timeoutMsg: 'bar Element not clickable after 2 seconds'
        // });

        // await barElement.click()
        // await browser.pause(100);

        const tableElement = await this.getTable;
        await browser.waitUntil(
            async () => await tableElement.isDisplayed(),
            {
                timeout:2000,
                timeoutMsg: 'table Element not found after 2 seconds'
            }
        );

        const theadElement = await this.getTableHead;
        await browser.waitUntil(
            async () => await theadElement.isDisplayed(),
            {
                timeout:2000,
                timeoutMsg: 'table head Element not found after 2 seconds'
            }
        );

        //const headerElements = await this.getTableHeadTh;
        // await browser.waitUntil(
        //     async () => await headerElements.isDisplayed(),
        //     {
        //         timeout:2000,
        //         timeoutMsg: 'table header Element not found after 2 seconds'
        //     }
        //);

        // console.log("header1====================================")
        // console.log(headerElements.lenght)
        // for(let i=0;i<headerElements.lenght;i++){
        //     const headerText = await headerElements[i].getText();
        //     console.log(headerText)
        // }

        // console.log("header2====================================")

        const headerElements = await this.getTableHeadTh;

        console.log("header1====================================");
        console.log(headerElements.length); // Corrected typo
        for (let i = 0; i < headerElements.length; i++) {
            const headerText = await headerElements[i].getText();
            console.log(headerText);
        }

        console.log("header2====================================");

    }
}

export default new DomPage();