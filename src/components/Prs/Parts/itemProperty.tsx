import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../Common/colors';
import Et3Theme from '../../Common/getTheme';

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
        borderBottomColor: Colors.BLUE,
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text
          style={{
            color: Colors.AZURE,
            fontWeight: 'bold',
            fontSize: Et3Theme().getThemeData.get().getKhFontSize(6),
          }}>
          {text}:
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: Colors.OLIVE_GREEN,
            fontWeight: 'bold',
            fontSize: Et3Theme().getThemeData.get().getKhFontSize(5),
          }}>
          {property}
        </Text>
      </View>
    </View>
  );
};

export default Property;
