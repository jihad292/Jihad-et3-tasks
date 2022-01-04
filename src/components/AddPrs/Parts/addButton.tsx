import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Colors} from '../../Common/colors'

interface props {
  text: string;
  pressHandler: voidFunction;
}

const AddButton: React.FC<props> = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.addButtonBackgroud,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Colors.addButtonBorder,
        borderRadius: 10,
      }}>
      <TouchableOpacity onPress={props.pressHandler}>
        <Text
          style={{
            color: Colors.addButtonText,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
