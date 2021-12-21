import {observable, runInAction} from 'mobx';
import memoize from 'lodash/memoize';
import {Alert} from 'react-native';

export class PrsStoreImpl {
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
  flatListRender = observable.box<boolean>(false);
  prsTotalNumber = observable.box<number>(0);

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

  setTest = (value : number)=>{
    runInAction(() =>{
      this.prsTotalNumber.set(value);
    })
  }  

  float2int(value: number) {
    return value | 0;
  }

  resetStore() {
    this.setComment('');
    this.setLink('');
    this.setSE('AH');
    this.setPlatform('mobile-client');
    this.setSize('Easy');
    this.setDifficulty('Easy');
    this.setStatus('Merged');
    this.setVersion('8.1.0');
    this.setReviewByBY(false);
    this.setReviewByAH(false);
    this.setReviewByHT(false);
    this.setByStatus('');
    this.setAhStatus('');
    this.setHtStatus('');
  }

  addChecker() {
    if (this.comment.get() === '') {
      Alert.alert('Please enter a Comment');
    }
    if (this.link.get() === '') {
      Alert.alert('Please choose a Link');
    }
    if (this.se.get() === '') {
      Alert.alert('Please choose a SE');
    }
    if (this.platform.get() === '') {
      Alert.alert('Please choose a Platform');
    }
    if (this.size.get() === '') {
      Alert.alert('Please choose a Size');
    }
    if (this.difficulty.get() === '') {
      Alert.alert('Please choose a Difficulty');
    }
    if (this.status.get() === '') {
      Alert.alert('Please choose a status');
    }
    if (this.version.get() === '') {
      Alert.alert('Please choose a Version');
    }
    if (this.dateS.get() === '') {
      Alert.alert('Please choose a Date');
    }
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
    this.flatListRender.set(!this.flatListRender.get());
  }

  pressHandler = () => {
    runInAction(() => {
      this.addChecker();
      if (
        this.comment.get() !== '' &&
        this.link.get() !== '' &&
        this.se.get() !== '' &&
        this.platform.get() !== '' &&
        this.difficulty.get() !== '' &&
        this.status.get() !== '' &&     
        this.version.get() !== '' &&
        this.dateS.get() !== ''   
      ) {
        this.prsTotalNumber.set(this.prsTotalNumber.get() + 1)
        this.addPr();
        this.resetStore();
        }
      }  
    );        
  };

  deletePr(value: number) {
    runInAction(() => {
      let test = this.prs.filter(pr => {
        return pr.id != value;
      });
      this.setPrs(test);
      this.flatListRender.set(!this.flatListRender.get());
    });
  }
}
export const PrsStore = memoize(
  () => {
    return new PrsStoreImpl();
  },
  () => 1,
);
export default {PrsStore};
