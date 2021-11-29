// import React from 'react';
// import Calendar from 'react-calendar';
// import  { sEArray, platFormArray,releaseVersionArray ,sizearray,difficultyArray,statusArray} from '../components/PrPropertiesArrays';
// import { PrProperty } from '../components/PropertyOfItem';

// interface AddPrForm{
//     handleAddPr : HandleAddPr, 
//     prButtonAddName : string,
//     addPrStatus : boolean,
//     error : string,
//     date: string,
//     setDate : React.Dispatch<React.SetStateAction<string>>,
//     sE : string,
//     setSE : React.Dispatch<React.SetStateAction<string>>,
//     platform : string,
//     setPlatform : React.Dispatch<React.SetStateAction<string>>,
//     version : string,
//     setVersion : React.Dispatch<React.SetStateAction<string>>,
//     comment : string,
//     commentHandler : CommentHandler,
//     prLink : string,
//     prLinkHandler : PrLinkHandler,
//     size : string,
//     setSize : void,
//     difficulty : string,  
//     setDifficulty : void,
//     status : string,
//     setStatus : void,
//     reviewBY : ReviewBY,
//     reviewAH : ReviewAH,
//     reviewHT : ReviewHT,
//     handleSubmit : HandleSubmit,

// }

// export const AddPrForm: React.FC<AddPrForm> = ({handleAddPr,prButtonAddName,addPrStatus,error,date,setDate,sE,setSE,platform,
//                                         setPlatform,version,setVersion,comment,commentHandler,prLink,prLinkHandler,
//                                         size,setSize,difficulty,setDifficulty,status,setStatus,reviewBY,reviewAH,
//                                         reviewHT,handleSubmit}) => {
//     return (
//         <div>
//             <button className="add-button" onClick={handleAddPr} >{prButtonAddName}</button><br />
//             { addPrStatus === true && 
//                 <form >
//                     {error && <div className="error-message">{error}</div>}
//                 <hr />

//                 <div className="calendar-div">

//                  <label>
//                     <input type='text' disabled placeholder={date.toString()} /><Calendar  className="calendar" onChange={()=>setDate}  />
//                 </label><br/> 

//                  </div> 

//                 <div className="add-form" >

//                 <div className="add-section">

//                 <label>SE : <select value={sE} onChange={e=>setSE(e.target.value)} >
//                      {sEArray.map(SE=>{
//                          return <PrProperty property={SE} />
//                      })}
//                  </select></label><br />

//                  <label>Platform : <select value={platform} onChange={e=>setPlatform(e.target.value)} >
//                      {platFormArray.map(platform=>{
//                          return <PrProperty  property={platform} />
//                      })}
//                  </select></label><br /> 
    
//                 <label>Release Version : <select value={version} onChange={e=>setVersion(e.target.value)} >
//                      { releaseVersionArray.map(version=>{
//                         return <PrProperty key={version} property = {version} />
//                      }) }
//                  </select>
//                     </label><br />

//                     </div>    
    
//                 <div className="add-section">

//                 <label>Comment : <input type='text' placeholder="Comment" value={comment} onChange={e=>commentHandler}></input></label><br />
//                 <label>PR Link : <input type='text' placeholder="PR Link" value={prLink} onChange={e=>prLinkHandler(e.target.value)}></input></label><br />
    
//                 </div>

//                 <div className="add-section">

//                 <label>Size : <select value={size} onChange={()=>setSize} >
//                      {sizearray.map(size=>{
//                          return <PrProperty  property={size}  />
//                      })}
//                  </select>
//                     </label><br />
    
//                     <label>Difficulty : <select value={difficulty} onChange={()=>setDifficulty} >
//                      {difficultyArray.map(difficulty=>{
//                          return <PrProperty property={difficulty}  />
//                      })}
//                  </select>
//                     </label><br />
    
//                     <label>Status : <select value={status} onChange={()=>setStatus} >
//                      {statusArray.map(status=>{
//                          return <PrProperty  property={status} />
//                      })}
//                  </select>
//                     </label><br />

//                     </div>   
                    
//                 <div className="add-section">   

//                 <label>Review By BY : <input type='checkbox' onChange={(e)=>reviewBY(e.target.checked)}></input></label><br />
//                 <label>Review By AH : <input type='checkbox' onChange={(e)=>reviewAH(e.target.checked)}></input></label><br />
//                 <label>Review By HT : <input type='checkbox' onChange={(e)=>reviewHT(e.target.checked)}></input></label><br />
               
//                 </div>
                     
//                 <div className="add-section-button">
//                 <button className="submit-add-button" type='submit' onClick={handleSubmit} >Add Pr</button><br />
//                 </div>     

//                 </div>
//               <hr />
//             </form>
//             }
//         </div>
//     )
// }

// export default AddPrForm


import React from 'react';
import  { sEArray, platFormArray,releaseVersionArray } from './PrPropertiesArrays';
import { PrProperty } from './PropertyOfItem';

interface AddPrFormProps{
    sE: string,
    setSE : React.Dispatch<React.SetStateAction<string>>;
    platform : string,
    setPlatform : React.Dispatch<React.SetStateAction<string>>;
    version : string,
    setVersion : React.Dispatch<React.SetStateAction<string>>;
}

export const AddPrForm1 : React.FC<AddPrFormProps> = ({sE,setSE,platform,setPlatform,version,setVersion}) => {
    return(
        <div>
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
    )
}
