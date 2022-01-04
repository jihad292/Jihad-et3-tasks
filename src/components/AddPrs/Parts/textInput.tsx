import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Colors} from '../../Common/colors';

interface Props {
  title: string;
  value: string;
  placeholder: string;
  onChangeText: stringFunction;
}

const TextInputComponent: React.FC<Props> = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        padding: 1,
        marginBottom: 2,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: Colors.textInputTitle,
        }}>
        {props.title}
      </Text>
      <TextInput
        value={props.value}
        style={{
          borderBottomWidth: 2,
          borderBottomColor: Colors.addTextInputBottomBorder,
          color: Colors.textInputTitle,
          justifyContent: 'center',
        }}
        placeholder={props.placeholder}
        placeholderTextColor={'black'}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default TextInputComponent;
