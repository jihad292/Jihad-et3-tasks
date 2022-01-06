import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

interface props {
  text: string;
  handleLanguage: voidFunction;
  color: string;
}

export const ButtonHandler: React.FC<props> = props => {
  const {text, handleLanguage, color} = props;
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={handleLanguage}>
        <Text
          style={{
            color: color,
            fontWeight: 'bold',
            fontSize: 50,
            fontStyle: 'italic',
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
