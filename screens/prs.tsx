import React,{ useState } from "react";
import { StyleSheet,Keyboard, Text, View,TouchableOpacity, Button, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import HeadPage from "../components/headPage";

const PrsScreen = () => {
    const [sortState,setSortState] = useState<boolean>(false);
  const [sortName,setSortName] = useState<string>('Desc')
  const handleSort = () =>{
    let test = ! sortState;
    setSortState(test);
    if(sortState === true){setSortName('ASC')}
    else {setSortName('DESC')};
  }

    
    return (
      
      <View style={{ flex: 1, flexDirection:'column' }}>
          
          <View style={styles.languageContainer}>
            <TouchableOpacity><Text style={styles.language}>Language</Text></TouchableOpacity>
          </View>
          <View style={styles.header}>
                <HeadPage handleSort={handleSort} name={sortName} />
             </View>
          
      </View>
    );
  }

const styles = StyleSheet.create({
  headContainer:{
    flex: 1,
    alignItems:'center',
  },
  languageContainer:{
    flex: 1,
    flexDirection:'column',
    alignItems:'flex-end',
    paddingEnd:15,
    paddingTop:15,
 },
 language:{
    color:'rgb(0, 0, 204)',
    fontStyle:'italic',
    fontSize:20,
 },
 inputContainer:{
  alignItems: 'center',
 },
 header:{
   flex:9,
   alignItems:'flex-start'
 }
})


export default PrsScreen