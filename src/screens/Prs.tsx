import React, { ChangeEvent, useState } from "react";
import { Navbar } from "../components/Navbar";
import "../css/Prs.css";
import { PrItemsList } from "../components/PrItemsList";
import sortBy from "lodash.sortby";
import { AddPr } from "../hooks/AddPr";
import { UpdatePr } from "../hooks/UpdatePr";
import { BiCaretDownCircle } from "react-icons/bi";

export const Prs: React.FC = () => {
  React.useEffect(() => {
    fetch("http://localhost:3333/issues")
      .then((response) => response.json())
      .then((json) => {
        setPrs([]);
        let prsFetched: PR[] = [];
        for (let i = 0; i < json.length; i++) {
          let prFetched: PR = {
            Date: new Date(),
            date: "",
            SE: "",
            Platform: "",
            Version: "",
            Comment: "",
            PR: "",
            Size: "",
            Difficulty: "",
            Status: "",
            BYStatus: "",
            AHStatus: "",
            HTStatus: "",
            id: 0,
          };
          let ByStatus: string = "No";
          let AhStatus: string = "No";
          let HtStatus: string = "No";
          if (json[i].by_state === 1) {
            ByStatus = "Yes";
          }
          if (json[i].ah_state === 1) {
            AhStatus = "Yes";
          }
          if (json[i].ht_state === 1) {
            HtStatus = "Yes";
          }
          prFetched.id = json[i].issue_id;
          prFetched.Comment = json[i].comment;
          prFetched.PR = json[i].link;
          prFetched.SE = json[i].se;
          prFetched.Platform = json[i].platform;
          prFetched.Size = json[i].size;
          prFetched.Difficulty = json[i].difficulty;
          prFetched.Status = json[i].status;
          prFetched.Version = json[i].version;
          prFetched.BYStatus = ByStatus;
          prFetched.AHStatus = AhStatus;
          prFetched.HTStatus = HtStatus;
          prFetched.date = json[i].date;
          prFetched.Date = json[i].date;
          prsFetched.push(prFetched);
        }
        setPrs(prsFetched);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [initialPrs, setInitialPrs] = useState<Array<PR>>([]);
  const [prToBeUpdated, setPrToBeUpdated] = useState<PR>({
    Date: new Date(),
    date: "",
    SE: "",
    Platform: "",
    Version: "",
    Comment: "",
    PR: "",
    Size: "",
    Difficulty: "",
    Status: "",
    BYStatus: "",
    AHStatus: "",
    HTStatus: "",
    id: 0,
  });

  const [updateProgress, setUpdateProgress] = useState<boolean>(false);
  const [prs, setPrs] = useState<Array<PR>>(initialPrs);
  const [sortButtonStatus, setSortButtonStatus] = useState<boolean>(true);
  const [sortButtonName, setSortButtonName] =
    useState<string>("Sort DESC By Date");
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [searchArray, setSearchArray] = useState<Array<PR>>([]);

  const handleSort = (): void => {
    if (sortButtonStatus === true) {
      setInitialPrs(prs);
      setSortButtonName("Sort ASC By Date");
      let prsTest = sortBy(prs, "Date", "desc");
      setPrs(prsTest);
      setSortButtonStatus(false);
    } else if (sortButtonStatus === false) {
      setInitialPrs(prs);
      setSortButtonName("Sort DESC By Date");
      let prsTest = sortBy(prs, "Date", "asc");
      setPrs(prsTest);
      setSortButtonStatus(true);
    }
  };

  const booleanNumberReturner = (state: string): number => {
    return state === "Yes" ? 1 : 0;
  };

  const addPR: AddPR = (pr) => {
    setPrs([...prs, pr]);
    try {
      fetch("http://localhost:3333/issues/createIssue", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          issue_id: pr.id,
          comment: pr.Comment,
          link: pr.PR,
          se: pr.SE,
          platform: pr.Platform,
          size: pr.Size,
          difficulty: pr.Difficulty,
          status: pr.Status,
          version: pr.Version,
          by_state: booleanNumberReturner(pr.BYStatus),
          ah_state: booleanNumberReturner(pr.AHStatus),
          ht_state: booleanNumberReturner(pr.HTStatus),
          date: pr.date,
          is_deleted: 0,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePr: DeletePr = (selectedPr) => {
    let test = prs.filter((prFilter) => {
      return prFilter !== selectedPr;
    });
    setPrs(test);
    try {
      fetch(`http://localhost:3333/issues/deleteIssue/${selectedPr.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate: HandleUpdate = (pr) => {
    let test: boolean = !updateProgress;
    setUpdateProgress(test);
    setPrToBeUpdated(pr);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setSearchStatus(true);
      setSearchArray(
        prs.filter((pr) => {
          return pr.Comment.toLowerCase().includes(
            e.target.value.toLowerCase()
          );
        })
      );
    }
    if (e.target.value === "") {
      setSearchStatus(false);
    }
  };

  return (
    <div className="main-prs">
      <Navbar />
      <a href="#down-page-div">
        <BiCaretDownCircle className="arrow-div" />
      </a>
      <div className="sort-search-div">
        <div>
          <button className="sort-button" type="submit" onClick={handleSort}>
            {sortButtonName}
          </button>
        </div>
        <div>
          <br />
          <label>
            <input
              type="text"
              placeholder="Search By Comment"
              onChange={handleSearch}
            />
          </label>
        </div>
      </div>
      {searchStatus === true && (
        <PrItemsList
          prs={searchArray}
          deletePr={deletePr}
          handleUpdate={handleUpdate}
        />
      )}
      {searchStatus === false && (
        <PrItemsList
          prs={prs}
          deletePr={deletePr}
          handleUpdate={handleUpdate}
        />
      )}
      <div id="down-page-div">
        {updateProgress === false && <AddPr addPR={addPR} />}
        {updateProgress === true && (
          <UpdatePr handleUpdate={handleUpdate} pr={prToBeUpdated} />
        )}
      </div>
    </div>
  );
};
