import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {ColorStore} from '../../../mobxStore/colorStore';

interface props {
  text: string;
  handleLanguage: voidFunction;
}

export const ButtonHandler: React.FC<props> = props => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={props.handleLanguage}>
        <Text
          style={{
            color: ColorStore().languageTextColor.get(),
            fontWeight: 'bold',
            fontSize: 50,
            fontStyle: 'italic',
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
