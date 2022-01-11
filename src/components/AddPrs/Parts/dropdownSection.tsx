import React from 'react';
import {View} from 'react-native';
import IssueDropdownItem from '../../Common/issueDropdownItem';
import {Colors} from '../../Common/colors';
import {LanguageStore} from '../../../mobxStore/language-store';
import Et3Theme from '../../Common/getTheme';

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
        flexDirection:
          LanguageStore().languageText.get() === 'ENGLISH'
            ? 'row'
            : 'row-reverse',
        justifyContent: 'center',
        marginBottom: Et3Theme().getAppUnits.get().childY * 3,
      }}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: Colors.BLUE,
          width: Et3Theme().getAppUnits.get().unitX * 52,
          marginHorizontal: Et3Theme().getAppUnits.get().unitX * 0.5,
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
          width: Et3Theme().getAppUnits.get().unitX * 52,
          marginHorizontal: Et3Theme().getAppUnits.get().unitX * 0.5,
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
