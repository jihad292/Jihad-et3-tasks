import memoize from 'lodash/memoize';
import {runInAction, observable} from 'mobx';

export class languageStoreImpl {
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
}

export const LanguageStore = memoize(() => {
  return new languageStoreImpl();
});

export default {LanguageStore};
