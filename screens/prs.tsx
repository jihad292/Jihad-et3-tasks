import React from "react";
import {StyleSheet, View} from 'react-native';
import PrsList from '../components/prsList'
import { PrsStore } from "../mobxStore/prsStore";
import { observer } from 'mobx-react';
import HeadPage from "../components/headPage";
import UpdateModal from '../components/updateModal'

const PrsScreen = observer(() => {
    const handleSort = ()=>{

    }
    return( <> 
    <HeadPage handleSort={handleSort} name='Sort' />
        
        <View style={styles.container}>
        <UpdateModal handleModal={PrsStore.updateModalStatus} />
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