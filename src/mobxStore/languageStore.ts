import memoize from 'lodash/memoize';
import {runInAction, observable} from 'mobx';
import {
  saveArLanguage,
  retrieveArLanguage,
  saveEngLanguage,
  retrieveEngLanguage,
} from '../languageHandler/languangeManagment';
import {PrsStore} from './prsStore';

export class languageStoreImpl {
  idTitle = observable.box<string>('ID');
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

  setIdTitle = (value: string) => {
    runInAction(() => {
      this.idTitle.set(value);
    });
  };

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

  handleLanguage = () => {
    runInAction(() => {
      if (this.languageState.get() === true) {
        this.setLanguageState(false);
        this.setLanguageStateText('English');
        saveEngLanguage();
        retrieveEngLanguage();
        PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
      } else {
        this.setLanguageState(true);
        this.setLanguageStateText('Arabic');
        saveArLanguage();
        retrieveArLanguage();
        PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
      }
    });
  };

  retrieveLang = (array: string[]) => {
    runInAction(() => {
      this.setCommentTitle(array[0]);
      this.setLinkTitle(array[1]);
      this.setSeTitle(array[2]);
      this.setDifficultyTitle(array[3]);
      this.setPlatformTitle(array[4]);
      this.setStatusTitle(array[5]);
      this.setVersionTitle(array[6]);
      this.setSizeTitle(array[7]);
      this.setByReviewTitle(array[8]);
      this.setAhReviewTitle(array[9]);
      this.setHtReviewTitle(array[10]);
      this.setDateTitle(array[11]);
      this.setIdTitle(array[12]);
    });
  };
}

export const LanguageStore = memoize(() => {
  return new languageStoreImpl();
});

export default {LanguageStore};
