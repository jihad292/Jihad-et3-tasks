import React from 'react';
import {View, Text, TextInput} from 'react-native';
import i18n from '../../Language/Parts/i18n';
import {Colors} from '../../Common/colors';
import {LanguageStore} from '../../../mobxStore/language-store';
import Et3Theme from '../../Common/getTheme';

interface Props {
  comment: string;
  onChangeText1: stringFunction;
  link: string;
  onChangeText2: stringFunction;
}

const UpdateModalInputProperty: React.FC<Props> = props => {
  const {comment, onChangeText1, link, onChangeText2} = props;
  return (
    <View style={{paddingHorizontal: Et3Theme().getAppUnits.get().unitX * 2}}>
      <View
        style={{
          flexDirection:
            LanguageStore().languageText.get() === 'ENGLISH'
              ? 'row'
              : 'row-reverse',
          justifyContent: 'flex-start',
          height: Et3Theme().getAppUnits.get().unitY * 18,
        }}>
        <View
          style={{
            paddingHorizontal: Et3Theme().getAppUnits.get().unitX,
            justifyContent: 'center',
            height:Et3Theme().getAppUnits.get().childY * 18
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: Et3Theme().getThemeData.get().getKhFontSize(6),
              color: Colors.BLACK,
            }}>
            {i18n.get('comment')}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            height: Et3Theme().getAppUnits.get().childY * 17,
          }}>
          <TextInput
            value={comment}
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Colors.BLUE,
              color: Colors.BLACK,
            }}
            placeholder={i18n.get('comment')}
            onChangeText={onChangeText1}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection:
            LanguageStore().languageText.get() === 'ENGLISH'
              ? 'row'
              : 'row-reverse',
          height: Et3Theme().getAppUnits.get().unitY * 18,
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
            }}>
            {i18n.get('link')}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            height: Et3Theme().getAppUnits.get().childY * 17,
          }}>
          <TextInput
            value={link}
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Colors.BLUE,
              color: Colors.BLACK,
            }}
            placeholder={i18n.get('link')}
            onChangeText={onChangeText2}
          />
        </View>
      </View>
    </View>
  );
};

export default UpdateModalInputProperty;
