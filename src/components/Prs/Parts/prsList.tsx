import React from 'react';
import {observer} from 'mobx-react';
import {SearchStore} from '../../../mobxStore/prs-search-store';
import FlatListComponent from './prsFlatList';
import FlatListSearchComponent from './prsFlatListSearch';

const PrsList = observer(() => {
  const showList = SearchStore().searchState.get();
  return showList ? <FlatListSearchComponent /> : <FlatListComponent />;
});

export default PrsList;
