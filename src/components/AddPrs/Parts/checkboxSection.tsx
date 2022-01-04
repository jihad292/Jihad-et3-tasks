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
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        marginVertical: 10,
        borderColor: Colors.addBorderCheckbox,
        borderRadius: 10,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}>
        <IssueCheckBoxItem
          propertyText={props.propertyText1}
          reviewBy={props.reviewBy1}
          setReview={props.setReviewBy1}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}>
        <IssueCheckBoxItem
          propertyText={props.propertyText2}
          reviewBy={props.reviewBy2}
          setReview={props.setReviewBy2}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}>
        <IssueCheckBoxItem
          propertyText={props.propertyText3}
          reviewBy={props.reviewBy3}
          setReview={props.setReviewBy3}
        />
      </View>
    </View>
  );
};

export default CheckboxSection;
