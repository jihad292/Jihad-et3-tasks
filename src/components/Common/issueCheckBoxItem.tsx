import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../Common/colors';

interface Props {
  propertyText: string;
  setReview: booleanFunction;
  reviewBy: boolean;
}

const IssueCheckBoxItem: React.FC<Props> = props => {
  const {propertyText, setReview, reviewBy} = props;
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: Colors.darkslategrey,
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
