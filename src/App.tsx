import React, {useEffect} from 'react';
import {PrsStore} from './mobxStore/prs-store';
import MainComponent from './components/Common/mainComponent';
import issueData from './data/data-api';
export default function App() {
  useEffect(() => {
    PrsStore().retrivePrs();
    PrsStore().printPrsNumber();
    setTimeout(() => issueData.fetchIssues(), 2000);
  }, []);

  return (
    <>
      <MainComponent />
    </>
  );
}
