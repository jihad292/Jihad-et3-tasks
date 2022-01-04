import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {ColorStore} from '../../../mobxStore/colorStore';
import i18n from '../../Language/Parts/i18n';
import {PrsStore} from '../../../mobxStore/prsStore';

const UpdateModalInputProperty = () => {
  return (
    <View>
      <View style={{alignItems: 'center', padding: 1, marginBottom: 2}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: ColorStore().black.get(),
          }}>
          {i18n.get('comment')}
        </Text>
        <TextInput
          value={PrsStore().comment.get()}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'cornflowerblue',
            color: ColorStore().black.get(),
            justifyContent: 'center',
          }}
          placeholder={i18n.get('comment')}
          onChangeText={PrsStore().setComment}
        />
      </View>
      <View style={{alignItems: 'center', padding: 1, marginBottom: 2}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: ColorStore().black.get(),
          }}>
          {i18n.get('link')}
        </Text>
        <TextInput
          value={PrsStore().link.get()}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'cornflowerblue',
            color: ColorStore().black.get(),
            justifyContent: 'center',
          }}
          placeholder={i18n.get('link')}
          onChangeText={PrsStore().setLink}
        />
      </View>
    </View>
  );
};

export default UpdateModalInputProperty;
