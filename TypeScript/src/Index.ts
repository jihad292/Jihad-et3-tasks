import promptSync from "prompt-sync";
const prompt = promptSync();
import { Order } from './components/Order'
import { billOutput, menu, searchChoose, indexMenu } from './output/Output';
import {  printStaticOrder, automaticOrderInfos, costSorted, costFiltred,costDiscounted } from './components/Part-A'
let quit = false;

while(quit === false){
    indexMenu();
    let optionChoose = prompt("Please choose an option from 1 to 6 : ");

    if(optionChoose === 'Q'){
        quit = true;
    }

    else if(optionChoose === '1'){
        printStaticOrder();
    }

    else if (optionChoose === '2'){
        quit = true;
        automaticOrderInfos();
    }

    else if (optionChoose === '3'){
        costSorted();
    }

    else if (optionChoose === '4'){
        costFiltred();
    }

    else if (optionChoose === '5'){
        costDiscounted();
    }

    else if (optionChoose === '6'){
        console.log('Part B under construction!')
    }
}
console.log('GoodBye!!');