import React from 'react';
import DrawerComponent from './drawer';
import {observer} from 'mobx-react';

export const MainComponent = observer(() => {
  return <DrawerComponent />;
});
export default MainComponent;
