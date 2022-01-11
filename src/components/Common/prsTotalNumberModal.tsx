import React from 'react';
import {View, Text} from 'react-native';
import {PrsStore} from '../../mobxStore/prs-store';
import {observer} from 'mobx-react';
import {Colors} from '../Common/colors';
import Et3Theme from '../Common/getTheme';

const PrsTotalNumberModal = observer(() => {
  return (
    <View
      style={{
        alignItems: 'flex-end',
        backgroundColor: Colors.GRAY,
      }}>
      {PrsStore().prsNumberModal.get() && (
        <View
          style={{
            backgroundColor: Colors.GRAY,
            height: Et3Theme().getAppUnits.get().childY * 8,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: Et3Theme().getAppUnits.get().childX * 4,
            borderWidth: 2,
            borderTopWidth: 0,
            borderColor: Colors.GREEN,
            width: Et3Theme().getAppUnits.get().childX * 65,
            borderRadius: 25,
          }}>
          <Text
            style={{
              color: Colors.GREEN,
              fontSize: Et3Theme().getThemeData.get().getKhFontSize(6),
              elevation: 1,
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}>
            Number of Prs is : {PrsStore().prsTotalNumber.get()}
          </Text>
        </View>
      )}
    </View>
  );
});

export default PrsTotalNumberModal;
