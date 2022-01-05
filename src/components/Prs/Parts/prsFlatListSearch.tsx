import React from 'react';
import {FlatList, View} from 'react-native';
import {observer} from 'mobx-react';
import PrItem from './prItem';
import {SearchStore} from '../../../mobxStore/prs-search-store';

const FlatListSearchComponent = observer(() => {
  return (
    <View>
      <FlatList
        data={SearchStore().searchArray.get()}
        extraData={SearchStore().searchArray}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PrItem
            id={item.id}
            comment={item.comment}
            link={item.link}
            se={item.se}
            platform={item.platform}
            size={item.size}
            difficulty={item.difficulty}
            status={item.status}
            version={item.version}
            ByStatus={item.ByStatus}
            AhStatus={item.AhStatus}
            HtStatus={item.HtStatus}
            date={item.date}
            dateS={item.dateS}
            reviewByBY={item.reviewByBY}
            reviewByAH={item.reviewByAH}
            reviewByHT={item.reviewByHT}
          />
        )}
      />
    </View>
  );
});

export default FlatListSearchComponent;
