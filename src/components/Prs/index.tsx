import React from 'react';
import {View} from 'react-native';
import PrsList from './Parts/prsList';
import {observer} from 'mobx-react';
import HeadPage from './Parts/headPage';
import UpdateModal from './Parts/updateModal';
import {UpdateStore} from '../../mobxStore/update-store';
import {SearchStore} from '../../mobxStore/prs-search-store';
import {SortStore} from '../../mobxStore/prs-sort-store';
const PrsScreen = observer(() => {
  return (
    <>
      <HeadPage
        handleSort={SortStore().handleSort}
        name={SortStore().sortStateText.get()}
        value={SearchStore().searchStateText.get()}
        handleChange={SearchStore().handleChangeText}
      />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <UpdateModal handleModal={UpdateStore().updateModalStatus.get()} />
        <PrsList />
      </View>
    </>
  );
});

export default PrsScreen;
