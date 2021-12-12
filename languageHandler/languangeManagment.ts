import React from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PrsStore } from "../mobxStore/prsStore";

export const languangeManagmentAr = () => {
    AsyncStorage.getItem('commentAr').then(value=>{
        PrsStore.setCommentString(value);
    })
    AsyncStorage.getItem('linkAr').then(value=>{
        PrsStore.setLinkString(value);
    })
}   

export const languangeManagmentEng = () => {
    AsyncStorage.getItem('commentEng').then(value=>{
        PrsStore.setCommentString(value);
    })
    AsyncStorage.getItem('linkEng').then(value=>{
        PrsStore.setLinkString(value);
    })
}
