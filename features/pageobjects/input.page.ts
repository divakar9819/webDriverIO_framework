// import Page from "./page";
// import {$ , browser} from '@wdio/globals'

// class InputsPage extends Page{

//     public open(){
//         return super.open('/inputs')
//     }

//     public get getInputField(){
//         return $('input[type="number"]')
//     }

//     public async enterNumber(){
//         //await this.getInputField.setValue(10)
//         console.log("start")
//         const input_ele = await this.getInputField;
//         console.log(input_ele)
//         await input_ele.setValue(20)
//         await browser.pause(2000);
//         console.log("end*********************")
//     }
// }

// export default new InputsPage();