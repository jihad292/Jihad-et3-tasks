import React from 'react';
import {View, Text} from 'react-native';
import {PrsStore} from '../../mobxStore/prs-store';
import {observer} from 'mobx-react';
import {Colors} from '../Common/colors';

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
            height: 25,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 10,
            borderWidth: 2,
            borderTopWidth: 0,
            borderColor: Colors.GREEN,
            width: '60%',
            borderRadius: 25,
          }}>
          <Text
            style={{
              color: Colors.GREEN,
              fontSize: 20,
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
