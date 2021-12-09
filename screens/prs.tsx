import React from "react";
import {StyleSheet, View} from 'react-native';
import PrsList from '../components/prsList'
import { PrsStore } from "../mobxStore/prsStore";
import { observer } from 'mobx-react';

const PrsScreen = observer(() => {
    return( <> 
        <View style={styles.container}>
            <PrsList prsStore={PrsStore} />
        </View></>
    )   
})   

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }})


export default PrsScreen