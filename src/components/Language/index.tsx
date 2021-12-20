import React from 'react';
import {View,StyleSheet} from 'react-native';
import {ButtonHandler} from '../../languageHandler/buttonHandler';
import {LanguageStore} from '../../mobxStore/languageStore';

const LanguageScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ButtonHandler
        text={LanguageStore().languageStateText.get()}
        handleLanguage={LanguageStore().handleLanguage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
  },
})

export default LanguageScreen;
