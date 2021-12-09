import React from 'react';
import { StyleSheet, View,Text,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { PrsStore} from '../mobxStore/prsStore';
import { runInAction } from "mobx";

interface propertyProps{
    text: string,
    property: string | number ,
}
const Property:React.FC<propertyProps> = (props)=>{
    return(
        <View style={styles.propoertySection}>
                <Text style={styles.propertyText}>{props.text}:</Text>
                <Text style={styles.propertyData}>{props.property}</Text>
        </View>
    )
}

interface prItemProps{
    id: number,
    comment:string,
    link:string,
    se:string,
    platform:string,
    size:string,
    difficulty:string,
    status:string,
    version:string,
    byStatus:string, 
    ahStatus:string,
    htStatus:string,
    dateS:string,
}

const PrItem: React.FC<prItemProps> = (props) => {
    const deleteHandler = () =>{
        PrsStore.deletePr(props.id);

    }

    const openUpdateModal = ()=>{
        runInAction(
            ()=>{
                PrsStore.updateModalStatus = true;
            }
        )
    }
    return(
        
        <View style = {styles.container} >
            <View style={styles.smallPropertiesDiv}>
            <Property text='ID' property={props.id} />

            <View style={styles.actionSymbol}>
            <TouchableOpacity onPress={openUpdateModal}>
                <FontAwesome5 name={'pen-alt'} size={25} color='white' /></TouchableOpacity>
            </View>

            <View style={styles.actionSymbol}>
            <TouchableOpacity onPress={deleteHandler}>
                <FontAwesome5 name={'trash-alt'} size={25} color='white' /></TouchableOpacity>
            </View>
            
            </View>
            
            <Property text='Comment' property={props.comment} />
            <Property text='Link' property={props.link} />

            <View style={styles.smallPropertiesDiv}>
            <Property text='SE' property={props.se} />
            <Property text='Difficulty' property={props.difficulty} />
            </View>

            <View style={styles.smallPropertiesDiv}>
            <Property text='Platform' property={props.platform} />
            <Property text='Size' property={props.size} />
            </View>

            <View style={styles.smallPropertiesDiv}>
            <Property text='Status' property={props.status} />
            <Property text='Version' property={props.version} />
            </View>

            <View style={styles.smallPropertiesDiv}>
            <Property text='Reaview by BY' property={props.byStatus} />
            <Property text='Reaview by AH' property={props.ahStatus} />
            <Property text='Reaview by HT' property={props.htStatus} />
            </View>
            
            <View style={styles.dateContainer}>
                <Text style={styles.dateContainerText}>Date : </Text>
                <Text style={styles.dateContainerText}>''+{props.dateS}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        marginTop:15,
        width:290,
        borderRadius:20,
        paddingBottom:15,
        marginBottom:20,
    },
    propoertySection:{
        flex: 1,
        flexDirection:'column',
        borderBottomColor:'thistle',
        borderBottomWidth:2,
        alignItems:'center'
    },
    propertyText:{
        color:'slategray',
        fontWeight:'bold',
        fontSize:15
    },
    propertyData:{
        color:'olivedrab', 
        fontWeight:'bold',
        fontSize:15
    },
    smallPropertiesDiv:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:12,
    },
    actionSymbol:{
        width:30,
        marginHorizontal:7
    },
    dateContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    dateContainerText:{
        color:'olivedrab',
        fontWeight:'bold',
        fontSize:15
    },
})

export default PrItem