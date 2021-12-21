import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ButtonHandler} from './Parts/buttonHandler';
import {LanguageStore} from '../../mobxStore/languageStore';
import {observer} from 'mobx-react';
import {ColorStore} from '../../mobxStore/colorStore';

const LanguageScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please choose the language</Text>
      <ButtonHandler
        text={LanguageStore().languageText.get()}
        handleLanguage={LanguageStore().handleLanguage}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    color: ColorStore().black.get(),
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
  },
});

export default LanguageScreen;
