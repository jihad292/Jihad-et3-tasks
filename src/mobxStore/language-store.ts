import memoize from 'lodash/memoize';
import {runInAction, observable} from 'mobx';
import {
  saveArLanguage,
  retrieveArLanguage,
  saveEngLanguage,
  retrieveEngLanguage,
} from '../components/Language/Parts/languangeManagment';
import {PrsStore} from './prs-store';
import {ToastAndroid} from 'react-native';

export class LanguageStoreImpl {
  languageText = observable.box<string>('ENGLISH');

  setLanguageStateText = (value: string) => {
    runInAction(() => {
      this.languageText.set(value);
    });
  };

  showLanguageChosen = () => {
    ToastAndroid.showWithGravityAndOffset(
      this.languageText.get(),
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  setLanguageToEnglish = () => {
    runInAction(() => {
      this.setLanguageStateText('ENGLISH');
      this.showLanguageChosen();
      saveEngLanguage();
      retrieveEngLanguage();
      PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
    });
  };

  setLanguageToArabic = () => {
    runInAction(() => {
      this.setLanguageStateText('ARABIC');
      this.showLanguageChosen();
      saveArLanguage();
      retrieveArLanguage();
      PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
    });
  };

  handleLanguage = () => {
    runInAction(() => {
      if (this.languageText.get() === 'ARABIC') {
        this.setLanguageStateText('ENGLISH');
        saveEngLanguage();
        retrieveEngLanguage();

        PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
      } else {
        this.setLanguageStateText('ARABIC');
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
