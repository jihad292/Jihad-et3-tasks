import React,{ useState } from "react";
import { View, Text,  TextInput, Alert } from 'react-native';
import { prsStoreImpl,PrsStore} from '../mobxStore/prsStore';
import { runInAction } from "mobx";
import { observer } from 'mobx-react';
import { SE_Array,Platform_Array,Size_Array,Difficulty_Array,Status_Array,Release_Version_Array } from '../static/prProperties'
import {issueStyle} from '../style/issueStyle';
import IssueDropdownItem from '../components/issueDropdownItem'
import IssueCheckBoxItem from '../components/issueCheckBoxItem'
import Calender from '../components/calender';
import AddButton from '../components/addButton';
import {storeReset} from '../mobxStore/resetPrsStore';
import {addIssueChecker} from '../components/addIssueChecker'
  
 
interface issueProps{    
    prsStore : prsStoreImpl,
}  

const IssueScreen : React.FC<issueProps> = observer(({prsStore}) => {
    prsStore = PrsStore;

    const pressHandler = ()=>{
        runInAction(  //for strict mode in mobX
            ()=>{
                addIssueChecker();
                if(prsStore.comment !== '' && prsStore.link !== '' && prsStore.se !== '' &&
                    prsStore.platform !== '' && prsStore.difficulty !== '' 
                    && prsStore.status !== '' && prsStore.version !== '' && prsStore.dateS !== ''){
                                            prsStore.addPr();
                                            storeReset();
                }
                 }
        )
    }
    
    return(
        <>
        <View style={issueStyle.container}> 
            <View><Calender /></View>

            <View style={issueStyle.inputTextContainer}>
                <Text style={issueStyle.itemProperty}>Add Comment</Text>
                <TextInput value={prsStore.comment} style={issueStyle.textInput}  placeholder='add Comment'  onChangeText={prsStore.setComment} />
            </View>
                
             <View style={issueStyle.inputTextContainer}>
                <Text style={issueStyle.itemProperty}>Add Link</Text>
                <TextInput value={prsStore.link} style={issueStyle.textInput} placeholder='add Link'  onChangeText={prsStore.setLink} />
             </View>    

            <View style={issueStyle.dropdownDiv}>
            <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem defaultValue={prsStore.se} data={SE_Array} setItem={prsStore.setSE} propertyDefinition='SE' />
            </View>

            <View style={issueStyle.dropdownProperty}> 
                <IssueDropdownItem defaultValue={prsStore.platform} data={Platform_Array} setItem={prsStore.setPlatform} propertyDefinition='Platform' />
            </View>
            </View>

             <View style={issueStyle.dropdownDiv}>
             <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem defaultValue={prsStore.size} data={Size_Array} setItem={prsStore.setSize} propertyDefinition='Size' />
             </View>

              <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem defaultValue={prsStore.difficulty} data={Difficulty_Array} setItem={prsStore.setDifficulty} propertyDefinition='Difficulty' />
              </View>
             </View>

            <View style={issueStyle.dropdownDiv}>
            <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem defaultValue={prsStore.status} data={Status_Array} setItem={prsStore.setStatus} propertyDefinition='Status' />
            </View>

                <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem defaultValue={prsStore.version} data={Release_Version_Array} setItem={prsStore.setVersion} propertyDefinition='Version' />
                </View> 
            </View>    

            <View style={issueStyle.checkBoxesDiv}>
            <View style={issueStyle.checkboxProperty}>
                <IssueCheckBoxItem propertyText='Review by By' reviewBy={prsStore.reviewByBY} setReview={prsStore.setReviewByBY} />
            </View>

            <View style={issueStyle.checkboxProperty}>
                <IssueCheckBoxItem propertyText='Review by AH'  reviewBy={prsStore.reviewByAH} setReview={prsStore.setReviewByAH}  />
            </View>

            <View style={issueStyle.checkboxProperty}>
                <IssueCheckBoxItem propertyText='Review by HT' reviewBy={prsStore.reviewByHT}  setReview={prsStore.setReviewByHT}  />
            </View>
            </View>
            <View style={issueStyle.addButtonDiv}>
               <AddButton text='Add' pressHandler={pressHandler} />
            </View>  
        </View>
    </>)
})
  
export default IssueScreen
