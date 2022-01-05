import memoize from 'lodash/memoize';
import {runInAction, observable} from 'mobx';
import {PrsStore} from './prs-store';

export class SearchStoreImpl {
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

  setSearchArray = (value: prItem[]) => {
    runInAction(() => {
      this.searchArray.set(value);
    });
  };

  handleChangeText = (value: string) => {
    runInAction(() => {
      this.setSearchStateText(value);
      if (this.searchStateText.get() === '') {
        runInAction(() => {
          this.setSearchState(false);
        });
      }
      if (this.searchStateText.get() !== '') {
        runInAction(() => {
          this.setSearchState(true);
          let test: prItem[] = PrsStore().prs.get().filter(pr => {
            return pr.comment
              .toLowerCase()
              .includes(this.searchStateText.get().toLowerCase());
          });
          this.setSearchArray(test);
        });
      }
    });
  };
}

export const SearchStore = memoize(() => {
  return new SearchStoreImpl();
});

export default {SearchStore};