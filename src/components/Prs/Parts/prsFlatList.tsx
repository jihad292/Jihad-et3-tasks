import React from 'react';
import {FlatList, View} from 'react-native';
import {observer} from 'mobx-react';
import PrItem from './prItem';
import {PrsStore} from '../../../mobxStore/prsStore';

const FlatListComponent = observer(() => {
  return (
    <View>
      <FlatList
        data={PrsStore().prs.get()}
        keyExtractor={item => item.id.toString()}
        extraData={PrsStore().flatListRender.get()}
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

export default FlatListComponent;
