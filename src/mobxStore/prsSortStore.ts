import memoize from 'lodash/memoize';
import {runInAction, observable} from 'mobx';
import sortBy from 'lodash.sortby';
import {PrsStore} from './prsStore';

export class sortStoreImpl {
  sortState = observable.box<boolean>(false);
  sortStateText = observable.box<string>('ASC');

  setSortState = (value: boolean) => {
    runInAction(() => {
      this.sortState.set(value);
    });
  };

  setSortStateText = (value: string) => {
    runInAction(() => {
      this.sortStateText.set(value);
    });
  };

  handleSort = () => {
    runInAction(() => {
      if (this.sortState.get()) {
        runInAction(() => {
          this.setSortState(false);
          this.setSortStateText('ASC');
          let prsASC = sortBy(PrsStore().prs, ['type', 'date']);
          PrsStore().setPrs(prsASC);
        });
      } else {
        runInAction(() => {
          this.setSortState(true);
          this.setSortStateText('DESC');
          let prsDesc = sortBy(PrsStore().prs, ['type', 'date']).reverse();
          PrsStore().setPrs(prsDesc);
        });
      }
    });
  };
}

export const SortStore = memoize(() => {
  return new sortStoreImpl();
});

export default {SortStore};
