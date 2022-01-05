import React from 'react';
import {observer} from 'mobx-react';
import {SearchStore} from '../../../mobxStore/prsSearchStore';
import FlatListComponent from './prsFlatList';
import FlatListSearchComponent from './prsFlatListSearch';

const PrsList = observer(() => {
  const showList = SearchStore().searchState.get();
  return showList ? <FlatListSearchComponent /> : <FlatListComponent />;
});

export default PrsList;
