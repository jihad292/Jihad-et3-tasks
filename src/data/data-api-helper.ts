import {PrsStore} from '../mobxStore/prs-store';

const generalApi = (api: string, method: string) => {
  const booleanNumberReturner = (state: boolean): number => {
    return state ? 1 : 0;
  };
  fetch(api, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      issue_id: PrsStore().id.get(),
      comment: PrsStore().comment.get(),
      link: PrsStore().link.get(),
      se: PrsStore().se.get(),
      platform: PrsStore().platform.get(),
      size: PrsStore().size.get(),
      difficulty: PrsStore().difficulty.get(),
      status: PrsStore().status.get(),
      version: PrsStore().version.get(),
      by_state: booleanNumberReturner(PrsStore().reviewByBY.get()),
      ah_state: booleanNumberReturner(PrsStore().reviewByAH.get()),
      ht_state: booleanNumberReturner(PrsStore().reviewByHT.get()),
      date: '2022-1-19',
      is_deleted: 0,
    }),
  }).catch(error => {
    console.log(error);
  });
};

export default generalApi;
