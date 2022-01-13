import React, { useState, ChangeEvent, FormEvent } from "react";
import Calendar from "react-calendar";
import "../css/Prs.css";
import { AddPrForm1 } from "../components/AddPrForm1";
import { AddPrForm2 } from "../components/AddPrForm2";
import { AddPrForm3 } from "../components/AddPrForm3";
import { AddPrForm4 } from "../components/AddPrForm4";

interface AddPrProps {
  addPR: AddPR;
}

export const AddPr: React.FC<AddPrProps> = ({ addPR }) => {
  const [id, setId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [sE, setSE] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [version, setVersion] = useState<string>("");
  const [prLink, setPrLink] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [comment, setComment] = useState("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [statusBY, setStatusBY] = useState<string>("No");
  const [statusAH, setStatusAH] = useState<string>("No");
  const [statusHT, setStatusHT] = useState<string>("No");
  const [addPrStatus, setAddPrStatus] = useState<boolean>(false);
  const [prButtonAddName, setprButtonAddName] = useState<string>("Add Pr");
  const [error, setError] = useState<string>("");
  const prCreated: PR = {
    Date: date,
    date: "" + date,
    SE: sE,
    Platform: platform,
    Version: version,
    Comment: comment,
    PR: prLink,
    Size: size,
    Difficulty: difficulty,
    Status: status,
    BYStatus: statusBY,
    AHStatus: statusAH,
    HTStatus: statusHT,
    id: id,
  };

  const float2int = (value: number) => {
    return value | 0;
  };

  const setPrId = () => {
    setId(float2int(Number(+Math.random().toFixed(6) * 100000)));
  };

  const handleAddPr = (): void => {
    let test = !addPrStatus;
    setAddPrStatus(test);
    if (test === true) {
      setprButtonAddName("Close Pr");
    } else {
      setprButtonAddName("Add Pr");
      setError("");
    }
  };

  const commentHandler: CommentHandler = (e) => {
    setComment(e.target.value);
  };

  const prLinkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrLink(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPrId();
    if (platform === "") {
      setError("Please Choose a platform for your Pr");
    } else if (version === "") {
      setError("Please Choose a version for your Pr");
    } else if (comment === "") {
      setError("Please Enter a comment for your Pr");
    } else if (prLink === "") {
      setError("Please Enter a Pr Link for your Pr");
    } else if (size === "") {
      setError("Please choose a size for your Pr");
    } else if (difficulty === "") {
      setError("Please choose the difficulty of your Pr");
    } else if (status === "") {
      setError("Please choose the status of your Pr");
    } else if (sE === "") {
      setError("Please choose the SE of your Pr");
    }

    if (
      platform !== "" &&
      version !== "" &&
      comment !== "" &&
      prLink !== "" &&
      size !== "" &&
      difficulty !== "" &&
      status !== "" &&
      sE !== ""
    ) {
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
      setStatusBY("No");
      setStatusAH("No");
      setStatusHT("No");
      addPR(prCreated);
    }
  };

  const reviewBY: ReviewChecker = (state) => {
    if (state === true) {
      setStatusBY("Yes");
    } else {
      setStatusBY("No");
    }
  };

  const reviewAH: ReviewChecker = (state) => {
    if (state === true) {
      setStatusAH("Yes");
    } else {
      setStatusAH("No");
    }
  };

  const reviewHT: ReviewChecker = (state) => {
    if (state === true) {
      setStatusHT("Yes");
    } else {
      setStatusHT("No");
    }
  };

  return (
    <div>
      <button className="add-button" onClick={handleAddPr}>
        {prButtonAddName}
      </button>
      <br />
      {addPrStatus === true && (
        <form>
          {" "}
          {error && <div className="error-message">{error}</div>}
          <hr />
          <div className="calendar-div">
            <label>
              <input type="text" disabled placeholder={date.toString()} />
              <Calendar className="calendar" onChange={setDate} value={date} />
            </label>
            <br />
          </div>
          <div className="add-form">
            <div className="add-section">
              <AddPrForm1
                sE={sE}
                setSE={setSE}
                platform={platform}
                setPlatform={setPlatform}
                version={version}
                setVersion={setVersion}
              />
            </div>

            <div className="add-section">
              <AddPrForm3
                comment={comment}
                commentHandler={commentHandler}
                prLink={prLink}
                prLinkHandler={prLinkHandler}
              />
            </div>

            <div className="add-section">
              <AddPrForm2
                size={size}
                setSize={setSize}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                status={status}
                setStatus={setStatus}
              />
            </div>

            <div className="add-section">
              <AddPrForm4
                reviewBY={reviewBY}
                reviewAH={reviewAH}
                reviewHT={reviewHT}
              />
            </div>

            <div className="add-section-button">
              <button
                className="submit-add-button"
                type="submit"
                onClick={handleSubmit}
              >
                Add Pr
              </button>
              <br />
            </div>
          </div>
          <hr />
        </form>
      )}
    </div>
  );
};
