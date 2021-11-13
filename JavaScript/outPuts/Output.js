import { Order } from '../components/Order.js';

const billOutput=(Order)=>{ //this function return the Order bill and take the Object as parameter
    console.log(`----------------------------------------------------\n Number of bags ordered: ${Order.bags} \n Total Price of coffe: ${Order.totalCoffePrice}$ \n 
    Number of Large Boxes: ${Order.largeUsed} boxe(s),   Price: ${Order.totalLargeBoxesPrice}$ \n
    Number of Medium Boxes: ${Order.mediumUsed} boxe(s),  Price: ${Order.totalMediumBoxesPrice}$ \n
    Number of Small Boxes: ${Order.smallUsed} boxe(s),   Price: ${Order.totalSmallBoxesPrice}$ \n
    Total Order Price: ${Order.totalOrderPriceInital}$ \n ----------------------------------------------------`);
}

const menu = ()=>{ // this is the menu of application
    console.log(`----------------------------------------------------\n A for add order\n B for delete order\n C find an order\n D for checkout\n Q for exit\n----------------------------------------------------`);
}


const searchChoose = ()=>{  //this is the menu of searching process
    console.log('Please choose :','\n','A- Display all Orders with a cost higher than 280$','\n','B- Specific Order','\n','Q- Cancel the search')
}

const indexMenu = ()=>{  // main Menu
      console.log('\n','1- Show the imformations of an order ','\n','2- Automatic orders calculate ','\n'
      ,'3- Print the cost from the lowest to the highest ','\n','4- Print only the cost above 280$','\n'
      ,'5- discount 15% for every cost aboce 400$','\n','6- Manipulate orders','\n','Q- Quit application');
}



export { billOutput, menu, searchChoose, indexMenu }  //exporting this functions outside this file for using them in another file by importing them