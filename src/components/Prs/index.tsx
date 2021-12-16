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
import {LanguageStore} from '../../mobxStore/languageStore';
import {UpdateStore} from '../../mobxStore/updateStore';
import {SearchStore} from '../../mobxStore/prsSearchStore';
import {SortStore} from '../../mobxStore/prsSortStore';

const PrsScreen = observer(() => {
  async function handleSort() {
    if (SortStore().sortState.get()) {
      runInAction(() => {
        SortStore().setSortState(false);
        SortStore().setSortStateText('ASC');
        let prsASC = sortBy(PrsStore().prs, ['type', 'date']);
        PrsStore().setPrs(prsASC);
      });
    } else {
      runInAction(() => {
        SortStore().setSortState(true);
        SortStore().setSortStateText('DESC');
        let prsDesc = sortBy(PrsStore().prs, ['type', 'date']).reverse();
        PrsStore().setPrs(prsDesc);
      });
    }
  }

  async function handleChangeText(value: string) {
    SearchStore().setSearchStateText(value);
    if (SearchStore().searchStateText.get() === '') {
      runInAction(() => {
        SearchStore().setSearchState(false);
      });
    }
    if (SearchStore().searchStateText.get() !== '') {
      runInAction(() => {
        SearchStore().setSearchState(true);
        let test: any = PrsStore().prs.filter(pr => {
          return pr.comment
            .toLowerCase()
            .includes(SearchStore().searchStateText.get().toLowerCase());
        });
        SearchStore().setSearchArray(test);
      });
    }
  }

  async function handleLanguage() {
    if (LanguageStore().languageState.get()) {
      LanguageStore().setLanguageState(false);
      LanguageStore().setLanguageStateText('English');
    } else {
      LanguageStore().setLanguageState(true);
      LanguageStore().setLanguageStateText('Arabic');
    }
  }
  return (
    <>
      <ButtonHandler
        text={LanguageStore().languageStateText.get()}
        handleLanguage={handleLanguage}
      />
      <HeadPage
        handleSort={handleSort}
        name={SortStore().sortStateText.get()}
        value={SearchStore().searchStateText.get()}
        handleChange={handleChangeText}
      />

      <View style={styles.container}>
        <UpdateModal handleModal={UpdateStore().updateModalStatus.get()} />
        <PrsList prsStore={PrsStore()} />
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
