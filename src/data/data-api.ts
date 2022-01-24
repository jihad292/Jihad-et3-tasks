import {PrsStore} from '../mobxStore/prs-store';
import {runInAction} from 'mobx';
import generalApi from './data-api-helper';

const issueData = {
  async fetchIssuesFromServer() {
    return fetch('http://192.168.1.107:3333/issues')
      .then(response => response.json())
      .then(json => {
        runInAction(() => {
          PrsStore().prsData.set([]);
          for (let i = 0; i < json.length; i++) {
            let ByStatus = 'No';
            let AhStatus = 'No';
            let HtStatus = 'No';
            let reviewByBY = false;
            let reviewByAH = false;
            let reviewByHT = false;
            if (json[i].by_state === 1) {
              ByStatus = 'Yes';
              reviewByBY = true;
            }
            if (json[i].ah_state === 1) {
              AhStatus = 'Yes';
              reviewByAH = true;
            }
            if (json[i].ht_state === 1) {
              HtStatus = 'Yes';
              reviewByHT = true;
            }
            let newPr: prItem = {
              id: json[i].issue_id,
              comment: json[i].comment,
              link: json[i].link,
              se: json[i].se,
              platform: json[i].platform,
              size: json[i].size,
              difficulty: json[i].difficulty,
              status: json[i].status,
              version: json[i].version,
              date: json[i].date,
              dateS: json[i].date,
              ByStatus: ByStatus,
              AhStatus: AhStatus,
              HtStatus: HtStatus,
              reviewByBY: reviewByBY,
              reviewByAH: reviewByAH,
              reviewByHT: reviewByHT,
            };

            PrsStore().prsData.get().push(newPr);
          }
          PrsStore().prs.set(PrsStore().prsData.get());
          PrsStore().flatListRender.set(!PrsStore().flatListRender.get());
          PrsStore().prsTotalNumber.set(json.length);
          PrsStore().storePrs(); //save it to async storage
          PrsStore().retrivePrs(); //update the app from the new async storage
        });
      })
      .catch(error => {
        console.error(error);
      });
  },

  async addIssueOnServer() {
    generalApi('http://192.168.1.107:3333/issues/createIssue', 'POST');
  },

  async updateIssueOnServer() {
    generalApi('http://192.168.1.107:3333/issues/updateIssue', 'PUT');
  },

  async deleteIssueOnServer() {
    generalApi(
      `http://192.168.1.107:3333/issues//deleteIssue/${PrsStore().id.get()}`,
      'PUT',
    );
  },
};

export default issueData;
