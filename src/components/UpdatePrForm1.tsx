import React from 'react';
import  { sEArray, platFormArray,releaseVersionArray} from '../components/PrPropertiesArrays';
import { PrProperty } from '../components/PropertyOfItem';

interface UpdatePrForm1Props{
    sE: string,
    setSE : React.Dispatch<React.SetStateAction<string>>,
    platform : string,
    setPlatform : React.Dispatch<React.SetStateAction<string>>,
    version : string,
    setVersion : React.Dispatch<React.SetStateAction<string>>,
}

export  const UpdatePrForm1: React.FC<UpdatePrForm1Props> = ({sE,setSE,platform,setPlatform,version,setVersion}) => {
    return (
        <div>
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
    )
}
