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
  );
};

export default UpdateModalInputProperty;
