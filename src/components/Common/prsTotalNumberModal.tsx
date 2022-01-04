import React from 'react';
import {Modal, View, Text} from 'react-native';
import {PrsStore} from '../../mobxStore/prsStore';
import {observer} from 'mobx-react';

const PrsTotalNumberModal = observer(() => {
  return (
    <Modal visible={PrsStore().prsNumberModal.get()}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'cadetblue',
            width: '80%',
            height: 70,
            borderWidth: 1,
            borderRadius: 25,
            borderColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'red', fontSize: 25, fontWeight: 'bold'}}>
            Number Of Prs is : {PrsStore().prsTotalNumber.get()}
          </Text>
        </View>
      </View>
    </Modal>
  );
});

export default PrsTotalNumberModal;
