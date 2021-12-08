import React from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { Text,View } from 'react-native'
import {issueStyle} from '../style/issueStyle'

interface props{
    data: string[],
    setItem : (value : string)=>void,
    propertyDefinition : string
}

const IssueDropdownItem: React.FC<props> = ({data,setItem,propertyDefinition}) => {
    return(
        <View>
            <Text style={issueStyle.dropdownPropertyText}> {propertyDefinition} </Text>
            <SelectDropdown
                    data={data}
                    onSelect={(selectedItem, index) => {
                        setItem(selectedItem) }}
                    buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
                    rowTextForSelection={(item, index) => {return item}}
                />
        </View>
    )
}

export default IssueDropdownItem