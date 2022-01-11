import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../Common/colors';
import Et3Theme from '../Common/getTheme';

interface Props {
  propertyText: string;
  setReview: booleanFunction;
  reviewBy: boolean;
}

const IssueCheckBoxItem: React.FC<Props> = props => {
  const {propertyText, setReview, reviewBy} = props;
  return (
    <View style={{width: Et3Theme().getAppUnits.get().childX * 30}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: Et3Theme().getThemeData.get().getKhFontSize(5),
          color: Colors.DARKS_SLATE_GRAY,
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
