import React from "react"
import { FlatList,  View } from "react-native";
import { prsStoreImpl} from '../mobxStore/prsStore';
import { observer } from 'mobx-react';
import  PrItem  from '../components/prItem'

interface prsListprops{       
    prsStore : prsStoreImpl,   
} 
  
const PrsList: React.FC<prsListprops> = (({prsStore}) => {
       
    return(  
             
                
        <View>       
            <FlatList 
                data={prsStore.prs}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=><PrItem  id={item.id} comment={item.comment}
                    link={item.link} se={item.se} platform={item.platform} size={item.size}
                    difficulty={item.difficulty} status={item.status} version={item.version}
                    byStatus={item.ByStatus} ahStatus={item.AhStatus} htStatus={item.HtStatus}
                />}
            />
        </View>  
          
        
        
    )
})
 
export default PrsList

