import React from 'react';
import {View} from 'react-native';
import IssueCheckBoxItem from '../../Common/issueCheckBoxItem';
import {Colors} from '../../Common/colors';

interface Props {
  propertyText1: string;
  reviewBy1: boolean;
  setReviewBy1: booleanFunction;
  propertyText2: string;
  reviewBy2: boolean;
  setReviewBy2: booleanFunction;
  propertyText3: string;
  reviewBy3: boolean;
  setReviewBy3: booleanFunction;
}

const CheckboxSection: React.FC<Props> = props => {
  const {
    propertyText1,
    reviewBy1,
    setReviewBy1,
    propertyText2,
    reviewBy2,
    setReviewBy2,
    propertyText3,
    reviewBy3,
    setReviewBy3,
  } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        marginVertical: 10,
        borderColor: Colors.blue,
        borderRadius: 10,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}>
        <IssueCheckBoxItem
          propertyText={propertyText1}
          reviewBy={reviewBy1}
          setReview={setReviewBy1}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}>
        <IssueCheckBoxItem
          propertyText={propertyText2}
          reviewBy={reviewBy2}
          setReview={setReviewBy2}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}>
        <IssueCheckBoxItem
          propertyText={propertyText3}
          reviewBy={reviewBy3}
          setReview={setReviewBy3}
        />
      </View>
    </View>
  );
};

export default CheckboxSection;
