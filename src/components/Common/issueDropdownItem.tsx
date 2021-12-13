import React,{useRef} from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { Text,View } from 'react-native'
import {issueStyle} from '../AddPrs/Parts/issueStyle'

interface props{
    data: string[],
    setItem : (value : string)=>void,
    propertyDefinition : string,
    defaultValue : string,
}

const IssueDropdownItem: React.FC<props> = ({data,setItem,propertyDefinition,defaultValue}) => {
    
    return(
        <View>
            <Text style={issueStyle.dropdownPropertyText}> {propertyDefinition} </Text>
            <SelectDropdown
                    data={data}
                    defaultButtonText={'Choose an option'}
                    defaultValue={defaultValue}
                    onSelect={(selectedItem, index) => {
                        setItem(selectedItem) }}
                    buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
                    rowTextForSelection={(item, index) => {return item}}
                />
        </View>
    )
}

export default IssueDropdownItem