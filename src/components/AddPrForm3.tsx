import React from 'react';

interface AddPrForm3props{
    comment: string,
    commentHandler: CommentHandler,
    prLink : string,
    prLinkHandler : PrLinkHandler,
}
  
export const AddPrForm3: React.FC<AddPrForm3props> = ({comment,commentHandler,prLink,prLinkHandler}) => {
    return(
<div>
    <label>Comment : <input type='text' placeholder="Comment" value={comment} onChange={commentHandler}></input></label><br />
    <label>PR Link : <input type='text' placeholder="PR Link" value={prLink} onChange={prLinkHandler}></input></label><br />
</div>
    )
}