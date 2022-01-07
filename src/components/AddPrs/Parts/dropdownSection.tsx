import React from 'react';
import {View} from 'react-native';
import IssueDropdownItem from '../../Common/issueDropdownItem';
import {Colors} from '../../Common/colors';

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
  const {
    defaultValue1,
    data1,
    setItem1,
    propertyDefinition1,
    defaultValue2,
    data2,
    setItem2,
    propertyDefinition2,
  } = props;
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
          borderColor: Colors.BLUE,
          width: '50%',
          marginHorizontal: 1,
          alignItems: 'center',
        }}>
        <IssueDropdownItem
          defaultValue={defaultValue1}
          data={data1}
          setItem={setItem1}
          propertyDefinition={propertyDefinition1}
        />
      </View>

      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: Colors.BLUE,
          width: '50%',
          marginHorizontal: 1,
          alignItems: 'center',
        }}>
        <IssueDropdownItem
          defaultValue={defaultValue2}
          data={data2}
          setItem={setItem2}
          propertyDefinition={propertyDefinition2}
        />
      </View>
    </View>
  );
};

export default DropdownSection;
