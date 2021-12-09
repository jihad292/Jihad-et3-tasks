import React from 'react';
import { View, Text,Modal,TouchableOpacity,StyleSheet  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PrsStore} from '../mobxStore/prsStore' ;
import { runInAction } from "mobx";

interface modalProps{
    visible: boolean
}

const ModalForm : React.FC<modalProps> = (props) =>{
    const closeModal = ()=>{
        runInAction(
            ()=>{
                PrsStore.updateModalStatus = false
            }
        )
    }
    return(
        <Modal transparent visible={props.visible}>
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                 <View style={styles.closeModalDiv}>
                   <TouchableOpacity onPress={closeModal}>
                     <FontAwesome5 name={'window-close'} size={27} color={'olivedrab'} />
                   </TouchableOpacity>
                 </View>
                  <Text>Update is from here </Text>
                </View>
            </View>
        </Modal>
    )
}

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

const styles= StyleSheet.create({
    modal: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    modalContainer:{
        width:'90%',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:20,
        elevation:25,
        height:600,
    },
    closeModalDiv:{
        width:'100%',
        alignItems:'flex-end'
    },
})

export default UpdateModal