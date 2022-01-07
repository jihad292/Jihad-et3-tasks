import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import i18n from '../../Language/Parts/i18n';
import ItemPropertyHeader from './itemPropertyHeader';
import ItemInputProperty from './itemInputProperty';
import ArrayPropertyItem from './arrayPropertyItem';
import CheckboxPropertyItem from './checkboxPropertyItem';
import {Colors} from '../../Common/colors';

const PrItem = observer((props: prItem) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.black,
          marginTop: 15,
          width: 290,
          borderRadius: 20,
          paddingBottom: 15,
          marginBottom: 20,
        }}>
        <ItemPropertyHeader id={props.id} issue={props} />

        <ItemInputProperty comment={props.comment} link={props.link} />

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
              color: Colors.azure,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            {i18n.get('date')}
          </Text>
          <Text
            style={{
              color: Colors.oliveGreen,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            ''+{props.dateS}
          </Text>
        </View>
      </View>
    </>
  );
});

export default PrItem;
