import React,{useState} from "react"
import { View, Text,Modal,TouchableOpacity,StyleSheet  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface modalProps{
    visible: boolean,
    closeModal : () =>void
}

const ModalPopUp: React.FC<modalProps> = ({visible,closeModal})=>{
    
    return(
            
            <Modal transparent visible={visible}>
            <View style={styles.modal} >
                <View style={styles.modalContainer}>
                    <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={closeModal}>
                            <FontAwesome5 name={'window-close'} size={25}  />
                    </TouchableOpacity>
                    </View>
                    <View style={styles.calendarContainer}>
                      <Text>Calender</Text>
                    </View>
                </View>
            </View>
            
        </Modal>
         
    )
}

const Calender = () => {
    const handleModal = ()=>{
        let test = ! showModal
        setShoModal(test)
    }

    const [showModal,setShoModal] = useState<boolean>(false);

    const closeModal = ()=>{
        if (showModal){
            setShoModal(false)
        }
    }
    return(
        <View>
            <ModalPopUp visible={showModal} closeModal={closeModal} />
            <TouchableOpacity onPress={handleModal}>
                <FontAwesome5 name={'calendar-alt'} size={27}  />
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    modal: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
    },
    modalContainer:{
        width:'80%',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:20,
        elevation:25,
        height:250,
    },
    closeContainer:{
        justifyContent:'flex-start',
        alignItems:'flex-end',

    },
    calendarContainer:{
        height:140,
        justifyContent:'center',
        alignItems:'center',
    },
})

export default Calender