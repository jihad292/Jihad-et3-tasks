import React from 'react';
import {View, Text} from 'react-native';
import {ButtonHandler} from './Parts/buttonHandler';
import {LanguageStore} from '../../mobxStore/languageStore';
import {observer} from 'mobx-react';
import {ColorStore} from '../../mobxStore/colorStore';

const LanguageScreen = observer(() => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Text
        style={{
          color: ColorStore().black.get(),
          fontWeight: 'bold',
          fontSize: 25,
          fontStyle: 'italic',
        }}>
        Please choose the language
      </Text>
      <ButtonHandler
        text={LanguageStore().languageText.get()}
        handleLanguage={LanguageStore().handleLanguage}
      />
    </View>
  );
});

export default LanguageScreen;
