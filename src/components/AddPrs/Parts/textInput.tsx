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
  const {title, value, placeholder, onChangeText} = props;
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
        {title}
      </Text>
      <TextInput
        value={value}
        style={{
          borderBottomWidth: 2,
          borderBottomColor: Colors.addTextInputBottomBorder,
          color: Colors.textInputTitle,
          justifyContent: 'center',
        }}
        placeholder={placeholder}
        placeholderTextColor={Colors.textInputTitle}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputComponent;
