import React from "react";
import  { sizearray,difficultyArray,statusArray} from '../components/PrPropertiesArrays';
import { PrProperty } from '../components/PropertyOfItem';

interface UpdatePrForm3Props{
    size: string,
    setSize: React.Dispatch<React.SetStateAction<string>>,
    difficulty: string,
    setDifficulty: React.Dispatch<React.SetStateAction<string>>,
    status : string,
    setStatus : React.Dispatch<React.SetStateAction<string>>
}

export const UpdatePrForm3 : React.FC<UpdatePrForm3Props> = ({size,setSize,difficulty,setDifficulty,status,setStatus}) => {
    return(
        <div>
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

    )
}
