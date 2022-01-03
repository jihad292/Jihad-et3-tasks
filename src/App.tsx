import React, {useEffect} from 'react';
import {PrsStore} from './mobxStore/prsStore';
import MainComponent from './components/Common/mainComponent';
import { LanguageStore } from './mobxStore/languageStore';
export default function App() {
  useEffect(() => {
    PrsStore().retrivePrs();
    PrsStore().printPrsNumber();
  }, [LanguageStore().drawerPosition]);  
    
  return (  
    <>
      <MainComponent />
    </>
  );
}
