import { Order } from "./Order.js";
import sortBy from 'lodash.sortby';
import promptSync from 'prompt-sync';
const prompt = promptSync();

const array = [52,208,31,6,110,5,88,300];
const OrdersPackage = [];
for (var i=0; i<array.length;i++){
    OrdersPackage[i] = new Order(array[i]);
}

const printOrder = ()=>{
    let takeOrder = prompt('Please choose the Order by precising the number of bags: ');
    for (var i=0;i<array.length;i++){
        if(OrdersPackage[i].bags === Number(takeOrder)){
            console.log(OrdersPackage[i]);
        }
    }
}

const costSortedPrinter = ()=>{
    const OrdersSortedMaped = sortBy(OrdersPackage,'totalOrderPriceInital').map(item=>{
        return item.totalOrderPriceInital;
    });
    console.table(OrdersSortedMaped);
}

const costAbovePrinter = ()=>{
    const OrdersFiltred = OrdersPackage.filter(item=>{
        return item.totalOrderPriceInital > 280;
    }).map(item=>{
        return item.totalOrderPriceInital;
    });
    console.table(OrdersFiltred);
}

const costDiscount = ()=>{
    const OrdersDiscount = OrdersPackage.map(item=>{
        return [item.totalOrderPriceInital,item.totalOrderPriceFinal]
    });
    console.log('Showing Initial Price and Price after Discount');
    console.table(OrdersDiscount);
}


export { array, costSortedPrinter,costAbovePrinter, costDiscount, printOrder }