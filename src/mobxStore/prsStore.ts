import {action, makeObservable, observable} from 'mobx';

export class prsStoreImpl {
  prs: prItem[] = [];
  id: number = 0;
  comment: string = '';
  link: string = '';
  se: string = '';
  platform: string = '';
  size: string = '';
  difficulty: string = '';
  status: string = '';
  version: string = '';
  reviewByBY: boolean = false;
  reviewByAH: boolean = false;
  reviewByHT: boolean = false;
  byStatus: string = 'No';
  ahStatus: string = 'No';
  htStatus: string = 'No';
  date: Date = new Date();
  dateS: string = '';
  updateModalStatus: boolean = false;
  commentString: string | null = 'Comment :';
  linkString: string | null = 'Link :';
  languageState: boolean = false;
  languageStateText: string = 'English';
  searchState: boolean = false;
  searchStateText: string = '';
  searchArray: prItem[] = [];
  setLink = (value: string) => {
    this.link = value;
  };
  setComment = (value: string) => {
    this.comment = value;
  };
  setSE = (value: string) => {
    this.se = value;
  };
  setPlatform = (value: string) => {
    this.platform = value;
  };
  setSize = (value: string) => {
    this.size = value;
  };
  setDifficulty = (value: string) => {
    this.difficulty = value;
  };
  setStatus = (value: string) => {
    this.status = value;
  };
  setVersion = (value: string) => {
    this.version = value;
  };
  setReviewByBY = (value: boolean) => {
    this.reviewByBY = value;
  };
  setReviewByAH = (value: boolean) => {
    this.reviewByAH = value;
  };
  setReviewByHT = (value: boolean) => {
    this.reviewByHT = value;
  };
  setDate = (value: Date) => {
    this.date = value;
  };
  setDateS = (value: Date) => {
    this.dateS = '' + value;
  };
  setId = (value: number) => {
    this.id = value;
  };
  setCommentString = (value: string | null) => {
    this.commentString = value;
  };
  setLinkString = (value: string | null) => {
    this.linkString = value;
  };
  setLanguageState = (value: boolean) => {
    this.languageState = value;
  };
  setLanguageStateText = (value: string) => {
    this.languageStateText = value;
  };
  setSearchState = (value: boolean) => {
    this.searchState = value;
  };
  setSearchStateString = (value: string) => {
    this.searchStateText = value;
  };
  setSearchArray = (value: prItem[]) => {
    this.searchArray = value;
  };

  constructor() {
    makeObservable(this, {
      prs: observable,
      addPr: action,
      deletePr: action,
      comment: observable,
      link: observable,
      se: observable,
      platform: observable,
      size: observable,
      difficulty: observable,
      status: observable,
      version: observable,
      reviewByBY: observable,
      reviewByAH: observable,
      reviewByHT: observable,
      byStatus: observable,
      ahStatus: observable,
      htStatus: observable,
      date: observable,
      dateS: observable,
      updateModalStatus: observable,
      id: observable,
      languageState: observable,
      languageStateText: observable,
      searchState: observable,
      searchStateText: observable,
      setLink: action,
      setComment: action,
      setSE: action,
      setPlatform: action,
      setSize: action,
      setDifficulty: action,
      setStatus: action,
      setVersion: action,
      setReviewByBY: action,
      setReviewByAH: action,
      setReviewByHT: action,
      setDate: action,
      setDateS: action,
      setId: action,
      setCommentString: action,
      setLinkString: action,
      setLanguageState: action,
      setLanguageStateText: action,
      setSearchState: action,
      setSearchStateString: action,
    });
  }

  float2int(value: number) {
    return value | 0;
  }

  addPr() {
    if (this.reviewByBY === true) {
      this.byStatus = 'Yes';
    }
    if (this.reviewByAH === true) {
      this.ahStatus = 'Yes';
    }
    if (this.reviewByHT === true) {
      this.htStatus = 'Yes';
    }
    if (this.reviewByBY === false) {
      this.byStatus = 'No';
    }
    if (this.reviewByAH === false) {
      this.ahStatus = 'No';
    }
    if (this.reviewByHT === false) {
      this.htStatus = 'No';
    }
    const pr: prItem = {
      id: this.float2int(Number(+Math.random().toFixed(4) * 10000)),
      comment: this.comment,
      link: this.link,
      se: this.se,
      platform: this.platform,
      size: this.size,
      difficulty: this.difficulty,
      status: this.status,
      version: this.version,
      ByStatus: this.byStatus,
      AhStatus: this.ahStatus,
      HtStatus: this.htStatus,
      date: this.date,
      dateS: this.dateS,
      reviewByBY: this.reviewByBY,
      reviewByAH: this.reviewByAH,
      reviewByHT: this.reviewByHT,
    };

    this.prs.push(pr);
    //the test array will help us to update prs array automatically after add a pr
    let test = this.prs.filter(pr => {
      return pr.id !== null;
    });
    this.prs = test;
  }

  deletePr(value: number) {
    let test = this.prs.filter(pr => {
      return pr.id != value;
    });
    this.prs = test;
  }

  languageHandler() {}
}

export const PrsStore = new prsStoreImpl();
