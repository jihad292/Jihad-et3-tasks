import React from 'react';
import {View, Text} from 'react-native';
import {ButtonHandler} from './Parts/buttonHandler';
import {LanguageStore} from '../../mobxStore/languageStore';
import {observer} from 'mobx-react';
import {Colors} from '../Common/colors';

const LanguageScreen = observer(() => {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Text
        style={{
          color: Colors.languageScreenNote,
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
