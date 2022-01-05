import React from 'react';
import {View, Text} from 'react-native';
import {PrsStore} from '../../mobxStore/prsStore';
import {observer} from 'mobx-react';
import {Colors} from '../Common/colors';

const PrsTotalNumberModal = observer(() => {
  return (
    <View >
      {PrsStore().prsNumberModal.get() && (
        <View
          style={{
            backgroundColor: Colors.prsNumberModalMainBackground,
            height: 21,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 10,
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
