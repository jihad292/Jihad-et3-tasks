import { partB } from './applicationsParts/Part-B.js';
import { indexMenu } from './outPuts/Output.js';
import promptSync from 'prompt-sync';
import { costSortedPrinter, costAbovePrinter, costDiscount, printOrder } from './components/Part-B-Functions.js';
import { automaticBills } from './components/TimeFunction.js';
const prompt = promptSync();
let quit = false;


while(quit === false){
    indexMenu();
    let optionChoose = prompt("Please choose an option from 1 to 6 : ");

    if(optionChoose === 'Q'){
        quit = true;
    }

    else if(optionChoose === '1'){
        printOrder();
    }

    else if (optionChoose === '2'){
        quit = true;
        automaticBills();
    }

    else if (optionChoose === '3'){
        costSortedPrinter();
    }

    else if (optionChoose === '4'){
        costAbovePrinter();
    }

    else if (optionChoose === '5'){
        costDiscount();
    }

    else if (optionChoose === '6'){
        partB();
    }
}
console.log('GoodBye!!');