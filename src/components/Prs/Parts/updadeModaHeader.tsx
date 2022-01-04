import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ColorStore} from '../../../mobxStore/colorStore';
import {UpdateStore} from '../../../mobxStore/updateStore';
import {PrsStore} from '../../../mobxStore/prsStore';
import i18n from '../../Language/Parts/i18n';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const UpdateModaHeader = () => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'flex-end',
        height: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontStyle: 'italic',
          fontWeight: 'bold',
          fontSize: 17,
          color: ColorStore().black.get(),
          alignSelf: 'center',
        }}>
        {i18n.get('id')} : {PrsStore().id.get()}
      </Text>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={UpdateStore().closeModal}>
          <FontAwesome5 name={'window-close'} size={23} color={'olivedrab'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateModaHeader;
