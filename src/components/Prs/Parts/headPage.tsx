import React from 'react';
import {
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {LanguageStore} from '../../../mobxStore/language-store';
import {Colors} from '../../Common/colors';
import Et3Theme from '../../Common/getTheme';

interface props {
  handleSort: voidFunction;
  name: string;
  value: string;
  handleChange: stringFunction;
}

const HeadPage: React.FC<props> = props => {
  const {handleSort, name, value, handleChange} = props;
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flexDirection:
              LanguageStore().languageText.get() === 'ENGLISH'
                ? 'row'
                : 'row-reverse',
            height: Et3Theme().getAppUnits.get().childY * 20,
            alignItems: 'flex-start',
            paddingTop: Et3Theme().getAppUnits.get().unitY * 3,
            paddingHorizontal: Et3Theme().getAppUnits.get().unitX * 2,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              borderBottomWidth: 1,
              borderColor: Colors.BLUE,
              marginHorizontal: Et3Theme().getAppUnits.get().unitX * 2,
              justifyContent: 'flex-end',
              height: Et3Theme().getAppUnits.get().childY * 14,
            }}>
            <TextInput
              style={{
                color: Colors.BLACK,
                fontStyle: 'italic',
                height: Et3Theme().getAppUnits.get().unitY * 17,
                fontSize: Et3Theme().getThemeData.get().getKhFontSize(6),
              }}
              value={value}
              onChangeText={handleChange}
              placeholder="Search"
              placeholderTextColor={Colors.BLACK}
            />
          </View>

          <View style={{marginEnd: Et3Theme().getAppUnits.get().unitX * 2}}>
            <Button title={name} onPress={handleSort}></Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default HeadPage;
