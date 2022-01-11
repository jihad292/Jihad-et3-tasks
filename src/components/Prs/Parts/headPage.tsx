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
            height: 'auto',
            alignItems: 'flex-start',
            paddingTop: Et3Theme().getAppUnits.get().initialHeight * 0.005,
            paddingHorizontal: Et3Theme().getAppUnits.get().initialWidth * 0.01,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              borderBottomWidth: 1,
              borderColor: Colors.BLUE,
              marginHorizontal: 10,
            }}>
            <TextInput
              style={{
                color: Colors.BLACK,
                fontStyle: 'italic',
                height: 40,
                fontSize: 20,
              }}
              value={value}
              onChangeText={handleChange}
              placeholder="Search"
              placeholderTextColor={Colors.BLACK}
            />
          </View>

          <View style={{marginEnd: 10}}>
            <Button title={name} onPress={handleSort}></Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default HeadPage;
