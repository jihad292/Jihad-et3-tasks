import React,{ useState, ChangeEvent } from 'react';
import '../css/Prs.css';
import { UpdatePrForm1 } from '../components/UpdatePrForm1';
import { UpdatePrForm2 } from '../components/UpdatePrForm2';
import { UpdatePrForm3 } from '../components/UpdatePrForm3';
import { UpdatePrForm4 } from '../components/UpdatePrForm4';

interface UpdatePrProps{
    pr:PR,
    handleUpdate : HandleUpdate,
}

export const UpdatePr : React.FC<UpdatePrProps> = ({pr})=> {

    const reviewBooleanReturner  = (status : string) : boolean=>{
        if (status === "Yes"){return true;}
        else if (status === "No"){ return false;}
        else{ return false; }
    }

    const [sE,setSE] = useState<string>(pr.SE);
    const [platform,setPlatform] = useState<string>(pr.Platform);
    const [version,setVersion] = useState<string>(pr.Version);
    const [comment,setComment] = useState<string>(pr.Comment);
    const [link,setLink] = useState<string>(pr.PR);
    const [size,setSize] = useState<string>(pr.Size);
    const [difficulty,setDifficulty] = useState<string>(pr.Difficulty);
    const [status,setStatus] = useState<string>(pr.Status);
    const bYStatus : string = pr.BYStatus;
    const aHStatus : string = pr.AHStatus;
    const hTStatus : string = pr.HTStatus;
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
        
        if(bYReview === true){ selectedPr.BYStatus = "Yes"; }
        if(bYReview === false){ selectedPr.BYStatus = "No"; }
        if(aHReview === true){ selectedPr.AHStatus = "Yes"; }
        if(aHReview === false){ selectedPr.AHStatus = "No"; }
        if(hTReview === true){ selectedPr.HTStatus = "Yes"; }
        if(hTReview === false){ selectedPr.HTStatus = "No"; }
    }

    return (
        <div className="update-main-div"> 
         {submitUpdate(pr) }

           <div className="update-section">
               <UpdatePrForm1 sE={sE} setSE={setSE} platform={platform} setPlatform={setPlatform} version={version} setVersion={setVersion} />
           </div>
 
           <div  className="update-section">
                <UpdatePrForm2  comment={comment} handlerComment={handlerComment} link={link} handlerLink={handlerLink} />
           </div>

           <div className="update-section">
                <UpdatePrForm3  size={size} setSize={setSize} difficulty={difficulty} setDifficulty={setDifficulty} status={status} setStatus={setStatus} />
           </div>

           <div className="update-section">   
                <UpdatePrForm4 bYReview={bYReview} aHReview={aHReview} hTReview={hTReview} setBYReview={setBYReview} setAHReview={setAHReview} setHTReview={setHTReview} />
           </div>
        </div>
    )
}