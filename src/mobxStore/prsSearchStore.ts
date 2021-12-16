import memoize from 'lodash/memoize';
import {runInAction, observable} from 'mobx';

export class searchStoreImpl {
  searchState = observable.box<boolean>(false);
  searchStateText = observable.box<string>('');
  searchArray = observable.box([]);
  setSearchState = (value: boolean) => {
    runInAction(() => {
      this.searchState.set(value);
    });
  };

  setSearchStateText = (value: string) => {
    runInAction(() => {
      this.searchStateText.set(value);
    });
  };

  setSearchArray = (value: []) => {
    runInAction(() => {
      this.searchArray.set(value);
    });
  };
}

export const SearchStore = memoize(() => {
  return new searchStoreImpl();
});

export default {SearchStore};
