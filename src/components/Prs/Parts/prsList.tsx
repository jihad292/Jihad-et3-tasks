import React from "react"
import { FlatList,  View } from "react-native";
import { PrsStore, prsStoreImpl} from '../../../mobxStore/prsStore';
import { observer } from 'mobx-react';
import  PrItem  from './prItem'

interface prsListprops{         
    prsStore : prsStoreImpl,     
}         
   
const PrsList: React.FC<prsListprops> = observer(({prsStore}) => {
       
            return(      
                <>        
        <View>                            
            {PrsStore.searchState === false &&
            <FlatList 
            data={prsStore.prs}
            extraData={prsStore.prs}
            keyExtractor={item => item.id.toString()}
            renderItem={({item})=><PrItem  id={item.id} comment={item.comment}
                link={item.link} se={item.se} platform={item.platform} size={item.size}
                difficulty={item.difficulty} status={item.status} version={item.version}
                byStatus={item.ByStatus} ahStatus={item.AhStatus} htStatus={item.HtStatus}
                dateS={item.dateS} reviewByBY={item.reviewByBY} 
                reviewByAH={item.reviewByAH} reviewByHT={item.reviewByHT}
            />}
        />}

    {PrsStore.searchState === true &&
            <FlatList 
            data={prsStore.searchArray}
            extraData={prsStore.searchArray}
            keyExtractor={item => item.id.toString()}
            renderItem={({item})=><PrItem  id={item.id} comment={item.comment}
                link={item.link} se={item.se} platform={item.platform} size={item.size}
                difficulty={item.difficulty} status={item.status} version={item.version}
                byStatus={item.ByStatus} ahStatus={item.AhStatus} htStatus={item.HtStatus}
                dateS={item.dateS} reviewByBY={item.reviewByBY} 
                reviewByAH={item.reviewByAH} reviewByHT={item.reviewByHT}
            />}
        />}

        </View>   
        </> )    
});  
 
export default PrsList

