function Order(number){// Order Constructor 
    
    this.bags = number;//the total number of bags of an order

    //these are constant properties during the creation of an object
    this.coffeBagPrice= 5.5; //Price of Coffe Bag per Unit in case we decided to change it
    this.largeBoxPrice= 1.8; //Price of the Large Box in case we decided to change it
    this.mediumBoxPrice= 1;  //Price of the Medium Box in case we decided to change it
    this.smallBoxPrice= 0.6; //Price of the small Box in case we decided to change it  
    const large = 20;//The capacity of large Box 
    const medium = 10;//The capacity of medium Box 
    const small = 5;//The capacity of small Box 

    //---------------------------------------------------------------------------------------
    //This section is responsible for distributing the bags on the boxes with different sizes stating from the Large ones
    //large box part
    let result  = number%large;
    if(result === 0){//we can deduce that the number of bags can be devided by 20. so we can put all the bags only in Large Boxes where they going to be full
        this.largeUsed = number/large;//number of Large Boxes Used
        this.rest = 0;//this is the rest of bags not packaged yet (packaged means not in any box).offcoarse here the number is 0 because we packaged all the bags 
    }

        else if(result === number){//this is the case the totalnumber of bags is under the capacity of one Large Box
            this.largeUsed = 0;//so we can't use any Large Box
            this.rest = number;//so all the bags for now are not packaged
    }

            else{//this is the case where the number of bags can be packaged in one or several Large Boxes but it will remain some bags not packaged because they are < 20
                this.largeUsed = (number - result)/large;//the maximum number of Large Boxes that we can use(full Large Boxes) 
                this.rest = result;//the number of bags not packaged in the Large Boxes (because they are < 20)
            }

    //medium box part
    let result1 = this.rest % medium;//here we will start our distribution from the bags not packaged on Large Boxes part
    if(result1===0){//we can deduce that the number of bags can be devided by 10. so we can put all the bags only in Medium Boxes where they going to be full
        this.mediumUsed = this.rest/medium;//number of medium Boxes used
        this.rest =0;//this is the rest of bags not packaged yet (packaged means not in any box).offcoarse here the number is 0 because we packaged all the bags 
    }
        else if(result1===this.rest){//this is the case where the number of bags not packaged in Large Boxes, can't be packaged in medium Box because they are < 10
            this.mediumUsed = 0;//number of medium Boxes used
        }

            else{//this is the case where the bags can be packaged in medium boxes but some of them(<10) can't be 
                this.mediumUsed = (this.rest - result1)/medium;//number of medium Boxes used
                this.rest = result1;//the number of bags not packaged in medium Boxes 
            }

    //small box part
    //in this part we are going to use maximum 2 small Boxes because if we use 3 so we can use a Medium Box
    if(this.rest === 0){//it is the case if there not bags left from the packaging ( Large the Medium)
        this.smallUsed = 0;//number of smal Boxes used who is 0
    }
        else{// this is the case where there are bags left from the packaging ( Large the Medium)

    let result2 = this.rest%small;
    if(result2===0){//the case where only 5 bags are not packaged yet.
        this.smallUsed = 1;//we will use only one 
        this.rest = 0;//no bags left at all
    }
        else if(result2 ===this.rest){//thisthe case where the bags not packeged is under 5 
            this.smallUsed =1;// so we will use only one small Box who will not full
            this.rest = result2-5;//this is not necessary but i turned rest to the number of places not used in the small Box because we can calculate from it the total Order Bill
        }

            else{//this is the case where the number of bags left is between 5 and 10 (5 and 10 not included)
                this.smallUsed = 2;//sow we will use two small boxes. one is full and one is not full
                Order.setRest = result2-5;//this is not necessary but i turned rest to the number of places not used in the second small Box because we can calculate from it the total Order Bill
            }
        }
    //---------------------------------------------------------------------------------------
    //this section is for Totals of the bill 

    this.totalCoffePrice=  this.bags * this.coffeBagPrice; //total price of the coffe only
    this.totalLargeBoxesPrice= this.largeBoxPrice * this.largeUsed;  //total Price of large boxes used
    this.totalMediumBoxesPrice= this.mediumBoxPrice * this.mediumUsed; //total Price of medium boxes used
    this.totalSmallBoxesPrice= this.smallBoxPrice * this.smallUsed;  //total Price of small boxes used
    
    //The initial total Price before discount if the value greater than the discountCostRange
    this.totalOrderPriceInital= this.totalCoffePrice + this.totalLargeBoxesPrice +this.totalMediumBoxesPrice +this.totalSmallBoxesPrice;
    
    this.totalOrderPricePercentageDiscount=0.15; //the discount value in case we decided to change it 
    this.discountCostRange=400;//total final Order Price decision Maker, maybe we will decide to change the cost discount range (400$)
    
    //final decision of the total Order price (with discount or not )
        if (this.totalOrderPriceInital>this.discountCostRange){//if the cost is greater than 400
            this.totalOrderPriceFinal = this.totalOrderPriceInital * (1-this.totalOrderPricePercentageDiscount);
        } 
            else{//if the cost is equal or under 400
                this.totalOrderPriceFinal = this.totalOrderPriceInital;
            }
}

export { Order }