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
        padding: Et3Theme().getAppUnits.get().unitX * 0.2,
        marginBottom: Et3Theme().getAppUnits.get().unitX * 0.1,
        flexDirection:
          LanguageStore().languageText.get() === 'ENGLISH'
            ? 'row'
            : 'row-reverse',
        paddingHorizontal: Et3Theme().getAppUnits.get().unitX * 1.5,
        marginTop: 0,
      }}>
      <View
        style={{
          paddingHorizontal: Et3Theme().getAppUnits.get().unitX * 2,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: Et3Theme().getThemeData.get().getKhFontSize(6),
            color: Colors.BLACK,
            marginBottom: 0,
          }}>
          {title}
        </Text>
      </View>
      <View style={{height: Et3Theme().getAppUnits.get().unitY * 14}}>
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
