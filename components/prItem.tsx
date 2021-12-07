import React from 'react';
import { StyleSheet, View,Text,TouchableOpacity } from 'react-native';

interface prItemProps{
    text:string,
    id: number
}

const PrItem: React.FC<prItemProps> = ({text,id}) => {
    return(
        
        <View style = {styles.container} >
            <View style={styles.propoertySection}>
                <Text style={styles.propertyText}>Id:</Text>
                <Text style={styles.propertyData}>{id}</Text>
            </View>

            <View style={styles.propoertySection}>
                <Text style={styles.propertyText}>Text:</Text>
                <Text style={styles.propertyData}>{text}</Text>
            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightcyan',
        marginTop:15,
        width:250,
        borderRadius:20,
        paddingBottom:15,
        marginBottom:20,
    },
    propoertySection:{
        flex: 1,
        flexDirection:'column',
        borderBottomColor:'thistle',
        borderBottomWidth:2,
        width:100,
        alignItems:'center'
    },
    propertyText:{
        color:'slategray',
        fontWeight:'bold',
        fontSize:25
    },
    propertyData:{
        color:'olivedrab', 
        fontWeight:'bold',
        fontSize:20
    },
})

export default PrItem