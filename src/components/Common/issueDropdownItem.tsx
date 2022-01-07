import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Text, View} from 'react-native';
import {Colors} from '../Common/colors';

interface Props {
  data: string[];
  setItem: stringFunction;
  propertyDefinition: string;
  defaultValue: string;
}

const IssueDropdownItem: React.FC<Props> = props => {
  const {data, setItem, propertyDefinition, defaultValue} = props;
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          color: Colors.blue,
          fontSize: 15,
          alignSelf: 'center',
        }}>
        {propertyDefinition}
      </Text>
      <SelectDropdown
        buttonStyle={{
          width: '100%',
          height: 40,
          borderRadius: 4,
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderBottomWidth: 1,
          borderBottomColor: '#fff',
        }}
        buttonTextStyle={{color: 'blue', fontSize: 17, fontWeight: 'bold'}}
        data={data}
        defaultButtonText={'Choose an option'}
        defaultValue={defaultValue}
        onSelect={(selectedItem, index) => {
          setItem(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>
  );
};

export default IssueDropdownItem;
