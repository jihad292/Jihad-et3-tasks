import React from "react";
import { View,Button,TextInput, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { StyleSheet} from 'react-native';

interface props{
    handleSort : () => void,
    name : string,
    value:string,
    handleChange : (value:string)=>void
}

 const HeadPage : React.FC<props> = ((props) => {


    return(
      <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.headContainer}>
          <View style={styles.button}>
            <Button color="rgb(0, 100, 500)" title={props.name} onPress={props.handleSort}></Button>
          </View>
          
          <View style={styles.search}>
            <TextInput style={styles.textInput} value={props.value} onChangeText={props.handleChange} placeholder="Search" />
          </View>
        
          </View>
          </TouchableWithoutFeedback>
      </>
    )
})

  export default HeadPage
const styles = StyleSheet.create({
    headContainer:{
      flexDirection:'row',
      marginTop:10,
      height:'auto', 
      alignItems:'flex-start',
    },
   language:{
      color:'rgb(0, 0, 204)',
      fontStyle:'italic',
      fontSize:20,
   },
   inputContainer:{
    alignItems: 'center',
   },
   button:{
    marginStart:10,
   },
   search:{
     flex:1,
     alignItems:'flex-start',
     marginLeft:20,
     marginRight:40,
     borderBottomWidth:1,
     borderColor:'rgb(0, 0, 204)',
     color:'red'
   },
   textInput:{
     color:'blue',
     fontStyle:'italic',
     height:40,
     fontSize:20,
   }
  })