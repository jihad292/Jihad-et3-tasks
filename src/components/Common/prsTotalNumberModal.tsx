import React from 'react';
import {Modal, StyleSheet, View, Text} from 'react-native';
import {PrsStore} from '../../mobxStore/prsStore';
import {observer} from 'mobx-react';

const PrsTotalNumberModal = observer(() => {
  return (
    <Modal visible={PrsStore().prsNumberModal.get()}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>
            Number Of Prs is : {PrsStore().prsTotalNumber.get()}
          </Text>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'cadetblue',
    width: '80%',
    height: 70,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default PrsTotalNumberModal;
