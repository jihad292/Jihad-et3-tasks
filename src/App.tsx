import React, {useEffect} from 'react';
import {PrsStore} from './mobxStore/prs-store';
import MainComponent from './components/Common/mainComponent';
export default function App() {
  useEffect(() => {
    PrsStore().retrivePrs();
    PrsStore().printPrsNumber();
  }, []);

  return (
    <>
      <MainComponent />
    </>
  );
}
