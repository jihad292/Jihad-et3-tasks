import React,{useState , ChangeEvent, FormEvent} from 'react';
import Calendar from 'react-calendar';
import '../css/Prs.css';
import  { sEArray, platFormArray,releaseVersionArray ,sizearray,difficultyArray,statusArray} from '../components/PrPropertiesArrays';
import { PrProperty } from '../components/PropertyOfItem';

interface AddPrProps{
    addPR : AddPR
}


export const AddPr : React.FC<AddPrProps> = ({addPR})=> {
    const [date,setDate] = useState<Date>(new Date());
    const [sE,setSE] = useState<string>("");
    const [platform,setPlatform] = useState<string>("");
    const [version,setVersion] = useState<string>("");
    const [prLink,setPrLink] = useState<string>("");
    const [size,setSize] = useState<string>(""); 
    const [comment,setComment] = useState("")
    const [difficulty,setDifficulty] = useState<string>("");
    const [status,setStatus] = useState<string>("");
    const [statusBY,setStatusBY] = useState<string>("No");
    const [statusAH,setStatusAH] = useState<string>("No");
    const [statusHT,setStatusHT] = useState<string>("No");
    const [addPrStatus,setAddPrStatus] = useState<boolean>(false);
    const [prButtonAddName,setprButtonAddName] = useState<string>("Add Pr");
    const [error,setError] = useState<string>("");
    const prCreated : PR = {
        Date:date,
        date:""+date, 
        SE:sE,
        Platform: platform,
        Version: version,
        Comment: comment,
        PR: prLink,
        Size : size,
        Difficulty : difficulty,
        Status : status,
        BYStatus: statusBY,
        AHStatus: statusAH,
        HTStatus : statusHT
    }

    const handleAddPr= () : void=>{
        let test = !addPrStatus;
        setAddPrStatus(test);
        if(test === true){
            setprButtonAddName("Close Pr");
        }
        else{
            setprButtonAddName("Add Pr");
            setError("");
        }
    }

    const commentHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setComment(e.target.value);
    }

    const prLinkHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setPrLink(e.target.value);
    }

    const  handleSubmit = (e : FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        if(platform === ""){
            setError("Please Choose a platform for your Pr");
        }
        else if(version === ""){
            setError("Please Choose a version for your Pr");
        }
        else if (comment === ""){
            setError("Please Enter a comment for your Pr");
        }
        else if (prLink === ""){
            setError("Please Enter a Pr Link for your Pr");
        }
        else if (size === ""){
            setError("Please choose a size for your Pr");
        }
        else if (difficulty === ""){
            setError("Please choose the difficulty of your Pr");
        }
        else if (status === ""){
            setError("Please choose the status of your Pr");
        }

        else if (sE === ""){
            setError("Please choose the SE of your Pr");
        }

        if (platform !== "" && version!== ""  && comment !== "" && prLink !== "" && size !== "" && difficulty !== "" && status !== "" && sE!== ""){
            setError("");
            setAddPrStatus(false);
            setprButtonAddName("Add Pr");
            setSE("");
            setPlatform("");
            setVersion("");
            setPrLink("");
            setSize("");
            setComment("");
            setDifficulty("");
            setStatus("");
            setSE("");
            addPR(prCreated);

        }

    }

    const reviewBY = (state : boolean)  =>{
        if (state === true){
            setStatusBY("Yes");
        }
        else{
            setStatusBY("No");
        }   
    }

    const reviewAH = (state : boolean)  =>{
        if (state === true){
            setStatusAH("Yes");
        }
        else{
            setStatusAH("No");
        }   
    }

    const reviewHT = (state : boolean)  =>{
        if (state === true){
            setStatusHT("Yes");
        }
        else{
            setStatusHT("No");
        }   
    }

    const setVersionn = (e : ChangeEvent<HTMLInputElement>)=>{
        setVersion(e.target.value);
    }

    return (
        <div>
            <button className="add-button" onClick={handleAddPr} >{prButtonAddName}</button><br />
            { addPrStatus === true && 
                <form >
                    {error && <div className="error-message">{error}</div>}
                <hr />

                <div className="calendar-div">

                 <label>
                    <input type='text' disabled placeholder={date.toString()} /><Calendar  className="calendar" onChange={setDate} value={date} />
                </label><br/> 

                 </div> 

                <div className="add-form" >

                <div className="add-section">

                <label>SE : <select value={sE} onChange={e=>setSE(e.target.value)} >
                     {sEArray.map(SE=>{
                         return <PrProperty property={SE} />
                     })}
                 </select></label><br />

                 <label>Platform : <select value={platform} onChange={e=>setPlatform(e.target.value)} >
                     {platFormArray.map(platform=>{
                         return <PrProperty  property={platform} />
                     })}
                 </select></label><br /> 
    
                <label>Release Version : <select value={version} onChange={e=>setVersion(e.target.value)} >
                     { releaseVersionArray.map(version=>{
                        return <PrProperty key={version} property = {version} />
                     }) }
                 </select>
                    </label><br />

                    </div>    
    
                <div className="add-section">

                <label>Comment : <input type='text' placeholder="Comment" value={comment} onChange={commentHandler}></input></label><br />
                <label>PR Link : <input type='text' placeholder="PR Link" value={prLink} onChange={prLinkHandler}></input></label><br />
    
                </div>

                <div className="add-section">

                <label>Size : <select value={size} onChange={e=>setSize(e.target.value)} >
                     {sizearray.map(size=>{
                         return <PrProperty  property={size}  />
                     })}
                 </select>
                    </label><br />
    
                    <label>Difficulty : <select value={difficulty} onChange={e=>setDifficulty(e.target.value)} >
                     {difficultyArray.map(difficulty=>{
                         return <PrProperty property={difficulty}  />
                     })}
                 </select>
                    </label><br />
    
                    <label>Status : <select value={status} onChange={e=>setStatus(e.target.value)} >
                     {statusArray.map(status=>{
                         return <PrProperty  property={status} />
                     })}
                 </select>
                    </label><br />

                    </div>   
                    
                <div className="add-section">   

                <label>Review By BY : <input type='checkbox' onChange={(e)=>reviewBY(e.target.checked)}></input></label><br />
                <label>Review By AH : <input type='checkbox' onChange={(e)=>reviewAH(e.target.checked)}></input></label><br />
                <label>Review By HT : <input type='checkbox' onChange={(e)=>reviewHT(e.target.checked)}></input></label><br />
               
                </div>
                     
                <div className="add-section-button">
                <button className="submit-add-button" type='submit' onClick={handleSubmit} >Add Pr</button><br />
                </div>     

                </div>
              <hr />
            </form>
            }
        </div>
        
        


    )
}