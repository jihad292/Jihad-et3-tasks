import memoize from 'lodash/memoize';
import {runInAction, observable} from 'mobx';
import {PrsStore} from './prsStore';

export class updateStoreImpl {
  updateModalStatus = observable.box<boolean>(false);
  setUpdateModalstatus = (value: boolean) => {
    runInAction(() => {
      this.updateModalStatus.set(value);
    });
  };
  closeModal = () => {
    PrsStore().resetStore();
    runInAction(() => {
      this.updateModalStatus.set(false);
    });
  };
}

export const UpdateStore = memoize(() => {
  return new updateStoreImpl();
});

export default {UpdateStore};
