import AsyncStorage from '@react-native-async-storage/async-storage';
import {PrsStore} from '../mobxStore/prsStore';

export async function languangeManagmentAr() {
  await AsyncStorage.getItem('commentAr').then(value => {
    PrsStore.setCommentString(value);
  });
  await AsyncStorage.getItem('linkAr').then(value => {
    PrsStore.setLinkString(value);
  });
}

export async function languangeManagmentEng() {
  await AsyncStorage.getItem('commentEng').then(value => {
    PrsStore.setCommentString(value);
  });
  await AsyncStorage.getItem('linkEng').then(value => {
    PrsStore.setLinkString(value);
  });
}
