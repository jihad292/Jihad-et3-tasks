import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import i18n from '../../Language/Parts/i18n';
import ItemPropertyHeader from './itemPropertyHeader';
import ItemInputProperty from './itemInputProperty';
import ArrayPropertyItem from './arrayPropertyItem';
import CheckboxPropertyItem from './checkboxPropertyItem';
import {Colors} from '../../Common/colors';
import {LanguageStore} from '../../../mobxStore/language-store';
import Et3Theme from '../../Common/getTheme';

const PrItem = observer((props: prItem) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: Colors.BLACK,
          marginTop: Et3Theme().getAppUnits.get().initialHeight * 0.005,
          width: Et3Theme().getAppUnits.get().initialWidth * 0.88,
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <ItemPropertyHeader id={props.id} issue={props} />

        <View
          style={{
            flexDirection:
              LanguageStore().languageText.get() === 'ENGLISH'
                ? 'row'
                : 'row-reverse',
            width: '100%',
          }}>
          <ItemInputProperty comment={props.comment} link={props.link} />
        </View>

        <ArrayPropertyItem
          property1={props.se}
          propertyText1="se"
          property2={props.difficulty}
          propertyText2="difficulty"
        />

        <ArrayPropertyItem
          property1={props.platform}
          propertyText1="platform"
          property2={props.size}
          propertyText2="size"
        />

        <ArrayPropertyItem
          property1={props.status}
          propertyText1="status"
          property2={props.version}
          propertyText2="version"
        />

        <CheckboxPropertyItem
          property1={props.ByStatus}
          propertyText1="by"
          property2={props.AhStatus}
          propertyText2="ah"
          property3={props.HtStatus}
          propertyText3="ht"
        />

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: Colors.AZURE,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            {i18n.get('date')}
          </Text>
          <Text
            style={{
              color: Colors.OLIVE_GREEN,
              fontWeight: 'bold',
              fontSize: Et3Theme().getAppUnits.get().initialHeight * 0.02,
            }}>
            ''+{props.dateS}
          </Text>
        </View>
      </View>
    </>
  );
});

export default PrItem;
