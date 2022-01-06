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
        backgroundColor: Colors.prsNumberModalMainBackground,
      }}>
      {PrsStore().prsNumberModal.get() && (
        <View
          style={{
            backgroundColor: Colors.prsNumberModalMainBackground,
            height: 25,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 10,
            borderWidth: 2,
            borderTopWidth: 0,
            borderColor: Colors.prsNumberModalBorder,
            width: '60%',
            borderRadius: 25,
          }}>
          <Text
            style={{
              color: Colors.prsNumberModalText,
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
