import { action, makeObservable, observable } from "mobx";

interface prItem{
    id:number;
    text:string,

}

export class prsStoreImpl {
    prs: prItem[] = [];
    comment: string ='';
    link : string ='';
    se : string = '';
    setLink = (value : string) => {this.link = value};
    setComment = (value : string)=>{this.comment = value};
    setSE = (value : string)=>{this.se = value};
    constructor(){
        makeObservable(this,{
            prs:observable,
            addPr:action,
            setComment:action,
            setLink:action,
            setSE:action,  
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