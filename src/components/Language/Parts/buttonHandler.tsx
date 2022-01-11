import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Et3Theme from '../../Common/getTheme';

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
        width: Et3Theme().getAppUnits.get().childX * 50,
        height: Et3Theme().getAppUnits.get().unitY * 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={handleLanguage}>
        <Text
          style={{
            color: color,
            fontWeight: 'bold',
            fontSize: Et3Theme().getThemeData.get().getKhFontSize(15),
            fontStyle: 'italic',
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
