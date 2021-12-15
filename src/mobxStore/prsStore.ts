import {observable, runInAction} from 'mobx';

export class prsStoreImpl {
  //Prs properties
  prs = observable([]);
  id = observable.box<number>(0);
  comment = observable.box<string>('');
  link = observable.box<string>('');
  se = observable.box<string>('');
  platform = observable.box<string>('');
  size = observable.box<string>('');
  difficulty = observable.box<string>('');
  status = observable.box<string>('');
  version = observable.box<string>('');
  reviewByBY = observable.box<boolean>(false);
  reviewByAH = observable.box<boolean>(false);
  reviewByHT = observable.box<boolean>(false);
  byStatus = observable.box<string>('');
  ahStatus = observable.box<string>('');
  htStatus = observable.box<string>('');
  date = observable.box<Date>(new Date());
  dateS = observable.box<string>('');

  setPrs = (array: any) => {
    runInAction(() => {
      this.prs = array;
    });
  };

  setId = (id: number) => {
    runInAction(() => {
      this.id.set(id);
    });
  };

  setComment = (comment: string) => {
    runInAction(() => {
      this.comment.set(comment);
    });
  };

  setLink = (link: string) => {
    runInAction(() => {
      this.link.set(link);
    });
  };

  setSE = (se: string) => {
    runInAction(() => {
      this.se.set(se);
    });
  };

  setPlatform = (platform: string) => {
    runInAction(() => {
      this.platform.set(platform);
    });
  };

  setSize = (size: string) => {
    runInAction(() => {
      this.size.set(size);
    });
  };

  setDifficulty = (difficulty: string) => {
    runInAction(() => {
      this.difficulty.set(difficulty);
    });
  };

  setStatus = (status: string) => {
    runInAction(() => {
      this.status.set(status);
    });
  };

  setVersion = (version: string) => {
    runInAction(() => {
      this.version.set(version);
    });
  };

  setReviewByBY = (status: boolean) => {
    runInAction(() => {
      this.reviewByBY.set(status);
    });
  };

  setReviewByAH = (status: boolean) => {
    runInAction(() => {
      this.reviewByAH.set(status);
    });
  };

  setReviewByHT = (status: boolean) => {
    runInAction(() => {
      this.reviewByHT.set(status);
    });
  };

  setByStatus = (value: string) => {
    runInAction(() => {
      this.byStatus.set(value);
    });
  };

  setAhStatus = (value: string) => {
    runInAction(() => {
      this.ahStatus.set(value);
    });
  };

  setHtStatus = (value: string) => {
    runInAction(() => {
      this.htStatus.set(value);
    });
  };

  setDate = (date: Date) => {
    runInAction(() => {
      this.date.set(date);
    });
  };

  setDateS = (value: string) => {
    runInAction(() => {
      this.dateS.set(value);
    });
  };

  //update Modal
  updateModalStatus = observable.box<boolean>(false);
  setUpdateModalstatus = (value: boolean) => {
    runInAction(() => {
      this.updateModalStatus.set(value);
    });
  };

  //language Titles properties
  commentTitle = observable.box<string>('Comment');
  linkTitle = observable.box<string>('Link');
  seTitle = observable.box<string>('SE');
  difficultyTitle = observable.box<string>('Difficulty');
  platformTitle = observable.box<string>('Platform');
  sizeTitle = observable.box<string>('Size');
  statusTitle = observable.box<string>('Status');
  versionTitle = observable.box<string>('Version');
  ByReviewTitle = observable.box<string>('Review by BY');
  AhReviewTitle = observable.box<string>('Review by AH');
  HtReviewTitle = observable.box<string>('Review by HT');
  dateTitle = observable.box<string>('Date');
  languageState = observable.box<boolean>(false);
  languageStateText = observable.box<string>('English');

  setCommentTitle = (value: string) => {
    runInAction(() => {
      this.commentTitle.set(value);
    });
  };

  setLinkTitle = (value: string) => {
    runInAction(() => {
      this.linkTitle.set(value);
    });
  };

  setSeTitle = (value: string) => {
    runInAction(() => {
      this.seTitle.set(value);
    });
  };

  setDifficultyTitle = (value: string) => {
    runInAction(() => {
      this.difficultyTitle.set(value);
    });
  };

  setPlatformTitle = (value: string) => {
    runInAction(() => {
      this.platformTitle.set(value);
    });
  };

  setSizeTitle = (value: string) => {
    runInAction(() => {
      this.sizeTitle.set(value);
    });
  };

  setStatusTitle = (value: string) => {
    runInAction(() => {
      this.statusTitle.set(value);
    });
  };

  setVersionTitle = (value: string) => {
    runInAction(() => {
      this.versionTitle.set(value);
    });
  };

  setByReviewTitle = (value: string) => {
    runInAction(() => {
      this.ByReviewTitle.set(value);
    });
  };

  setAhReviewTitle = (value: string) => {
    runInAction(() => {
      this.AhReviewTitle.set(value);
    });
  };

  setHtReviewTitle = (value: string) => {
    runInAction(() => {
      this.HtReviewTitle.set(value);
    });
  };

  setDateTitle = (value: string) => {
    runInAction(() => {
      this.dateTitle.set(value);
    });
  };

  setLanguageState = (value: boolean) => {
    runInAction(() => {
      this.languageState.set(value);
    });
  };

  setLanguageStateText = (value: string) => {
    runInAction(() => {
      this.languageStateText.set(value);
    });
  };
  //search properties
  searchState = observable.box<boolean>(false);
  searchStateText = observable.box<string>('');
  searchArray = observable.box([]);
  setSearchState = (value: boolean) => {
    runInAction(() => {
      this.searchState.set(value);
    });
  };

  setSearchStateText = (value: string) => {
    runInAction(() => {
      this.searchStateText.set(value);
    });
  };

  setSearchArray = (value: []) => {
    runInAction(() => {
      this.searchArray.set(value);
    });
  };

  //sort properties
  sortState = observable.box<boolean>(false);
  sortStateText = observable.box<string>('');

  setSortState = (value: boolean) => {
    runInAction(() => {
      this.sortState.set(value);
    });
  };

  setSortStateText = (value: string) => {
    runInAction(() => {
      this.sortStateText.set(value);
    });
  };

  float2int(value: number) {
    return value | 0;
  }

  addPr() {
    const pr = {
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
    this.setPrs(test);
  }

  deletePr(value: number) {
    let test = this.prs.filter(pr => {
      return pr.id != value;
    });
    this.setPrs(test);
  }
}

export const PrsStore = new prsStoreImpl();
