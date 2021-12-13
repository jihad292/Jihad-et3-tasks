import React from 'react';
import { View, Text,Modal,TouchableOpacity,StyleSheet, TextInput  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PrsStore} from '../mobxStore/prsStore' ;
import { runInAction } from "mobx";
import {storeReset} from '../mobxStore/resetPrsStore';
import {issueStyle} from '../style/issueStyle';
import {updateStyle} from '../style/updateStyle'
import { observer } from 'mobx-react';
import { SE_Array,Platform_Array,Size_Array,Difficulty_Array,Status_Array,Release_Version_Array } from '../../static/prProperties'
import IssueDropdownItem from './issueDropdownItem'
import IssueCheckBoxItem from './issueCheckBoxItem'

interface modalProps{
    visible: boolean
}

const ModalForm : React.FC<modalProps> = observer((props) =>{
    const closeModal = ()=>{
        runInAction(
            ()=>{
                PrsStore.updateModalStatus = false;
                storeReset();
            }
        )
    }
    return(
        <Modal transparent visible={props.visible}>
            <View style={updateStyle.modal}>
                <View style={updateStyle.modalContainer}>
                 <View style={updateStyle.closeModalDiv}>
                 <Text style={updateStyle.issueIdText}>Update issue with id : {PrsStore.id}</Text>
                   <View style={updateStyle.closeIcon}>
                   <TouchableOpacity onPress={closeModal}>
                     <FontAwesome5 name={'window-close'} size={23} color={'olivedrab'} />
                   </TouchableOpacity>
                   </View>
                 </View>
                 
                  <View style={updateStyle.propertiesDiv}>
                  <View style={issueStyle.inputTextContainer}>
                    <Text style={issueStyle.itemProperty}>Update Comment</Text>
                    <TextInput value={PrsStore.comment} style={issueStyle.textInput}  placeholder='Update Comment'  onChangeText={PrsStore.setComment} />
                 </View>

                 <View style={issueStyle.inputTextContainer}>
                    <Text style={issueStyle.itemProperty}>Update Link</Text>
                    <TextInput value={PrsStore.link} style={issueStyle.textInput} placeholder='Update Link'  onChangeText={PrsStore.setLink} />
                </View> 

                <View style={updateStyle.secondaryDiv}>
                    <View style={updateStyle.secondaryDivFirst}>
                     <IssueDropdownItem defaultValue={PrsStore.se} data={SE_Array} setItem={PrsStore.setSE} propertyDefinition='SE' />  
                     <IssueDropdownItem defaultValue={PrsStore.platform} data={Platform_Array} setItem={PrsStore.setPlatform} propertyDefinition='Platform' />
                     <IssueDropdownItem defaultValue={PrsStore.size} data={Size_Array} setItem={PrsStore.setSize} propertyDefinition='Size' />
                     <IssueDropdownItem defaultValue={PrsStore.difficulty} data={Difficulty_Array} setItem={PrsStore.setDifficulty} propertyDefinition='Difficulty' />
                     <IssueDropdownItem defaultValue={PrsStore.status} data={Status_Array} setItem={PrsStore.setStatus} propertyDefinition='Status' />
                     <IssueDropdownItem defaultValue={PrsStore.version} data={Release_Version_Array} setItem={PrsStore.setVersion} propertyDefinition='Version' />
                    </View>

                    <View style={updateStyle.secondaryDivSecond}>
                     <IssueCheckBoxItem propertyText='Review by By' reviewBy={PrsStore.reviewByBY} setReview={PrsStore.setReviewByBY} />
                     <IssueCheckBoxItem propertyText='Review by AH'  reviewBy={PrsStore.reviewByAH} setReview={PrsStore.setReviewByAH}  />
                     <IssueCheckBoxItem propertyText='Review by HT' reviewBy={PrsStore.reviewByHT}  setReview={PrsStore.setReviewByHT}  />
                    </View>
                </View>
                
                  </View>
                </View>
            </View>
        </Modal>
    )
})

interface updateProps{
    handleModal : boolean
}

const UpdateModal: React.FC<updateProps> = (props) => {
    return(
        <View>
        <ModalForm visible={props.handleModal} />
        </View>
    )
}

export default UpdateModal