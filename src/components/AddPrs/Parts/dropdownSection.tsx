import React from 'react';
import {View} from 'react-native';
import IssueDropdownItem from '../../Common/issueDropdownItem';
import { Colors } from '../../Common/colors'

interface Props {
  defaultValue1: string;
  data1: string[];
  setItem1: stringFunction;
  propertyDefinition1: string;
  defaultValue2: string;
  data2: string[];
  setItem2: stringFunction;
  propertyDefinition2: string;
}

const DropdownSection: React.FC<Props> = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
      }}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: Colors.addBorderDropdown,
          width: '50%',
          marginHorizontal: 1,
          alignItems: 'center',
        }}>
        <IssueDropdownItem
          defaultValue={props.defaultValue1}
          data={props.data1}
          setItem={props.setItem1}
          propertyDefinition={props.propertyDefinition1}
        />
      </View>

      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: Colors.addBorderDropdown,
          width: '50%',
          marginHorizontal: 1,
          alignItems: 'center',
        }}>
        <IssueDropdownItem
          defaultValue={props.defaultValue2}
          data={props.data2}
          setItem={props.setItem2}
          propertyDefinition={props.propertyDefinition2}
        />
      </View>
    </View>
  );
};

export default DropdownSection;
