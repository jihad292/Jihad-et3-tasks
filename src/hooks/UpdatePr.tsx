import React,{ useState, ChangeEvent } from 'react';
import  { sEArray, platFormArray,releaseVersionArray ,sizearray,difficultyArray,statusArray} from '../components/PrPropertiesArrays';
import { PrProperty } from '../components/PropertyOfItem';
import '../css/Prs.css';


interface UpdatePrProps{
    pr:PR,
    handleUpdate : HandleUpdate,
}

export const Iddd : number = 0; 

export const UpdatePr : React.FC<UpdatePrProps> = ({pr})=> {

    const reviewBooleanReturner  = (status : string) : boolean=>{
        if (status === "Yes"){
            return true;
        }
        else if (status === "No"){
            return false;
        }
        else{
            return false;
        }
    }

    const [sE,setSE] = useState<string>(pr.SE);
    const [platform,setPlatform] = useState<string>(pr.Platform);
    const [version,setVersion] = useState<string>(pr.Version);
    const [comment,setComment] = useState<string>(pr.Comment);
    const [link,setLink] = useState<string>(pr.PR);
    const [size,setSize] = useState<string>(pr.Size);
    const [difficulty,setDifficulty] = useState<string>(pr.Difficulty);
    const [status,setStatus] = useState<string>(pr.Status);
    const [bYStatus,setBYStatus] = useState<string>(pr.BYStatus);
    const [aHStatus,setAHStatus] = useState<string>(pr.AHStatus);
    const [hTStatus,setHTStatus] = useState<string>(pr.HTStatus);
    const [bYReview,setBYReview] = useState<boolean>(reviewBooleanReturner(bYStatus));
    const [aHReview,setAHReview] = useState<boolean>(reviewBooleanReturner(aHStatus));
    const [hTReview,setHTReview] = useState<boolean>(reviewBooleanReturner(hTStatus));

    const handlerComment = (e: ChangeEvent<HTMLInputElement>)=>{
        setComment(e.target.value);
        pr.Comment = comment;
    }

    const handlerLink = (e: ChangeEvent<HTMLInputElement>)=>{
        setLink(e.target.value);
    }

    const submitUpdate : SubmitUpdate = selectedPr =>{
        if(sE !==""){ selectedPr.SE = sE;}
        if(platform !==""){ selectedPr.Platform = platform;}
        if(version !==""){ selectedPr.Version = version;}
        if(comment !==""){ selectedPr.Comment = comment;}
        if(link !==""){ selectedPr.PR = link;}
        if(size !==""){ selectedPr.Size = size;}
        if(difficulty !==""){ selectedPr.Difficulty = difficulty;}
        if(status !==""){ selectedPr.Status = status;}
        
        if(bYReview === true){
            selectedPr.BYStatus = "Yes";
        }
        if(bYReview === false){
            selectedPr.BYStatus = "No";
        }

        if(aHReview === true){
            selectedPr.AHStatus = "Yes";
        }
        if(aHReview === false){
            selectedPr.AHStatus = "No";
        }

        if(hTReview === true){
            selectedPr.HTStatus = "Yes";
        }
        if(hTReview === false){
            selectedPr.HTStatus = "No";
        }
    }

    return (
        <div className="update-main-div"> 
           <div className="update-section">
            {submitUpdate(pr) }
           <label>SE : <select value={sE} onChange={e=>setSE(e.target.value)}>{sEArray.map(SE=>{
               return <PrProperty property={SE} />
           })}</select></label><br />

           <label>Platform : <select value={platform} onChange={e=>setPlatform(e.target.value)}>{platFormArray.map(Platform=>{
               return <PrProperty property={Platform} />
           })}</select></label><br />

            <label>Version : <select value={version} onChange={e=>setVersion(e.target.value)} >{releaseVersionArray.map(Version=>{
               return <PrProperty property={Version} />
           })}</select></label><br />

           </div>
 
           <div  className="update-section">

           <label>Comment : <input type='text' value={comment} onChange={handlerComment} /></label><br />

           <label>PR Link : <input type='text' value={link} onChange={handlerLink}  /></label><br />
 
           </div>

           <div className="update-section">

           <label>Size : <select value={size} onChange={e=>setSize(e.target.value)}>{sizearray.map(Size=>{
               return <PrProperty property={Size} />
           })}</select></label><br />

           <label>Difficulty : <select value={difficulty} onChange={e=>setDifficulty(e.target.value)} >{difficultyArray.map(Difficulty=>{
               return <PrProperty property={Difficulty} />
           })}</select></label><br />

           <label>Status : <select value={status} onChange={e=>setStatus(e.target.value)} >{statusArray.map(Status=>{
               return <PrProperty property={Status} />
           })}</select></label><br />

           </div>

           <div className="update-section">   
                    
                <label>Review By BY : <input type='checkbox' checked={bYReview} onChange={(e)=>setBYReview(e.target.checked)}></input></label><br />
                <label>Review By AH : <input type='checkbox' checked={aHReview} onChange={(e)=>setAHReview(e.target.checked)}></input></label><br />
                <label>Review By HT : <input type='checkbox' checked={hTReview} onChange={(e)=>setHTReview(e.target.checked)}></input></label><br />
               
           </div>


        </div>
    )
}