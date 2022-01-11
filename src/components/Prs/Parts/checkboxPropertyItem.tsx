import React from 'react';
import {View} from 'react-native';
import Property from './itemProperty';
import i18n from '../../Language/Parts/i18n';
import {LanguageStore} from '../../../mobxStore/language-store';

interface Props {
  property1: string;
  propertyText1: string;
  property2: string;
  propertyText2: string;
  property3: string;
  propertyText3: string;
}

const CheckboxPropertyItem: React.FC<Props> = props => {
  const {
    property1,
    propertyText1,
    property2,
    propertyText2,
    property3,
    propertyText3,
  } = props;
  return (
    <View
      style={{
        flexDirection:
          LanguageStore().languageText.get() === 'ENGLISH'
            ? 'row'
            : 'row-reverse',
        justifyContent: 'space-around',
        paddingHorizontal: 12,
      }}>
      <Property text={i18n.get(propertyText1)} property={property1} />
      <Property text={i18n.get(propertyText2)} property={property2} />
      <Property text={i18n.get(propertyText3)} property={property3} />
    </View>
  );
};

export default CheckboxPropertyItem;
