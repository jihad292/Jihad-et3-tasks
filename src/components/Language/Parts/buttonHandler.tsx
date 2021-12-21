import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {ColorStore} from '../../../mobxStore/colorStore';

interface props {
  text: string;
  handleLanguage: voidFunction;
}

export const ButtonHandler: React.FC<props> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.handleLanguage}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: ColorStore().languageTextColor.get(),
    fontWeight: 'bold',
    fontSize: 50,
    fontStyle: 'italic',
  },
});
