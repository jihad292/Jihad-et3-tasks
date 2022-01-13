import React from "react";

interface UpdatePrForm2Props {
  comment: string;
  handlerComment: CommentHandler;
  link: string;
  handlerLink: PrLinkHandler;
}

export const UpdatePrForm2: React.FC<UpdatePrForm2Props> = ({
  comment,
  handlerComment,
  link,
  handlerLink,
}) => {
  return (
    <div>
      <label>
        Comment :{" "}
        <input type="text" value={comment} onChange={handlerComment} />
      </label>
      <br />
      <label>
        PR Link : <input type="text" value={link} onChange={handlerLink} />
      </label>
      <br />
    </div>
  );
};
