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
