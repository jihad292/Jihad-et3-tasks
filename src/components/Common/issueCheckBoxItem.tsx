import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../Common/colors';

interface props {
  propertyText: string;
  setReview: booleanFunction;
  reviewBy: boolean;
}

const IssueCheckBoxItem: React.FC<props> = ({
  propertyText,
  setReview,
  reviewBy,
}) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: Colors.checkboxText,
          alignSelf: 'center',
        }}>
        {propertyText}
      </Text>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <CheckBox
          disabled={false}
          value={reviewBy}
          onValueChange={newValue => setReview(newValue)}
        />
      </View>
    </View>
  );
};

export default IssueCheckBoxItem;
