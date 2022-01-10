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
  languageState = observable.box<boolean>(false);
  languageText = observable.box<string>('ENGLISH');
  drawerPosition = observable.box<'left' | 'right'>('left');
  drawerIconPosition = observable.box<'flex-start' | 'flex-end'>('flex-start');
  englishLanguageOptionTextColor = observable.box<string>('green');
  arabicLanguageOptionTextColor = observable.box<string>('grey');
  drawerRefresher = observable.box<string>('0');
  flexDirection = observable.box<'row' | 'row-reverse'>('row');

  setFlexDirection = () => {
    runInAction(() => {
      if (this.flexDirection.get() === 'row') {
        this.flexDirection.set('row-reverse');
      } else {
        this.flexDirection.set('row');
      }
    });
  };

  setDrawerRefresher = () => {
    runInAction(() => {
      if (this.drawerRefresher.get() === '0') {
        this.drawerRefresher.set('1');
      } else {
        this.drawerRefresher.set('0');
      }
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
      this.setDrawerRefresher();
      this.setEnglishLanguageOptionTextColor('green');
      this.setArabicLanguageOptionTextColor('grey');
      this.setLanguageState(false);
      this.setLanguageStateText('ENGLISH');
      this.showLanguageChosen();
      this.setDrawerPosition('left');
      this.setDrawerIconPosition('flex-start');
      this.setFlexDirection();
      saveEngLanguage();
      retrieveEngLanguage();
      PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
    });
  };

  setLanguageToArabic = () => {
    runInAction(() => {
      this.setDrawerRefresher();
      this.setEnglishLanguageOptionTextColor('grey');
      this.setArabicLanguageOptionTextColor('green');
      this.setLanguageState(true);
      this.setLanguageStateText('ARABIC');
      this.showLanguageChosen();
      this.setDrawerPosition('right');
      this.setDrawerIconPosition('flex-end');
      this.setFlexDirection();
      saveArLanguage();
      retrieveArLanguage();
      PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
    });
  };

  handleLanguage = () => {
    runInAction(() => {
      if (this.languageState.get() === true) {
        this.setLanguageState(false);
        this.setLanguageStateText('ENGLISH');
        this.setDrawerPosition('left');
        this.setDrawerIconPosition('flex-start');
        saveEngLanguage();
        retrieveEngLanguage();

        PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
      } else {
        this.setLanguageState(true);
        this.setLanguageStateText('ARABIC');
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
