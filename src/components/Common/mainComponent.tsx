import React from 'react';
import {PrsStore} from '../../mobxStore/prsStore';
import DrawerComponent from './drawer';
import PrsTotalNumberModal from './prsTotalNumberModal';
import {observer} from 'mobx-react';

const MainComponent = observer(() => {
  return (
    <>
      {PrsStore().prsNumberModal.get() === false && <DrawerComponent />}
      {PrsStore().prsNumberModal.get() === true && <PrsTotalNumberModal />}
    </>
  );
});

export default MainComponent;
