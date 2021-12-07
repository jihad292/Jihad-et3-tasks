import React,{ useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { prsStoreImpl,PrsStore} from '../mobxStore/prsStore';
import { SE_Array,Platform_Array,Size_Array,Difficulty_Array,Status_Array,Release_Version_Array } from '../static/prProperties'
import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from '@react-native-community/checkbox';


interface issueProps{    
    prsStore : prsStoreImpl,
}  

const IssueScreen : React.FC<issueProps> = (({prsStore}) => {
    const [comment,setComment] = useState<string>("");
    const [link,setLink] = useState<string>("");
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
        console.log(comment)
        console.log(link)
        console.log(se)
        console.log(platform)
        console.log(version)
        console.log(size)
        console.log(difficulty)
        console.log(status)
        console.log(reviewByBY)
        console.log(reviewByAH)
        console.log(reviewByHT)
    }
    
    return(
        <View style={styles.container}> 
            <View style={styles.inputTextContainer}>
                <Text style={styles.itemProperty}>Add Comment</Text>
                <TextInput style={styles.textInput} placeholder='add Comment' value={comment} onChangeText={setComment} />
            </View>
                
             <View style={styles.inputTextContainer}>
                <Text style={styles.itemProperty}>Add Link</Text>
                <TextInput style={styles.textInput} placeholder='add Link' value={link} onChangeText={setLink} />
             </View>    

            <View style={styles.dropdownDiv}>
            <View style={styles.dropdownProperty}>
                <Text style={styles.dropdownPropertyText}> SE </Text>
            <SelectDropdown 
                    data={SE_Array}
                    onSelect={(selectedItem, index) => {
                        setSE(selectedItem) }}
                    buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
                    rowTextForSelection={(item, index) => {return item}}
                />
            </View>

            <View style={styles.dropdownProperty}> 
                <Text style={styles.dropdownPropertyText}> Platform </Text>
            <SelectDropdown
                    data={Platform_Array}
                    onSelect={(selectedItem, index) => {
                        setPlatform(selectedItem) }}
                    buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
                    rowTextForSelection={(item, index) => {return item}}
                />
            </View>

            </View>

             <View style={styles.dropdownDiv}>
             <View style={styles.dropdownProperty}>
                 <Text style={styles.dropdownPropertyText}> Size </Text>
             <SelectDropdown
                    data={Size_Array}
                    onSelect={(selectedItem, index) => {
                        setSize(selectedItem) }}
                    buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
                    rowTextForSelection={(item, index) => {return item}}
                />
             </View>

              <View style={styles.dropdownProperty}>
                    <Text style={styles.dropdownPropertyText}> Difficulty </Text>
              <SelectDropdown
                    data={Difficulty_Array}
                    onSelect={(selectedItem, index) => {
                        setDifficulty(selectedItem) }}
                    buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
                    rowTextForSelection={(item, index) => {return item}}
                />
              </View>
             </View>

               
            <View style={styles.dropdownDiv}>
            <View style={styles.dropdownProperty}>
                   <Text style={styles.dropdownPropertyText}> Status </Text>
            <SelectDropdown
                    data={Status_Array}
                    onSelect={(selectedItem, index) => {
                        setStatus(selectedItem) }}
                    buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
                    rowTextForSelection={(item, index) => {return item}}
                />
            </View>

                <View style={styles.dropdownProperty}>
                    <Text style={styles.dropdownPropertyText}> Version </Text>
                <SelectDropdown
                    data={Release_Version_Array}
                    onSelect={(selectedItem, index) => {
                        setVersion(selectedItem) }}
                    buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
                    rowTextForSelection={(item, index) => {return item}}
                /> 
                </View> 
            </View>  

            <View style={styles.checkBoxesDiv}>
            <View style={styles.checkboxProperty}>
                <Text style={styles.checkboxText}>Review by BY</Text>
            <CheckBox
                disabled={false}
                value={reviewByBY}
                onValueChange={(newValue) => setReviewByBY(newValue)}
            />
            </View>

            <View style={styles.checkboxProperty}>
                <Text style={styles.checkboxText}>Review by AH</Text>
            <CheckBox
                disabled={false}
                value={reviewByAH}
                onValueChange={(newValue) => setReviewByAH(newValue)}
            />
            </View>

            <View style={styles.checkboxProperty}>
                <Text style={styles.checkboxText}>Review by HT</Text>
            <CheckBox
                disabled={false}  
                value={reviewByHT}
                onValueChange={(newValue) => setReviewByHT(newValue)}
            />
            </View>

            </View>
      
                <Button onPress={pressHandler} title='Add' />     
        </View>
    )
})
  
export default IssueScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    inputTextContainer:{
        alignItems:'center',
        padding:10,
    },
    itemProperty:{
        fontWeight:'bold',
        fontSize:20,
    },
    textInput:{
        borderBottomWidth:2,
        borderBottomColor:'cornflowerblue',
        color:'black',
        justifyContent:'center'  
    },
    dropdownDiv:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:10
    },
    dropdownProperty:{
        borderWidth:2,
        borderRadius:10,
        borderColor:'cornflowerblue',
        width:210,
        maxwidth:190,
        marginHorizontal:1,
        alignItems:'center'
    },
    dropdownPropertyText:{
        fontWeight:'bold',
        color:'darkolivegreen',
        fontSize:15,
    },
    checkBoxesDiv:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:2,
        marginVertical:10,
        borderColor:'cornflowerblue',
        borderRadius:10,
        paddingHorizontal:20,
    },
    checkboxProperty:{
        alignItems:'center',
        justifyContent:'center'
    },
    checkboxText:{
        fontWeight:'bold',
        fontSize:15,
        color:'goldenrod'
    }

})