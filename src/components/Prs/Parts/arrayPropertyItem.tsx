import React from 'react';
import {View} from 'react-native';
import Property from '../Parts/itemProperty';
import i18n from '../../Language/Parts/i18n';

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
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 12,
      }}>
      <Property text={i18n.get(propertyText1)} property={property1} />
      <Property text={i18n.get(propertyText2)} property={property2} />
    </View>
  );
};

export default ArrayPropertyItem;
