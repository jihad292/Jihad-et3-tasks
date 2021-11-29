import React from 'react';
import  { sizearray,difficultyArray,statusArray} from './PrPropertiesArrays';
import { PrProperty } from './PropertyOfItem';

interface AddPrForm2Props{
    size: string,
    setSize: React.Dispatch<React.SetStateAction<string>>,
    difficulty : string,
    setDifficulty : React.Dispatch<React.SetStateAction<string>>,
    status: string,
    setStatus : React.Dispatch<React.SetStateAction<string>>
}

export const AddPrForm2 : React.FC<AddPrForm2Props> = ({size,setSize,difficulty,setDifficulty,status,setStatus}) => {
    return(
        <div>
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
    )
}
