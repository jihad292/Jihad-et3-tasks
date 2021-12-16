import memoize from "lodash/memoize";
import { runInAction,observable } from "mobx";

export class sortStoreImpl{
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
}

export const SortStore = memoize(()=>{
    return new sortStoreImpl;
});

export default { SortStore }