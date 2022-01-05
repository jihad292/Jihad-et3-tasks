import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Property from './itemProperty';
import i18n from '../../Language/Parts/i18n';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {UpdateStore} from '../../../mobxStore/update-store';
import {PrsStore} from '../../../mobxStore/prs-store';
import {Colors} from '../../Common/colors';

interface Props {
  id: number;
  issue: prItem;
}

const ItemPropertyHeader: React.FC<Props> = props => {
  const {id, issue} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 12,
      }}>
      <Property text={i18n.get('id')} property={id} />

      <View style={{width: 30, marginHorizontal: 7}}>
        <TouchableOpacity onPress={() => UpdateStore().openUpdateModal(issue)}>
          <FontAwesome5
            name={'pen-alt'}
            size={25}
            color={Colors.prsScreenItemIcons}
          />
        </TouchableOpacity>
      </View>

      <View style={{width: 30, marginHorizontal: 7}}>
        <TouchableOpacity onPress={() => PrsStore().deletePr(id)}>
          <FontAwesome5
            name={'trash-alt'}
            size={25}
            color={Colors.prsScreenItemIcons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemPropertyHeader;
