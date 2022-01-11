import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Text, View} from 'react-native';
import {Colors} from '../Common/colors';
import Et3Theme from '../Common/getTheme';

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
          color: Colors.BLUE,
          fontSize: Et3Theme().getThemeData.get().getKhFontSize(5),
          alignSelf: 'center',
        }}>
        {propertyDefinition}
      </Text>
      <SelectDropdown
        buttonStyle={{
          width: Et3Theme().getAppUnits.get().unitX * 61,
          height: Et3Theme().getAppUnits.get().unitY * 12,
          borderRadius: 4,
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderBottomWidth: 1,
          borderBottomColor: '#fff',
        }}
        buttonTextStyle={{
          color: 'blue',
          fontSize: Et3Theme().getThemeData.get().getKhFontSize(5),
          fontWeight: 'bold',
        }}
        data={data}
        defaultButtonText={'Please Choose'}
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
