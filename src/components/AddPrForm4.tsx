import React from "react";

interface AddPrForm4Props {
  reviewBY: ReviewChecker;
  reviewAH: ReviewChecker;
  reviewHT: ReviewChecker;
}

export const AddPrForm4: React.FC<AddPrForm4Props> = ({
  reviewBY,
  reviewAH,
  reviewHT,
}) => {
  return (
    <div>
      <label>
        Review By BY :{" "}
        <input
          type="checkbox"
          onChange={(e) => reviewBY(e.target.checked)}
        ></input>
      </label>
      <br />
      <label>
        Review By AH :{" "}
        <input
          type="checkbox"
          onChange={(e) => reviewAH(e.target.checked)}
        ></input>
      </label>
      <br />
      <label>
        Review By HT :{" "}
        <input
          type="checkbox"
          onChange={(e) => reviewHT(e.target.checked)}
        ></input>
      </label>
      <br />
    </div>
  );
};
