import {PrsStore} from '../../../mobxStore/prsStore';
import {Alert} from 'react-native';

export const addIssueChecker = () => {
  let prsStore = PrsStore;
  if (prsStore.comment.get() === '') {
    Alert.alert('Please enter a Comment');
  }
  if (prsStore.link.get() === '') {
    Alert.alert('Please choose a Link');
  }
  if (prsStore.se.get() === '') {
    Alert.alert('Please choose a SE');
  }
  if (prsStore.platform.get() === '') {
    Alert.alert('Please choose a Platform');
  }
  if (prsStore.size.get() === '') {
    Alert.alert('Please choose a Size');
  }
  if (prsStore.difficulty.get() === '') {
    Alert.alert('Please choose a Difficulty');
  }
  if (prsStore.status.get() === '') {
    Alert.alert('Please choose a status');
  }
  if (prsStore.version.get() === '') {
    Alert.alert('Please choose a Version');
  }
  if (prsStore.dateS.get() === '') {
    Alert.alert('Please choose a Date');
  }
};
