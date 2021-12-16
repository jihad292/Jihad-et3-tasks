import {observable, runInAction} from 'mobx';
import memoize from 'lodash/memoize';

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

  float2int(value: number) {
    return value | 0;
  }

  addPr() {
    if (this.reviewByBY.get() === true) {
      this.setByStatus('Yes');
    }
    if (this.reviewByBY.get() === false) {
      this.setByStatus('No');
    }
    if (this.reviewByAH.get() === true) {
      this.setAhStatus('Yes');
    }
    if (this.reviewByAH.get() === false) {
      this.setAhStatus('No');
    }
    if (this.reviewByHT.get() === true) {
      this.setHtStatus('Yes');
    }
    if (this.reviewByHT.get() === false) {
      this.setHtStatus('No');
    }
    const pr = {
      id: this.float2int(Number(+Math.random().toFixed(4) * 10000)),
      comment: this.comment.get(),
      link: this.link.get(),
      se: this.se.get(),
      platform: this.platform.get(),
      size: this.size.get(),
      difficulty: this.difficulty.get(),
      status: this.status.get(),
      version: this.version.get(),
      ByStatus: this.byStatus.get(),
      AhStatus: this.ahStatus.get(),
      HtStatus: this.htStatus.get(),
      date: this.date.get(),
      dateS: this.dateS.get(),
      reviewByBY: this.reviewByBY.get(),
      reviewByAH: this.reviewByAH.get(),
      reviewByHT: this.reviewByHT.get(),
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
export const PrsStore = memoize(() => {
  return new prsStoreImpl();
});
export default {PrsStore};
