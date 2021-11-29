type PR = {
    Date: Date; 
    id?:number,
    date:string,
    SE:string,
    Platform: string,
    Version: string,
    Comment: string,
    PR: string,
    Size : string,
    Difficulty : string,
    Status : string,
    BYStatus: string,
    AHStatus: string,
    HTStatus : string
}

type AddPR = (pr:PR) =>void;

type  DeletePr= (selectedPr : PR)=>void;

type SubmitUpdate = (seletedPr: PR)=> void;

type HandleUpdate = (selectedPr : PR) => void;

type HandleAddPr = () => void;

type CommentHandler = (value : ChangeEvent<HTMLInputElement>) => void;

type PrLinkHandler = (value : ChangeEvent<HTMLInputElement>) => void;

type HandleSubmit = (value : FormEvent<HTMLButtonElement>) => void;

type ReviewChecker = (state : boolean) => void;