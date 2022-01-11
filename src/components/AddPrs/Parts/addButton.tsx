import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Colors} from '../../Common/colors';
import Et3Theme from '../../Common/getTheme';

interface props {
  text: string;
  pressHandler: voidFunction;
}

const AddButton: React.FC<props> = props => {
  const {text, pressHandler} = props;
  return (
    <View
      style={{
        backgroundColor: Colors.BLUE,
        width: Et3Theme().getAppUnits.get().unitX * 18,
        height: Et3Theme().getAppUnits.get().unitY * 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Colors.GREEN,
        borderRadius: 10,
      }}>
      <TouchableOpacity onPress={pressHandler}>
        <Text
          style={{
            color: Colors.GREEN,
            fontWeight: 'bold',
            fontSize: Et3Theme().getThemeData.get().getKhFontSize(6),
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
