import React from 'react';
import {observer} from 'mobx-react';
import {SearchStore} from '../../../mobxStore/prsSearchStore';
import FlatListComponent from './flatList';
import FlatListSearchComponent from './flatlistSearch';

const PrsList = observer(() => {
  return (
    <>
      {SearchStore().searchState.get() !== true && <FlatListComponent />}

      {SearchStore().searchState.get() && <FlatListSearchComponent />}
    </>
  );
});

export default PrsList;
