import React from 'react';
import {View, Text} from 'react-native';
import i18n from '../../Language/Parts/i18n';
import {LanguageStore} from '../../../mobxStore/language-store';
import {Colors} from '../../Common/colors';
import Et3Theme from '../../Common/getTheme';

interface Props {
  comment: string;
  link: string;
}

const ItemInputProperty: React.FC<Props> = props => {
  const {comment, link} = props;
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        paddingHorizontal: Et3Theme().getAppUnits.get().unitX * 2,
      }}>
      <View
        style={{
          flexDirection:
            LanguageStore().languageText.get() === 'ENGLISH'
              ? 'row'
              : 'row-reverse',
        }}>
        <Text
          style={{
            color: Colors.AZURE,
            paddingHorizontal: Et3Theme().getAppUnits.get().unitX * 2,
            fontSize: Et3Theme().getThemeData.get().getKhFontSize(6),
          }}>
          {i18n.get('comment')}
        </Text>
        <Text
          style={{
            color: Colors.OLIVE_GREEN,
            fontSize: Et3Theme().getThemeData.get().getKhFontSize(5),
          }}>
          {comment}
        </Text>
      </View>
      <View
        style={{
          flexDirection:
            LanguageStore().languageText.get() === 'ENGLISH'
              ? 'row'
              : 'row-reverse',
        }}>
        <Text
          style={{
            color: Colors.AZURE,
            paddingHorizontal: Et3Theme().getAppUnits.get().unitX * 2,
            fontSize: Et3Theme().getThemeData.get().getKhFontSize(6),
          }}>
          {i18n.get('link')}
        </Text>
        <Text
          style={{
            color: Colors.OLIVE_GREEN,
            fontSize: Et3Theme().getThemeData.get().getKhFontSize(5),
          }}>
          {link}
        </Text>
      </View>
    </View>
  );
};

export default ItemInputProperty;
