import React from 'react';
import {View} from 'react-native';
import Property from '../Parts/itemProperty';
import i18n from '../../Language/Parts/i18n';
import {LanguageStore} from '../../../mobxStore/language-store';

interface Props {
  property1: string;
  propertyText1: string;
  property2: string;
  propertyText2: string;
}

const ArrayPropertyItem: React.FC<Props> = props => {
  const {property1, propertyText1, property2, propertyText2} = props;
  return (
    <View
      style={{
        flexDirection:
          LanguageStore().languageText.get() === 'ENGLISH'
            ? 'row'
            : 'row-reverse',
        justifyContent: 'space-around',
      }}>
      <Property text={i18n.get(propertyText1)} property={property1} />
      <Property text={i18n.get(propertyText2)} property={property2} />
    </View>
  );
};

export default ArrayPropertyItem;
