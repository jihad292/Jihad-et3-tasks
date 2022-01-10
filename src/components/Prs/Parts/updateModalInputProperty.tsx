import React from 'react';
import {View, Text, TextInput} from 'react-native';
import i18n from '../../Language/Parts/i18n';
import {PrsStore} from '../../../mobxStore/prs-store';
import {Colors} from '../../Common/colors';
import {LanguageStore} from '../../../mobxStore/language-store';
import Et3Theme from '../../Common/getTheme';

const UpdateModalInputProperty = () => {
  return (
    <View style={{paddingHorizontal: 3}}>
      <View
        style={{
          flexDirection: LanguageStore().flexDirection.get(),
          justifyContent: 'flex-start',
          height: Et3Theme().getAppUnits.get().initialHeight * 0.09,
        }}>
        <View style={{paddingHorizontal: 4, justifyContent: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: Colors.BLACK,
            }}>
            {i18n.get('comment')}
          </Text>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <TextInput
            value={PrsStore().comment.get()}
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Colors.BLUE,
              color: Colors.BLACK,
            }}
            placeholder={i18n.get('comment')}
            onChangeText={PrsStore().setComment}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: LanguageStore().flexDirection.get(),
          height: Et3Theme().getAppUnits.get().initialHeight * 0.09,
        }}>
        <View style={{paddingHorizontal: 4, justifyContent: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: Colors.BLACK,
            }}>
            {i18n.get('link')}
          </Text>
        </View>
        <TextInput
          value={PrsStore().link.get()}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: Colors.BLUE,
            color: Colors.BLACK,
          }}
          placeholder={i18n.get('link')}
          onChangeText={PrsStore().setLink}
        />
      </View>
    </View>
  );
};

export default UpdateModalInputProperty;
