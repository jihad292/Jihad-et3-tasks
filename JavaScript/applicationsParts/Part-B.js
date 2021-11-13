import promptSync from 'prompt-sync';
import { Order } from '../components/Order.js';
import { billOutput ,menu, searchChoose} from '../outPuts/Output.js';
import sortBy from 'lodash.sortby';

const partB = ()=>{

const prompt = promptSync();
let iterator = 0;//this iterator help us to create an Order object inside the array of objects giving him the right indice
let OrdersPackage = [];
let quit = false;
let searchQuit = false;

//lets set some functions required here

const addOrder = ()=>{//this function is to add an order. we used an iterator to create an object with te right indice 
    if(iterator===0){//in case there are no object in the array yet
        let bagsOrderNumber = prompt('Please specify the number of bags to order: ')
        OrdersPackage[iterator]= new Order(bagsOrderNumber);
        iterator++;
    }
    else{//in case there are one or multiple objects in the array
        
        let bagsOrderNumber = prompt('Please specify the number of bags to order: ')
        OrdersPackage[iterator]= new Order(bagsOrderNumber);
        iterator++;
    }
    console.log('Your order has been submited');
}

const deleteOrderF = (deleteOrder)=>{  //this is the delete object function
    let OrdersPackageFound = OrdersPackage.some(item=>{  //to check is there an order with this value of bags
        return item.bags ===deleteOrder;
    });
    if(OrdersPackageFound===true){  //in case there are this order
        let deleteOrderArrayResult = OrdersPackage.filter(item=>{
            return item.bags != deleteOrder;
        })
        OrdersPackage = deleteOrderArrayResult;
        console.log('Your order with number of bags ',deleteOrder,' has been successfully deleted!!');
        iterator --;
    }
    else{  // in case there no order with this value of bags
        console.log('There is no Order with a number of bags ',deleteOrder);
    }
}

const searchOrderF = (findOrder)=>{ // this is the search function
    let OrdersPackageFound = OrdersPackage.some(item=>{
        return item.bags ===findOrder;
    });
    if(OrdersPackageFound===true){
        console.log('Your search has been found!!');
        const searchFilter = OrdersPackage.filter(item=>{  // we used filter to get the object(s) only with this number of bags
            return item.bags === findOrder;
        }).map(item=>{ //we used map to create an object only with number of bags 
            return item.bags;
        });
        console.table(searchFilter);  //to display this order
    }
    else{ // in case there no order with this value of bags
        console.log('This order do not exist!!!')
    }
}

const checkoutOrderF = ()=>{  //this is the checkout function
    if(OrdersPackage.length === 0){
        console.log('There are no orders yet!!')
    }
    else{
        // for(let i = 0; i < iterator;i++){  //this is for display all the orders bill
        //     billOutput(OrdersPackage[i]);
        // }

        const sortOrder = sortBy(OrdersPackage,'bags');
        for(let i = 0; i < iterator;i++){  //this is for display all the orders bill sorted
            billOutput(sortOrder[i]);
        }

        let total = 0;  //for calculating the total amount of all orders 
        while(OrdersPackage[0]){ // this is for deleting the orders and calculating the total of all orders
         total += OrdersPackage[0].totalOrderPriceInital;    
         deleteOrderF(OrdersPackage[0].bags);  
        }
        iterator=0;// reset the iterator to get new orders
        console.log('The total of all orders is ',total,'$');  // displaying the total of all orders
    }
}

while(quit === false){ // while quit is false we will always see this menu and manipulates the system
    menu();  // this is the meny of the program who is created in defferent JavaScript file
    let chooseOption = prompt('Please choose an option: ');  // to take the option os the user
    if(chooseOption==='Q'){ // the is the case of quiting the application
        quit = true;
    }
    else{
        //------------------------------------------------
        if(chooseOption === 'A'){  // this is the case of adding an order 
             addOrder();  //  calling the method or function
        }
        //------------------------------------------------
        else if(chooseOption==='B'){ //this is the case to delete an order 
            let deleteOrder = prompt('Please choose the order you want to delete by precising the number of bags of it: ');
             deleteOrderF(deleteOrder); //calling the function and giving it the order bags number as a parameter
        }
        //------------------------------------------------
        else if (chooseOption === 'C'){ // this is the case of searching an order
            searchQuit = false; //initializing the search process status
            while(searchQuit === false){//repeating this process untill we cancel the search form by choosing Q
                searchChoose();
            let searchChooseType = prompt('Please Choose you Option: ');//choosing search all orders or a specific one
            if(searchChooseType === 'A'){//case of searching all 
                if(OrdersPackage[0] != null){
                    let ordersFiltredSorted = sortBy(OrdersPackage,'totalOrderPriceFinal');//preparing the ascending
                    let ordersMaped = ordersFiltredSorted.map(item=>{
                    return [item.bags,item.totalOrderPriceInital];  //mapping the array to only bags and total
                });
                console.log('Showing the Orders ( Bags  total )');  
                console.table(ordersMaped); // showing the all Orders higher than 280 and sorted(Ascending by bags)
                }
                else{
                    console.log('There are no orders yet!')
                }
            }
            else if(searchChooseType === 'B'){//case of searching a specific order
                let findOrder = prompt('Please choose the Order you want to find( By the number of bags ): '); // take the order bags number
                searchOrderF(findOrder);  // calling the finction
            }
            else if (searchChooseType === 'Q'){
                searchQuit = true;
            }
            else{  //case we entered something different else than A or B or C
                console.log('Please choose A or B or Q');
            }
            }
            
     }
       //-------------------------------------------------
       else if (chooseOption === 'D'){ // this is the case for checkout
            checkoutOrderF();  // calling the function
       }
       //-------------------------------------------------
        else{  //this is the case where the choose an invalid option 
            console.log('Please choose A or B or C or D ');
        }
    }
  
}
}

export { partB }












