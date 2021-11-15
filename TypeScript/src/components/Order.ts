type MaybeNumber = number | null;

export class Order{
    bagsNumber:MaybeNumber;
    private readonly coffePrice:MaybeNumber;
    private readonly largeBoxPrice:MaybeNumber;
    private readonly mediumBoxPrice:MaybeNumber;
    private readonly smallBoxPrice:MaybeNumber;
    private readonly large:MaybeNumber;
    private readonly medium:MaybeNumber;
    private readonly small:MaybeNumber;
    private readonly totalPricePercentageDiscount:MaybeNumber;
    private readonly discountCostRange:MaybeNumber;
    largeUsed:MaybeNumber;
    mediumUsed:MaybeNumber;
    smallUsed:MaybeNumber;
    rest:MaybeNumber;
    totalCoffePrice:MaybeNumber;
    totalLargeBoxesPrice:MaybeNumber;
    totalMediumBoxesPrice:MaybeNumber;
    totalSmallBoxesPrice:MaybeNumber;
    totalPriceInitial:MaybeNumber;
    totalPriceFinal:MaybeNumber;

    orginizeBags(): void {
        const number = this.bagsNumber;
        const result = number % this.large;

        //Large Boxes Part
        if(result===0){
            this.largeUsed = number / this.large;
            this.rest = 0;
        }

        else if (result === number){
            this.largeUsed = 0;
            this.rest = number;
        }

        else {
            this.largeUsed = (number - result) / this.large;
            this.rest = result;
        }

        //Medium Boxes Part
        const result1 = this.rest%this.medium;
        if(result1===0){
            this.mediumUsed = this.rest / this.medium;
            this.rest = 0;
        }

        else if (result1 === this.rest){
            this.mediumUsed = 0;
        }

        else{
            this.mediumUsed = (this.rest - result1) / this.medium;
            this.rest= result1;
        }

        //small Boxes part
        if(this.rest === 0){
            this.smallUsed = 0;
        }

        else{
            const result2 = this.rest % this.small;
            if(result2 === 0){
                this.smallUsed = 1;
                this.rest = 0;
            }

            else if (result2 === this.rest){
                this.smallUsed = 1;
                this.rest = result2 - 5;
            }

            else{
                this.smallUsed = 2;
                this.rest = result2 - 5;
            }
        }
  }

    setTotals() : void {
        this.totalCoffePrice = this.coffePrice * this.bagsNumber;
        this.totalLargeBoxesPrice = this.largeBoxPrice * this.largeUsed;
        this.totalMediumBoxesPrice = this.mediumBoxPrice * this.mediumUsed;
        this.totalSmallBoxesPrice = this.smallBoxPrice * this.smallUsed;

        this.totalPriceInitial = this.totalCoffePrice + this.totalLargeBoxesPrice + this.totalMediumBoxesPrice + this.totalSmallBoxesPrice;
     }

     setTotalPriceFinal(): void {
           if(this.totalPriceInitial > this.discountCostRange){
               this.totalPriceFinal = this.totalPriceInitial * (1 - this.totalPricePercentageDiscount);
           } 

           else{
            this.totalPriceFinal = this.totalPriceInitial;
           }
    }

    constructor( orderBagsNumber : number){
        this.bagsNumber = orderBagsNumber;
        this.coffePrice = 5.5;
        this.largeBoxPrice = 1.8;
        this.mediumBoxPrice = 1;
        this.smallBoxPrice = 0.6;
        this.large = 20;
        this.medium = 10;
        this.small = 5;
        this.totalPricePercentageDiscount = 0.15;
        this.discountCostRange = 400;

        this.orginizeBags();
        this.setTotals();
        this.setTotalPriceFinal();
    }
}