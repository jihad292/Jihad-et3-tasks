import React from 'react';
import {StyleSheet, View} from 'react-native';
import PrsList from './Parts/prsList';
import {PrsStore} from '../../mobxStore/prsStore';
import {observer} from 'mobx-react';
import {runInAction} from 'mobx';
import HeadPage from './Parts/headPage';
import UpdateModal from './Parts/updateModal';
import {ButtonHandler} from '../../languageHandler/buttonHandler';
import sortBy from 'lodash.sortby';

const PrsScreen = observer(() => {

  async function handleSort() {
    if (PrsStore.sortState.get()) {
      runInAction(() => {
        PrsStore.setSortState(false);
        PrsStore.setSortStateText('ASC');
        let prsASC = sortBy(PrsStore.prs, ['type', 'date']);
        PrsStore.setPrs(prsASC);
      });
    } else {
      runInAction(() => {
        PrsStore.setSortState(true);
        PrsStore.setSortStateText('DESC');
        let prsDesc = sortBy(PrsStore.prs, ['type', 'date']).reverse();
        PrsStore.setPrs(prsDesc);
      });
    }
  }

  async function handleChangeText(value: string) {
    PrsStore.setSearchStateText(value);
    if (PrsStore.searchStateText.get() === '') {
      runInAction(() => {
        PrsStore.setSearchState(false);
      });
    }
    if (PrsStore.searchStateText.get() !== '') {
      runInAction(() => {
        PrsStore.setSearchState(true);
        let test : any = PrsStore.prs.filter(pr => {
          return pr.comment
            .toLowerCase()
            .includes(PrsStore.searchStateText.get().toLowerCase());
        });
        PrsStore.setSearchArray(test);
      });
    }
  }

  async function handleLanguage() {
    if (PrsStore.languageState.get()) {
      PrsStore.setLanguageState(false);
      PrsStore.setLanguageStateText('English');
    } else {
      PrsStore.setLanguageState(true);
      PrsStore.setLanguageStateText('Arabic');
      
    }
  }
  return (
    <>
      <ButtonHandler
        text={PrsStore.languageStateText.get()}
        handleLanguage={handleLanguage}
      />
      <HeadPage
        handleSort={handleSort}
        name={PrsStore.sortStateText.get()}
        value={PrsStore.searchStateText.get()}
        handleChange={handleChangeText}
      />

      <View style={styles.container}>
        <UpdateModal handleModal={PrsStore.updateModalStatus.get()} />
        <PrsList prsStore={PrsStore} />
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
