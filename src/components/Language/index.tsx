import React from 'react';
import {View} from 'react-native';
import {ButtonHandler} from './Parts/buttonHandler';
import {LanguageStore} from '../../mobxStore/language-store';
import {observer} from 'mobx-react';
import { Colors } from '../Common/colors';

const LanguageScreen = observer(() => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <ButtonHandler
        text="English"
        handleLanguage={LanguageStore().setLanguageToEnglish}
        color={LanguageStore().languageText.get() === "ENGLISH" ? Colors.GREEN : Colors.GRAY}
      />
      <ButtonHandler
        text="العربية"
        handleLanguage={LanguageStore().setLanguageToArabic}
        color={LanguageStore().languageText.get() === "ARABIC" ? Colors.GREEN : Colors.GRAY}
      />
    </View>
  );
});

export default LanguageScreen;
