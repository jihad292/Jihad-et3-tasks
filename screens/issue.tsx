import React,{ useState } from "react";
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { prsStoreImpl,PrsStore} from '../mobxStore/prsStore';
import { SE_Array,Platform_Array,Size_Array,Difficulty_Array,Status_Array,Release_Version_Array } from '../static/prProperties'
import {issueStyle} from '../style/issueStyle';
import IssueDropdownItem from '../components/issueDropdownItem'
import IssueCheckBoxItam from '../components/issueCheckBoxItem'
import Calender from '../components/calender';
import AddButton from '../components/addButton'


interface issueProps{    
    prsStore : prsStoreImpl,
}  

const IssueScreen : React.FC<issueProps> = (({prsStore}) => {
    const [se,setSE] = useState<string>("");
    const [platform,setPlatform] = useState<string>("");
    const [version,setVersion] = useState<string>("");
    const [size,setSize] = useState<string>("");
    const [difficulty,setDifficulty] = useState<string>("");
    const [status,setStatus] = useState<string>("");
    const [reviewByBY, setReviewByBY] = useState<boolean>(false);
    const [reviewByAH, setReviewByAH] = useState<boolean>(false);
    const [reviewByHT, setReviewByHT] = useState<boolean>(false);

    prsStore = PrsStore;

    const pressHandler = ()=>{
        // prsStore.addPr(comment)
        // console.log(prsStore.prs)
        // setComment("")
        // console.log(comment)
        // console.log(link)
        // console.log(se)
        // console.log(platform)
        // console.log(version)
        // console.log(size)
        // console.log(difficulty)
        // console.log(status)
        // console.log(reviewByBY)
        // console.log(reviewByAH)
        // console.log(reviewByHT)
        // prsStore.setComment(comment);
        console.log(prsStore.comment);
        console.log(prsStore.link)
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
                <IssueDropdownItem data={Platform_Array} setItem={setPlatform} propertyDefinition='Platform' />
            </View>
            </View>

             <View style={issueStyle.dropdownDiv}>
             <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem data={Size_Array} setItem={setSize} propertyDefinition='Size' />
             </View>

              <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem data={Difficulty_Array} setItem={setDifficulty} propertyDefinition='Difficulty' />
              </View>
             </View>

            <View style={issueStyle.dropdownDiv}>
            <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem data={Status_Array} setItem={setStatus} propertyDefinition='Status' />
            </View>

                <View style={issueStyle.dropdownProperty}>
                <IssueDropdownItem data={Release_Version_Array} setItem={setVersion} propertyDefinition='Version' />
                </View> 
            </View>  

            <View style={issueStyle.checkBoxesDiv}>
            <View style={issueStyle.checkboxProperty}>
                <IssueCheckBoxItam propertyText='Review by By' setReview={setReviewByBY} reviewBy={reviewByBY} />
            </View>

            <View style={issueStyle.checkboxProperty}>
                <IssueCheckBoxItam propertyText='Review by AH' setReview={setReviewByAH} reviewBy={reviewByAH} />
            </View>

            <View style={issueStyle.checkboxProperty}>
                <IssueCheckBoxItam propertyText='Review by HT' setReview={setReviewByHT} reviewBy={reviewByHT} />
            </View>
            </View>
            <View style={issueStyle.addButtonDiv}>
               <AddButton text='Add' pressHandler={pressHandler} />
            </View>  
        </View>
    )
})
  
export default IssueScreen
