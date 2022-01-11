import React from 'react';
import {View} from 'react-native';
import IssueCheckBoxItem from '../../Common/issueCheckBoxItem';
import {Colors} from '../../Common/colors';
import {LanguageStore} from '../../../mobxStore/language-store';
import Et3Theme from '../../Common/getTheme';

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
        flexDirection:
          LanguageStore().languageText.get() === 'ENGLISH'
            ? 'row'
            : 'row-reverse',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Colors.BLUE,
        borderRadius: 10,
        height: Et3Theme().getAppUnits.get().initialHeight * 0.13,
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
