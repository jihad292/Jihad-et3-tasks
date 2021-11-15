import { menu } from '../output/Output';
import PromptSync from 'prompt-sync';
import { addOrder,  deleteOrder, findOrder, chashoutOrders } from './Part-B-Functions';
const prompt = PromptSync();

export const partB = () : void =>{
    let quit = false;
    let chooseNumber  = 0;
    while(quit === false){
        menu();
        let chooseOption = prompt('Please choose an option: ');
        if (chooseOption === 'Q'){
            quit = true;
        }
    
        else if(chooseOption === 'A'){
             chooseNumber = prompt('Please enter the number of bags: ');
            addOrder(Number(chooseNumber));
        }
    
        else if(chooseOption === 'B'){
             chooseNumber = prompt('Please enter ther number of bags: ');
             deleteOrder(Number(chooseNumber));
        }
    
        else if (chooseOption === 'C'){
            chooseNumber = prompt('Please enter ther number of bags: ');
            findOrder(Number(chooseNumber));
        }
    
        else if (chooseOption === 'D'){ 
            chashoutOrders();
        }
        else{
            console.log('Please choose a valid option!!')
        }
    }
}
