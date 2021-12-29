import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Text, View, StyleSheet} from 'react-native';
import {issueStyle} from '../AddPrs/Parts/issueStyle';

interface props {
  data: string[];
  setItem: stringFunction;
  propertyDefinition: string;
  defaultValue: string;
}

const IssueDropdownItem: React.FC<props> = (({
  data,
  setItem,
  propertyDefinition,
  defaultValue,
}) => {
  return (
    <View>
      <Text style={issueStyle.dropdownPropertyText}>{propertyDefinition}</Text>
      <SelectDropdown
        buttonStyle={styles.selectBtn}
        buttonTextStyle={styles.selectBtnStyle}
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
});

const styles = StyleSheet.create({
  selectBtn: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  selectBtnStyle:{
    color:'blue',
    fontSize:17,
    fontWeight:'bold',
  },
});

export default IssueDropdownItem;
