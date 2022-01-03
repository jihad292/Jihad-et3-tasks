import memoize from 'lodash/memoize';
import {runInAction, observable} from 'mobx';
import {
  saveArLanguage,
  retrieveArLanguage,
  saveEngLanguage,
  retrieveEngLanguage,
} from '../components/Language/Parts/languangeManagment';
import {PrsStore} from './prsStore';

export class LanguageStoreImpl {
  languageStateString = observable.box<string>('ENG');
  languageState = observable.box<boolean>(false);
  languageText = observable.box<string>('English');
  drawerPosition = observable.box<string>('left');

  setLanguageStateString = (value: string) => {
    this.languageStateString.set(value);
  };

  setLanguageState = (value: boolean) => {
    runInAction(() => {
      this.languageState.set(value);
    });
  };

  setLanguageStateText = (value: string) => {
    runInAction(() => {
      this.languageText.set(value);
    });
  };

  setDrawerPosition = (value: string) => {
    runInAction(() => {
      this.drawerPosition.set(value);
    });
  };

  handleLanguage = () => {
    runInAction(() => {
      if (this.languageState.get() === true) {
        this.setLanguageState(false);
        this.setLanguageStateText('English');
        this.setLanguageStateString('ENG');
        this.setDrawerPosition('left');
        saveEngLanguage();
        retrieveEngLanguage();
        PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
      } else {
        this.setLanguageState(true);
        this.setLanguageStateText('Arabic');
        this.setLanguageStateString('AR');
        this.setDrawerPosition('right');
        saveArLanguage();
        retrieveArLanguage();
        PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
      }
    });
  };
}

export const LanguageStore = memoize(() => {
  return new LanguageStoreImpl();
});

export default {LanguageStore};
