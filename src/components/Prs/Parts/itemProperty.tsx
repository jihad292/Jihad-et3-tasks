import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../Common/colors';

interface propertyProps {
  text: string;
  property: StringNumber;
}
const Property: React.FC<propertyProps> = props => {
  const {text, property} = props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        borderBottomColor: Colors.blue,
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text
          style={{
            color: Colors.azure,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {text}:
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: Colors.oliveGreen,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {property}
        </Text>
      </View>
    </View>
  );
};

export default Property;
