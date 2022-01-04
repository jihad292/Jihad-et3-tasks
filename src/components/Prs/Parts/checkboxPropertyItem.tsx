import React from 'react';
import {View} from 'react-native';
import Property from './itemProperty';
import i18n from '../../Language/Parts/i18n';

interface Props {
  property1: string;
  propertyText1: string;
  property2: string;
  propertyText2: string;
  property3: string;
  propertyText3: string;
}

const CheckboxPropertyItem: React.FC<Props> = props => {
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
      <Property
        text={i18n.get(props.propertyText3)}
        property={props.property3}
      />
    </View>
  );
};

export default CheckboxPropertyItem;
