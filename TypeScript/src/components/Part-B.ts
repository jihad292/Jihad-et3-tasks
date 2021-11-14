import { Order }  from './Order';
import {  OrderInterface, orderInformation } from './Part-A';
let array = [];

const orderObjects = () : OrderInterface[]=>{
    return array;
}
   
const addOrder = (number : number) : void =>{
    const order1 = new Order(number);
    const orderObject = orderInformation(order1);
    array = [...array,orderObject];
}

const printOrders = ()  =>{
    if (array.length === 0){
        console.log('No Orders yet!!')
    }
    else{
        console.log(array);
    }
}


const deleteOrder = (number : number) : void =>{
    let testOrderExistance = false;
    const arrayTest = orderObjects();
    for ( var i =0; i<arrayTest.length;i++){
        if (arrayTest[i].bagsNumber === Number(number)){
            testOrderExistance = true;
            const arrayFiltred = arrayTest.filter(item=>{
                return item.bagsNumber != Number(number);
            });
            array = arrayFiltred;
        }
    }
    if(testOrderExistance === false){
        console.log('Your order do not exist!!');
    }
    else{
        console.log('Your order with number of bags '+Number(number),' has been deleted!!');
    }
}

const findOrder = (number : number) : void =>{
    let arrayTest = orderObjects();
    let orderExistance = arrayTest.map(item=>{
        return item.bagsNumber === Number(number);
    });
    console.log(orderExistance);
    // if (orderExistance === true){
    //     const arrayTest2 = arrayTest.filter(item=>{
    //         return item.bagsNumber === Number(number);
    //     }).map(item=>{
    //         return item.bagsNumber;
    //     });
    //     console.table(arrayTest2);
    // }
    // else{
    //     console.log('This Order do not exist!')
    // }

}

export { addOrder, printOrders, deleteOrder, findOrder }



