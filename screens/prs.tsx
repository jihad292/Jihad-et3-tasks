import React from "react";
import {StyleSheet, View} from 'react-native';
import PrsList from '../components/prsList'
import { PrsStore } from "../mobxStore/prsStore";
import { observer } from 'mobx-react';
import { runInAction } from "mobx";
import HeadPage from "../components/headPage";
import UpdateModal from '../components/updateModal';
import {ButtonHandler} from '../languageHandler/buttonHandler';
import { languangeManagmentAr,languangeManagmentEng} from '../languageHandler/languangeManagment'

const PrsScreen = observer(() => {
    const handleSort = ()=>{

    }    

    const handleChangeText = (value: string) =>{
        PrsStore.setSearchStateString(value)
        if(PrsStore.searchStateText === ''){
            runInAction(()=>{
                PrsStore.searchState = false
            })   
        }
        if(PrsStore.searchStateText !== ''){
            runInAction(()=>{  
                PrsStore.searchState = true
                let test = PrsStore.prs.filter(pr=>{
                    return pr.comment.toLowerCase().includes(PrsStore.searchStateText.toLowerCase())
                 })
                PrsStore.setSearchArray(test)
            })
        }
        
    }

    const handleLanguage = ()=>{
          if(PrsStore.languageState === false){
              PrsStore.setLanguageState(true);
              PrsStore.setLanguageStateText('Arabic');
              languangeManagmentAr();
              let test  = PrsStore.prs.filter(pr=>{return pr.id !== null});
              PrsStore.prs = test;
          }
          else{
            PrsStore.setLanguageState(false);
            PrsStore.setLanguageStateText('English');  
            languangeManagmentEng();
            let test  = PrsStore.prs.filter(pr=>{return pr.id !== null});
              PrsStore.prs = test;
          }
    }
    return( <> 
    <ButtonHandler text={PrsStore.languageStateText} handleLanguage={handleLanguage} />
    <HeadPage handleSort={handleSort} name='Sort' value={PrsStore.searchStateText}  handleChange={handleChangeText}/>
        
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