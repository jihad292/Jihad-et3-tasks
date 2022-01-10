import React from 'react';
import {View} from 'react-native';
import {ButtonHandler} from './Parts/buttonHandler';
import {LanguageStore} from '../../mobxStore/language-store';
import {observer} from 'mobx-react';

const LanguageScreen = observer(() => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <ButtonHandler
        text="English"
        handleLanguage={LanguageStore().setLanguageToEnglish}
        color={LanguageStore().englishLanguageOptionTextColor.get()}
      />
      <ButtonHandler
        text="العربية"
        handleLanguage={LanguageStore().setLanguageToArabic}
        color={LanguageStore().arabicLanguageOptionTextColor.get()}
      />
    </View>
  );
});

export default LanguageScreen;
