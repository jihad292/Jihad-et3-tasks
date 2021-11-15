import { Order } from './Order';
import sortBy from 'lodash.sortby';
import { function1PartA } from '../output/Output';
import promptSync from 'prompt-sync';
const prompt = promptSync();
type MaybeNumber = number | null;

const staticOrders = () : Order[] =>{
    const array = [52, 208, 31, 66, 110, 5, 88, 300];
    let arrayOrdersStatic = [];
    for(var i = 0 ; i<array.length; i++){
        arrayOrdersStatic[i] = new Order(array[i]);     
    }  
    return arrayOrdersStatic;  
}

interface OrderInterface {
    bagsNumber: MaybeNumber;
    totalCoffePrice: MaybeNumber;
    totalLargeBoxes: MaybeNumber;
    totalMediumBoxes: MaybeNumber;
    totalSmallBoxes: MaybeNumber;
    largeBoxesPrice: MaybeNumber;
    mediumBoxesPrice: MaybeNumber;
    smallBoxesPrice: MaybeNumber;
    totalOrderPrice: MaybeNumber;
}

const orderObjects = () : OrderInterface[] =>{
    const array = staticOrders();
    const arrayObjects = [];
    for (var i = 0;i < array.length; i++){
        arrayObjects[i] = orderInformation(array[i]);
    } 
    return arrayObjects;
}

const orderInformation = <T extends Order>(obj : T) : OrderInterface  =>{
    
    const id = Math.random();
    const order : OrderInterface = {
        bagsNumber:obj.bagsNumber,
        totalCoffePrice : obj.totalCoffePrice,
        totalLargeBoxes : obj.largeUsed,
        totalMediumBoxes : obj.mediumUsed,
        totalSmallBoxes : obj.smallUsed,
        largeBoxesPrice : obj.totalLargeBoxesPrice,
        mediumBoxesPrice : obj.totalMediumBoxesPrice,
        smallBoxesPrice : obj.totalSmallBoxesPrice,
        totalOrderPrice : obj.totalPriceInitial,

    }
    return order;
}

 const printStaticOrder = () : void =>{
    let quit = false;  
    while(quit === false){
        function1PartA();
        let chooseOption = prompt('Please choose an Option: ');
        let chooseOptionNumber = Number(chooseOption);
        if(chooseOptionNumber >= 1 && chooseOptionNumber <= 8){
            const indice = chooseOptionNumber -1;
            let arrayOrders = staticOrders();
            const orderChosen = orderInformation(arrayOrders[indice]);
            console.log(orderChosen);
        }
        else if (chooseOption === 'Q'){
            quit = true;
        }

        else{
            console.log('Please choose a valid option');
        }
    }
 }

const automaticOrderInfos = () : void =>{
    const array = staticOrders();
    let intervalId = null;
    let x = -1;
    const stopInterval = () : void =>{
        clearInterval(intervalId);
        x=-1;
    }
    setTimeout(stopInterval, 45000);

    intervalId = setInterval(()=>{
        x++;
        console.log(orderInformation(array[x]));
    },5000)
}

const costSorted = () : void =>{
    const testArray = orderObjects();
    const arrayObjectsSorted = sortBy(testArray,'totalOrderPrice');
    for(var i =0;i<arrayObjectsSorted.length; i++) {
        console.log(arrayObjectsSorted[i]);
    }
}

const costFiltred = () : void =>{
    const testArray = orderObjects();
    const ordersFiltred = testArray.filter(item=>{
        return item.totalOrderPrice > 280;
    });
    console.log(ordersFiltred);
}

const costDiscounted = () : void =>{
    const array = orderObjects();
    for (var i = 0; i < array.length; i++){
        if ( array[i].totalOrderPrice > 400 ){
            const test = new Order(array[i].bagsNumber);
            array[i].totalOrderPrice = test.totalPriceFinal;
        }
    }
    console.log(array);
}

export {  printStaticOrder, automaticOrderInfos, costSorted, costFiltred, costDiscounted, OrderInterface, orderInformation }