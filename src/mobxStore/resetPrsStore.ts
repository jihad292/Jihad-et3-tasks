import {PrsStore} from './prsStore';

export async function storeReset() {
  let prsStore = PrsStore;
  prsStore.setComment('');
  prsStore.setLink('');
  prsStore.setSE('AH');
  prsStore.setPlatform('mobile-client');
  prsStore.setSize('Easy');
  prsStore.setDifficulty('Easy');
  prsStore.setStatus('Merged');
  prsStore.setVersion('8.1.0');
  prsStore.setReviewByBY(false);
  prsStore.setReviewByAH(false);
  prsStore.setReviewByHT(false);
}
