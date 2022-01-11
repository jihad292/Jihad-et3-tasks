import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {UpdateStore} from '../../../mobxStore/update-store';
import {PrsStore} from '../../../mobxStore/prs-store';
import i18n from '../../Language/Parts/i18n';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../Common/colors';
import {LanguageStore} from '../../../mobxStore/language-store';
import Et3Theme from '../../Common/getTheme';

const UpdateModaHeader = () => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'flex-end',
        height: Et3Theme().getAppUnits.get().unitY * 6,
        flexDirection:
          LanguageStore().languageText.get() === 'ENGLISH'
            ? 'row'
            : 'row-reverse',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontStyle: 'italic',
          fontWeight: 'bold',
          fontSize: Et3Theme().getThemeData.get().getKhFontSize(5),
          color: Colors.BLACK,
          alignSelf: 'center',
        }}>
        {i18n.get('id')} : {PrsStore().id.get()}
      </Text>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={UpdateStore().closeModal}>
          <FontAwesome5
            name={'window-close'}
            size={Et3Theme().getThemeData.get().getKhFontSize(6)}
            color={Colors.OLIVE_GREEN}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateModaHeader;
