import { action, makeObservable, observable } from "mobx";

interface prItem{
    id:number;
    text:string,

}

export class prsStoreImpl {
    prs: prItem[] = [];

    constructor(){
        makeObservable(this,{
            prs:observable,
            addPr:action
        })
    }

    float2int (value : number) {
        return value | 0;
    }
    
    addPr(text : string){
        const pr : prItem = {
            id : this.float2int(Number((+Math.random().toFixed(4))*10000)) ,
            text
        }
        this.prs.push(pr);
    }
}

export const  PrsStore = new prsStoreImpl();