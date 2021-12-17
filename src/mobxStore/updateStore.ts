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

  openUpdateModal = (props: prItem) => {
    runInAction(() => {
      UpdateStore().updateModalStatus.set(true);
      PrsStore().setId(props.id);
      PrsStore().setComment(props.comment);
      PrsStore().setLink(props.link);
      PrsStore().setSE(props.se);
      PrsStore().setDifficulty(props.difficulty);
      PrsStore().setPlatform(props.platform);
      PrsStore().setSize(props.size);
      PrsStore().setStatus(props.status);
      PrsStore().setVersion(props.version);
      PrsStore().setReviewByBY(props.reviewByBY);
      PrsStore().setReviewByAH(props.reviewByAH);
      PrsStore().setReviewByHT(props.reviewByHT);
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
