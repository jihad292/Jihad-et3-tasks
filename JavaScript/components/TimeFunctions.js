import { Order } from './Order.js';
import { array } from './Part-B-Functions.js';


const automaticBills = ()=>{
    let OrdersPackage = [];
    for(var i =0;i<array.length;i++){
        OrdersPackage[i] = new Order(array[i]);
    }
    const testarray = [...OrdersPackage]; // testarray is an erray containing the order objects as elements inside it
    let x=-1;
    let intervalId ; // the id of the set Interval
    setTimeout(stopTime,45000);//setting the stop time
    intervalId = setInterval(function(){
        x++;
        console.log(testarray[x])},5000);
    function stopTime(){
        clearInterval(intervalId)
    }
}


export { automaticBills }