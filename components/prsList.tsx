import React from "react"
import { FlatList, Text, View,Button } from "react-native";
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
                renderItem={({item})=><PrItem  text={item.text}  id={item.id} />}
            />
        </View>  
        
        
        
    )
})
 
export default PrsList

