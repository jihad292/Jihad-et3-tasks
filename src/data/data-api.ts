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
          for (let i = 0; i < json.issues.length; i++) {
            let ByStatus = 'No';
            let AhStatus = 'No';
            let HtStatus = 'No';
            let reviewByBY = false;
            let reviewByAH = false;
            let reviewByHT = false;
            if (json.issues[i].by_state === 1) {
              ByStatus = 'Yes';
              reviewByBY = true;
            }
            if (json.issues[i].ah_state === 1) {
              AhStatus = 'Yes';
              reviewByAH = true;
            }
            if (json.issues[i].ht_state === 1) {
              HtStatus = 'Yes';
              reviewByHT = true;
            }
            let newPr: prItem = {
              id: json.issues[i].issue_id,
              comment: json.issues[i].comment,
              link: json.issues[i].link,
              se: json.issues[i].se,
              platform: json.issues[i].platform,
              size: json.issues[i].size,
              difficulty: json.issues[i].difficulty,
              status: json.issues[i].status,
              version: json.issues[i].version,
              date: json.issues[i].date,
              dateS: json.issues[i].date,
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
          PrsStore().prsTotalNumber.set(json.issues.length);
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
    generalApi('http://192.168.1.107:3333/issues/deleteIssue', 'PUT');
  },
};

export default issueData;
