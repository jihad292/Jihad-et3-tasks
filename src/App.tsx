import React, {useEffect} from 'react';
import {PrsStore} from './mobxStore/prsStore';
import MainComponent from './components/Common/mainComponent';
export default function App() {
  useEffect(() => {
    PrsStore().retrivePrs();
  }, []);

  // setInterval(() => {
  //   let interval = setInterval(() => {
  //     PrsStore().setPrsNumberModal(true);
  //   }, 7000);
  //   setTimeout(() => {
  //     clearInterval(interval);
  //     PrsStore().setPrsNumberModal(false);
  //   }, 7100);
  // }, 10000);

  return (
    <>
      <MainComponent />
    </>
  );
}
