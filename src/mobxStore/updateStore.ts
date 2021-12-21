import memoize from 'lodash/memoize';
import {runInAction, observable} from 'mobx';
import {PrsStore} from './prsStore';

export class UpdateStoreImpl {
  updateModalStatus = observable.box<boolean>(false);
  updatableItem = observable.box<prItem>();

  setUpdateModalstatus = (value: boolean) => {
    runInAction(() => {
      this.updateModalStatus.set(value);
    });
  };

  setUpdatablItem = (value: prItem) => {
    runInAction(() => {
      this.updatableItem.set(value);
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
      this.setUpdatablItem(props);
    });
  };

  closeModal = () => {
    PrsStore().resetStore();
    runInAction(() => {
      this.updateModalStatus.set(false);
    });
  };

  handleUpdate = (props: prItem) => {
    runInAction(() => {
      PrsStore().addChecker();
      if (
        PrsStore().comment.get() !== '' &&
        PrsStore().link.get() !== '' &&
        PrsStore().se.get() !== '' &&
        PrsStore().platform.get() !== '' &&
        PrsStore().difficulty.get() !== '' &&
        PrsStore().status.get() !== '' &&
        PrsStore().version.get() !== ''
      ) {
        let test = PrsStore().prs.map(pr => {
          if (pr.id === props.id) {
            pr.comment = PrsStore().comment.get();
            pr.link = PrsStore().link.get();
            pr.se = PrsStore().se.get();
            pr.difficulty = PrsStore().difficulty.get();
            pr.platform = PrsStore().platform.get();
            pr.size = PrsStore().size.get();
            pr.status = PrsStore().status.get();
            pr.version = PrsStore().version.get();
            if(PrsStore().reviewByBY.get() === false){
              pr.ByStatus = 'No';
              pr.reviewByBY = false
            }
            if(PrsStore().reviewByBY.get() === true){
              pr.ByStatus = 'Yes';
              pr.reviewByBY = true;
            }
            if(PrsStore().reviewByAH.get() === false){
              pr.AhStatus = 'No';
              pr.reviewByAH = false
            }
            if(PrsStore().reviewByAH.get() === true){
              pr.AhStatus = 'Yes';
              pr.reviewByAH = true;
            }
            if(PrsStore().reviewByHT.get() === false){
              pr.HtStatus = 'No';
              pr.reviewByHT = false
            }
            if(PrsStore().reviewByHT.get() === true){
              pr.HtStatus = 'Yes';
              pr.reviewByHT = true;
            }
            return pr;
          }
          return pr;
        });
        PrsStore().setPrs(test);
        PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
        this.closeModal();
      }
    });
  };
}

export const UpdateStore = memoize(() => {
  return new UpdateStoreImpl();
});

export default {UpdateStore};
