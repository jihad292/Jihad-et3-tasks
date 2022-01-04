import React from 'react';
import {View, Text} from 'react-native';
import {ColorStore} from '../../../mobxStore/colorStore';

interface propertyProps {
  text: string;
  property: StringNumber;
}
const Property: React.FC<propertyProps> = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        borderBottomColor: ColorStore().itemPropertyBorderColor.get(),
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text
          style={{
            color: ColorStore().itemPropertyTextColor.get(),
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {props.text}:
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: ColorStore().itemDataColor.get(),
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {props.property}
        </Text>
      </View>
    </View>
  );
};

export default Property;
