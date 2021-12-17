import React from 'react';
import {FlatList, View} from 'react-native';
import {prsStoreImpl} from '../../../mobxStore/prsStore';
import {observer} from 'mobx-react';
import PrItem from './prItem';
import {SearchStore} from '../../../mobxStore/prsSearchStore';

interface prsListprops {
  prsStore: prsStoreImpl;
}
  
const PrsList: React.FC<prsListprops> = observer(({prsStore}) => {
  return (
    <>
      <View>
        {SearchStore().searchState.get() !== true && (
          <FlatList
            data={prsStore.prs}
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
        )}      

        {SearchStore().searchState.get() && (
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
        )}
      </View>
    </>
  );
});

export default PrsList;
