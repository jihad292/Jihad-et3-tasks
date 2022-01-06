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
  languageStateString = observable.box<string>('ENG');
  languageState = observable.box<boolean>(false);
  languageText = observable.box<string>('English');
  drawerPosition = observable.box<'left' | 'right'>('left');
  drawerIconPosition = observable.box<'flex-start' | 'flex-end'>('flex-start');
  englishLanguageOptionTextColor = observable.box<string>('green');
  arabicLanguageOptionTextColor = observable.box<string>('grey');

  setLanguageStateString = (value: string) => {
    runInAction(() => {
      this.languageStateString.set(value);
    });
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

  setDrawerPosition = (value: 'left' | 'right') => {
    runInAction(() => {
      this.drawerPosition.set(value);
    });
  };

  setDrawerIconPosition = (value: 'flex-start' | 'flex-end') => {
    runInAction(() => {
      this.drawerIconPosition.set(value);
    });
  };

  setEnglishLanguageOptionTextColor = (value: string) => {
    runInAction(() => {
      this.englishLanguageOptionTextColor.set(value);
    });
  };

  setArabicLanguageOptionTextColor = (value: string) => {
    runInAction(() => {
      this.arabicLanguageOptionTextColor.set(value);
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
      this.setEnglishLanguageOptionTextColor('green');
      this.setArabicLanguageOptionTextColor('grey');
      this.setLanguageState(false);
      this.setLanguageStateText('English');
      this.showLanguageChosen();
      this.setLanguageStateString('ENG');
      this.setDrawerPosition('left');
      this.setDrawerIconPosition('flex-start');
      saveEngLanguage();
      retrieveEngLanguage();
      PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
    });
  };

  setLanguageToArabic = () => {
    runInAction(() => {
      this.setEnglishLanguageOptionTextColor('grey');
      this.setArabicLanguageOptionTextColor('green');
      this.setLanguageState(true);
      this.setLanguageStateText('Arabic');
      this.showLanguageChosen();
      this.setLanguageStateString('AR');
      this.setDrawerPosition('right');
      this.setDrawerIconPosition('flex-end');
      saveArLanguage();
      retrieveArLanguage();
      PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
    });
  };

  handleLanguage = () => {
    runInAction(() => {
      if (this.languageState.get() === true) {
        this.setLanguageState(false);
        this.setLanguageStateText('English');
        this.setLanguageStateString('ENG');
        this.setDrawerPosition('left');
        this.setDrawerIconPosition('flex-start');
        saveEngLanguage();
        retrieveEngLanguage();

        PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
      } else {
        this.setLanguageState(true);
        this.setLanguageStateText('Arabic');
        this.setLanguageStateString('AR');
        this.setDrawerPosition('right');
        this.setDrawerIconPosition('flex-end');
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
