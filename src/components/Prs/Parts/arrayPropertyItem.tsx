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
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 12,
      }}>
      <Property
        text={i18n.get(props.propertyText1)}
        property={props.property1}
      />
      <Property
        text={i18n.get(props.propertyText2)}
        property={props.property2}
      />
    </View>
  );
};

export default ArrayPropertyItem;
