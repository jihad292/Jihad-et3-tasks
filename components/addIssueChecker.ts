import { PrsStore } from "../mobxStore/prsStore";
import {Alert} from 'react-native'

export const addIssueChecker = () => {
            let prsStore = PrsStore
                if(prsStore.comment === ''){Alert.alert('Please enter a Comment')}
                if(prsStore.link === ''){Alert.alert('Please choose a Link')}
                if(prsStore.se === ''){Alert.alert('Please choose a SE')}
                if(prsStore.platform === ''){Alert.alert('Please choose a Platform')}
                if(prsStore.size === ''){Alert.alert('Please choose a Size')}
                if(prsStore.difficulty === ''){Alert.alert('Please choose a Difficulty')}
                if(prsStore.status === ''){Alert.alert('Please choose a status')}
                if(prsStore.version === ''){Alert.alert('Please choose a Version')}
                if(prsStore.dateS === ''){Alert.alert('Please choose a Date')}
}
