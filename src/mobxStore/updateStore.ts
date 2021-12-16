import memoize from "lodash/memoize";
import {runInAction, observable} from 'mobx';

export class updateStoreImpl{
    //update Modal
  updateModalStatus = observable.box<boolean>(false);
  setUpdateModalstatus = (value: boolean) => {
    runInAction(() => {
      this.updateModalStatus.set(value);
    });
  };
}

export const UpdateStore = memoize(()=>{
    return new updateStoreImpl;
});

export default { UpdateStore }
