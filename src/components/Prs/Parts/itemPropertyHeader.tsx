import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Property from './itemProperty';
import i18n from '../../Language/Parts/i18n';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {UpdateStore} from '../../../mobxStore/update-store';
import {PrsStore} from '../../../mobxStore/prs-store';
import {Colors} from '../../Common/colors';
import {LanguageStore} from '../../../mobxStore/language-store';
import Et3Theme from '../../Common/getTheme';

interface Props {
  id: number;
  issue: prItem;
}

const ItemPropertyHeader: React.FC<Props> = props => {
  const {id, issue} = props;
  return (
    <View
      style={{
        flexDirection:
          LanguageStore().languageText.get() === 'ENGLISH'
            ? 'row'
            : 'row-reverse',
        justifyContent: 'space-around',
        paddingHorizontal: Et3Theme().getAppUnits.get().unitX * 2,
        height: Et3Theme().getAppUnits.get().unitY * 16,
      }}>
      <Property text={i18n.get('id')} property={id} />

      <View
        style={{
          width: Et3Theme().getAppUnits.get().unitX * 8,
          marginHorizontal: Et3Theme().getAppUnits.get().unitX,
        }}>
        <TouchableOpacity onPress={() => UpdateStore().openUpdateModal(issue)}>
          <FontAwesome5
            name={'pen-alt'}
            size={Et3Theme().getAppUnits.get().unitX * 8}
            color={Colors.AZURE}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: Et3Theme().getAppUnits.get().unitX * 8,
          marginHorizontal: Et3Theme().getAppUnits.get().unitX,
        }}>
        <TouchableOpacity onPress={() => PrsStore().deletePr(id)}>
          <FontAwesome5
            name={'trash-alt'}
            size={Et3Theme().getAppUnits.get().unitX * 8}
            color={Colors.AZURE}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemPropertyHeader;
