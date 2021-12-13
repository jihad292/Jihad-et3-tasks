import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {issueStyle} from './issueStyle';

interface props {
  text: string;
  pressHandler: () => void;
}

const AddButton: React.FC<props> = props => {
  return (
    <View style={issueStyle.addButton}>
      <TouchableOpacity onPress={props.pressHandler}>
        <Text style={issueStyle.addButtonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
