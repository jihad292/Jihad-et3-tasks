import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStorage = () => {
    // AsyncStorage.clear();
    AsyncStorage.setItem('test','this is test222');
    AsyncStorage.setItem('commentAr','تعليق');
}

export default asyncStorage