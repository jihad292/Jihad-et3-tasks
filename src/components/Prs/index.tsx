import React from 'react';
import {StyleSheet, View} from 'react-native';
import PrsList from './Parts/prsList';
import {observer} from 'mobx-react';
import HeadPage from './Parts/headPage';
import UpdateModal from './Parts/updateModal';
import {UpdateStore} from '../../mobxStore/updateStore';
import {SearchStore} from '../../mobxStore/prsSearchStore';
import {SortStore} from '../../mobxStore/prsSortStore';

const PrsScreen = observer(() => {
  
  return (
    <>
      <HeadPage
        handleSort={SortStore().handleSort}
        name={SortStore().sortStateText.get()}
        value={SearchStore().searchStateText.get()}
        handleChange={SearchStore().handleChangeText}
      />

      <View style={styles.container}>
        <UpdateModal handleModal={UpdateStore().updateModalStatus.get()} />
        <PrsList />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PrsScreen;
