import React from 'react';
import {View, Text} from 'react-native';
import { Colors } from '../../Common/colors';

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
        borderBottomColor: Colors.prsSreenItemPropertyBottomBorder,
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text
          style={{
            color: Colors.prsScreenItemPropertyTitle,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {props.text}:
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: Colors.prsScreenItemPropertyData,
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
