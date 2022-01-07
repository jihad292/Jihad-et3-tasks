import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Colors} from '../../Common/colors';

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
        width: 70,
        height: 30,
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
            fontSize: 20,
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
