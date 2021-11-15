import { Order }  from './Order';
import {  OrderInterface, orderInformation } from './Part-A';
import { billOutput } from '../output/Output';
let array : OrderInterface[] = [];
type MaybeOrderInterface = OrderInterface | undefined;

const orderObjects = () : OrderInterface[]=>{
    return array;
}
   
const addOrder = (number : number) : void =>{
    const order1 : Order = new Order(number);
    const orderObject : OrderInterface = orderInformation(order1);
    array = [...array,orderObject];
}

const printOrders = () : void  =>{
    if (array.length === 0){
        console.log('No Orders yet!!')
    }
    else{
        console.log(array);
    }
}


const deleteOrder = (number : number) : void =>{
    let testOrderExistance : boolean = false;
    const arrayTest : OrderInterface[] = orderObjects();
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

const findOrder = (number : number) : void =>{ // the find method will retuen the first matched object
    let arrayTest : OrderInterface[] = orderObjects();
    const objectSearched : MaybeOrderInterface =  arrayTest.find(<T extends OrderInterface>(obj : T)   =>{
        return obj.bagsNumber === Number(number);
    })
    if(objectSearched != undefined){
        console.log('Your Order has been found!!')
        console.log(objectSearched);
    }
    else if (objectSearched === undefined){
        console.log('Your Order do not exist!!')  
    }
};

const chashoutOrders = () : void =>{
    let arrayTest : OrderInterface[] = orderObjects();
    let arrayOrders : Order[] = [];
    if (arrayTest.length != 0 ){
        for (var i = 0; i < arrayTest.length; i++){
            arrayOrders[i] = new Order(arrayTest[i].bagsNumber);
            billOutput(arrayOrders[i]);
        }
    }
    else{
        console.log('No Orders to checkout!!');
    }
    while(array[0]){
        deleteOrder(array[0].bagsNumber); 
    }
 }

export { addOrder, printOrders, deleteOrder, findOrder, chashoutOrders }



