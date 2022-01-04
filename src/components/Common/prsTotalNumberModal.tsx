import React from 'react';
import {Modal, View, Text} from 'react-native';
import {PrsStore} from '../../mobxStore/prsStore';
import {observer} from 'mobx-react';
import {Colors} from '../Common/colors';

const PrsTotalNumberModal = observer(() => {
  return (
    <Modal visible={PrsStore().prsNumberModal.get()}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.prsNumberModalMainBackground,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: Colors.prsNumberModalSecondaryBackground,
            width: '80%',
            height: 70,
            borderWidth: 1,
            borderRadius: 25,
            borderColor: Colors.prsNumberModalBorder,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: Colors.prsNumberModalText,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Number Of Prs is : {PrsStore().prsTotalNumber.get()}
          </Text>
        </View>
      </View>
    </Modal>
  );
});

export default PrsTotalNumberModal;
