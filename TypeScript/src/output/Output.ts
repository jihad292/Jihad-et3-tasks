import { Order } from '../components/Order'

const billOutput=(order : Order) : void =>{ 
    console.log(`----------------------------------------------------\n Number of bags ordered: ${order.bagsNumber} \n Total Price of coffe: ${order.totalCoffePrice}$ \n 
    Number of Large Boxes: ${order.largeUsed} boxe(s),   Price: ${order.totalLargeBoxesPrice}$ \n
    Number of Medium Boxes: ${order.mediumUsed} boxe(s),  Price: ${order.totalMediumBoxesPrice}$ \n
    Number of Small Boxes: ${order.smallUsed} boxe(s),   Price: ${order.totalSmallBoxesPrice}$ \n
    Total Order Price: ${order.totalPriceInitial}$ \n ----------------------------------------------------`);
}

const menu = () : void =>{ 
    console.log(`----------------------------------------------------\n A for add order\n B for delete order\n C find an order\n D for checkout\n Q for exit\n----------------------------------------------------`);
}


const searchChoose = () : void=>{  
    console.log('Please choose :','\n','A- Display all Orders with a cost higher than 280$','\n','B- Specific Order','\n','Q- Cancel the search')
}
  
const indexMenu = () : void =>{  
      console.log('\n','1- Show the imformations of an order ','\n','2- Automatic orders calculate ','\n'
      ,'3- Print the cost from the lowest to the highest ','\n','4- Print only the cost above 280$','\n'
      ,'5- discount 15% for every cost aboce 400$','\n','6- Manipulate orders','\n','Q- Quit application');
}


const function1PartAText = (number : number, bagsNumber : number) : string =>{
    return number + '- Order with number of bags : '+ bagsNumber + '\n'
} 
const function1PartA = () : void =>{
    console.log('Please from 1 to 8: ','\n',function1PartAText(1,52),function1PartAText(2,208),function1PartAText(3,31),function1PartAText(4,66),
    function1PartAText(5,110),function1PartAText(6,5),function1PartAText(7,88),function1PartAText(8,300),'Q-For Cancel','\n');
}

export { billOutput, menu, searchChoose, indexMenu, function1PartA }
