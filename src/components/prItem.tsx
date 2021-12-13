import React,{useState} from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { PrsStore} from '../mobxStore/prsStore';
import { action, runInAction } from "mobx";
import {prItemStyle} from '../style/prItemStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { observer } from 'mobx-react';

interface propertyProps{
    text: string,
    property: string | number ,
}
const Property:React.FC<propertyProps> = (props)=>{
    return(
        <View style={prItemStyle.propoertySection}>
                <Text style={prItemStyle.propertyText}>{props.text}:</Text>
                <Text style={prItemStyle.propertyData}>{props.property}</Text>
        </View>
    )
}

interface prItemProps{
    id: number, comment:string, link:string, se:string, platform:string, size:string,
    difficulty:string, status:string, version:string, byStatus:string, ahStatus:string,  
    htStatus:string, dateS:string, reviewByBY:boolean, reviewByAH:boolean, reviewByHT:boolean
}

const PrItem: React.FC<prItemProps> = observer((props) => {
    
    const deleteHandler = () =>{
        PrsStore.deletePr(props.id);

    }  

    const openUpdateModal = ()=>{
        runInAction(
            ()=>{
                // AsyncStorage.setItem('commentAr','تعليق');
                // AsyncStorage.setItem('linkAr','حلقة الوصل')
            //     AsyncStorage.setItem('commentEng','Comment');
            //    AsyncStorage.setItem('linkEng','Link') 
            //     console.log(PrsStore.linkString)
                PrsStore.updateModalStatus = true;
                PrsStore.setId(props.id);
                PrsStore.setComment(props.comment);
                PrsStore.setLink(props.link);
                PrsStore.setSE(props.se);
                PrsStore.setDifficulty(props.difficulty);
                PrsStore.setPlatform(props.platform);
                PrsStore.setSize(props.size);
                PrsStore.setStatus(props.status);
                PrsStore.setVersion(props.version);
                PrsStore.setReviewByBY(props.reviewByBY);
                PrsStore.setReviewByAH(props.reviewByAH);
                PrsStore.setReviewByHT(props.reviewByHT);

            }
        )  
    }
    
    return(
        <>
        <View style = {prItemStyle.container} >
            <View style={prItemStyle.smallPropertiesDiv}>
            <Property text='ID' property={props.id} />

            <View style={prItemStyle.actionSymbol}>
            <TouchableOpacity onPress={openUpdateModal}>
                <FontAwesome5 name={'pen-alt'} size={25} color='white' /></TouchableOpacity>
            </View>

            <View style={prItemStyle.actionSymbol}>
            <TouchableOpacity onPress={deleteHandler}>
                <FontAwesome5 name={'trash-alt'} size={25} color='white' /></TouchableOpacity>
            </View>
            
            </View>
            
            <Property text={''+PrsStore.commentString} property={props.comment} />
            <Property text={''+PrsStore.linkString} property={props.link} />

            <View style={prItemStyle.smallPropertiesDiv}>
            <Property text='SE' property={props.se} />
            <Property text='Difficulty' property={props.difficulty} />
            </View>

            <View style={prItemStyle.smallPropertiesDiv}>
            <Property text='Platform' property={props.platform} />
            <Property text='Size' property={props.size} />
            </View>

            <View style={prItemStyle.smallPropertiesDiv}>
            <Property text='Status' property={props.status} />
            <Property text='Version' property={props.version} />
            </View>

            <View style={prItemStyle.smallPropertiesDiv}>
            <Property text='Reaview by BY' property={props.byStatus} />
            <Property text='Reaview by AH' property={props.ahStatus} />
            <Property text='Reaview by HT' property={props.htStatus} />
            </View>
            
            <View style={prItemStyle.dateContainer}>
                <Text style={prItemStyle.dateContainerText}>Date : </Text>
                <Text style={prItemStyle.dateContainerText}>''+{props.dateS}</Text>
            </View>
            
        </View>
        </>
    )
    
})

export default PrItem