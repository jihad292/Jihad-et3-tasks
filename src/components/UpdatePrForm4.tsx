import React from 'react';

interface UpdatePrForm4Props{
    bYReview : boolean,
    aHReview : boolean,
    hTReview : boolean,
    setBYReview : React.Dispatch<React.SetStateAction<boolean>>,
    setAHReview : React.Dispatch<React.SetStateAction<boolean>>,
    setHTReview : React.Dispatch<React.SetStateAction<boolean>>,
}

export const UpdatePrForm4 : React.FC<UpdatePrForm4Props> = ({bYReview,aHReview,hTReview,setBYReview,setAHReview,setHTReview}) => {
    return(
        <div>
            <label>Review By BY : <input type='checkbox' checked={bYReview} onChange={(e)=>setBYReview(e.target.checked)}></input></label><br />
            <label>Review By AH : <input type='checkbox' checked={aHReview} onChange={(e)=>setAHReview(e.target.checked)}></input></label><br />
            <label>Review By HT : <input type='checkbox' checked={hTReview} onChange={(e)=>setHTReview(e.target.checked)}></input></label><br />
               
        </div>
    )
}
