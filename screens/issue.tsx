import React,{ useState } from "react";
import { View, Text,  TextInput, Alert } from 'react-native';
import { prsStoreImpl,PrsStore} from '../mobxStore/prsStore';
import { SE_Array,Platform_Array,Size_Array,Difficulty_Array,Status_Array,Release_Version_Array } from '../static/prProperties'
import {issueStyle} from '../style/issueStyle';
import IssueDropdownItem from '../components/issueDropdownItem'
import IssueCheckBoxItem from '../components/issueCheckBoxItem'
import Calender from '../components/calender';
import AddButton from '../components/addButton'

 
interface issueProps{    
    prsStore : prsStoreImpl,
}  

const IssueScreen : React.FC<issueProps> = (({prsStore}) => {
    const [reviewByBY,setReviewByBY] = useState<boolean>(false);
    const [reviewByAH,setReviewByAH] = useState<boolean>(false);
    const [reviewByHT,setReviewByHT] = useState<boolean>(false);
    prsStore = PrsStore;

    const pressHandler = ()=>{
        prsStore.setReviewByBY(reviewByBY);
        prsStore.setReviewByAH(reviewByAH);
        prsStore.setReviewByHT(reviewByHT);
        prsStore.addPr();
        prsStore.prs = prsStore.prs; //this helps us to refresh Prs page
    }
    
    return(
        <View style={issueStyle.container}> 
            <View><Calender /></View>

            <View style={issueStyle.inputTextContainer}>
                <Text style={issueStyle.itemProperty}>Add Comment</Text>
                <TextInput style={issueStyle.textInput} placeholder='add Comment'  onChangeText={prsStore.setComment} />
            </View>
                
             <View style={issueStyle.inputTextContainer}>
                <Text style={issueStyle.itemProperty}>Add Link</Text>
                <TextInput style={issueStyle.textInput} placeholder='add Link'  onChangeText={prsStore.setLink} />
             </View>    

            <View style={issueStyle.dropdownDiv}>
            <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem data={SE_Array} setItem={prsStore.setSE} propertyDefinition='SE' />
            </View>

            <View style={issueStyle.dropdownProperty}> 
                <IssueDropdownItem data={Platform_Array} setItem={prsStore.setPlatform} propertyDefinition='Platform' />
            </View>
            </View>

             <View style={issueStyle.dropdownDiv}>
             <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem data={Size_Array} setItem={prsStore.setSize} propertyDefinition='Size' />
             </View>

              <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem data={Difficulty_Array} setItem={prsStore.setDifficulty} propertyDefinition='Difficulty' />
              </View>
             </View>

            <View style={issueStyle.dropdownDiv}>
            <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem data={Status_Array} setItem={prsStore.setStatus} propertyDefinition='Status' />
            </View>

                <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem data={Release_Version_Array} setItem={prsStore.setVersion} propertyDefinition='Version' />
                </View> 
            </View>    

            <View style={issueStyle.checkBoxesDiv}>
            <View style={issueStyle.checkboxProperty}>
                <IssueCheckBoxItem propertyText='Review by By' reviewBy={reviewByBY} setReview={setReviewByBY} />
            </View>

            <View style={issueStyle.checkboxProperty}>
                <IssueCheckBoxItem propertyText='Review by AH'  reviewBy={reviewByAH} setReview={setReviewByAH}  />
            </View>

            <View style={issueStyle.checkboxProperty}>
                <IssueCheckBoxItem propertyText='Review by HT' reviewBy={reviewByHT}  setReview={setReviewByHT}  />
            </View>
            </View>
            <View style={issueStyle.addButtonDiv}>
               <AddButton text='Add' pressHandler={pressHandler} />
            </View>  
        </View>
    )
})
  
export default IssueScreen
