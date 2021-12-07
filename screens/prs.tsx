import React from "react";
import {StyleSheet, View, Text, TouchableOpacity,Button} from 'react-native';
import PrsList from '../components/prsList'
import { PrsStore } from "../mobxStore/prsStore";

const PrsScreen = () => {
    return(  
        <View style={styles.container}>
            <PrsList prsStore={PrsStore} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }})


export default PrsScreen