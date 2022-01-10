import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Colors} from '../../Common/colors';
import {LanguageStore} from '../../../mobxStore/language-store';
import Et3Theme from '../../Common/getTheme';

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
        padding: 1,
        marginBottom: 2,
        flexDirection: LanguageStore().flexDirection.get(),
        paddingHorizontal: Et3Theme().getAppUnits.get().initialWidth * 0.01,
        marginTop: 0,
      }}>
      <View
        style={{
          paddingHorizontal: Et3Theme().getAppUnits.get().initialWidth * 0.05,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: Colors.BLACK,
            marginBottom: 0,
          }}>
          {title}
        </Text>
      </View>
      <View style={{height: Et3Theme().getAppUnits.get().initialHeight * 0.1}}>
        <View>
          <TextInput
            value={value}
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Colors.BLUE,
              color: Colors.BLACK,
              justifyContent: 'center',
            }}
            placeholder={placeholder}
            placeholderTextColor={Colors.BLACK}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </View>
  );
};

export default TextInputComponent;
