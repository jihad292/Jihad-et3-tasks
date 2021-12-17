import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PrsStore} from '../../../mobxStore/prsStore';
import {prItemStyle} from './prItemStyle';
import {observer} from 'mobx-react';
import {LanguageStore} from '../../../mobxStore/languageStore';
import {UpdateStore} from '../../../mobxStore/updateStore';

interface propertyProps {
  text: string;
  property: StringNumber;
}
const Property: React.FC<propertyProps> = props => {
  return (
    <View style={prItemStyle.propoertySection}>
      <Text style={prItemStyle.propertyText}>{props.text}:</Text>
      <Text style={prItemStyle.propertyData}>{props.property}</Text>
    </View>
  );
};

const PrItem = observer((props: prItem) => {
  return (
    <>
      <View style={prItemStyle.container}>
        <View style={prItemStyle.smallPropertiesDiv}>
          <Property text="ID" property={props.id} />

          <View style={prItemStyle.actionSymbol}>
            <TouchableOpacity
              onPress={() => UpdateStore().openUpdateModal(props)}>
              <FontAwesome5 name={'pen-alt'} size={25} color="white" />
            </TouchableOpacity>
          </View>

          <View style={prItemStyle.actionSymbol}>
            <TouchableOpacity onPress={() => PrsStore().deletePr(props.id)}>
              <FontAwesome5 name={'trash-alt'} size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <Property
          text={LanguageStore().commentTitle.get()}
          property={props.comment}
        />
        <Property
          text={LanguageStore().linkTitle.get()}
          property={props.link}
        />

        <View style={prItemStyle.smallPropertiesDiv}>
          <Property text="SE" property={props.se} />
          <Property text="Difficulty" property={props.difficulty} />
        </View>

        <View style={prItemStyle.smallPropertiesDiv}>
          <Property text="Platform" property={props.platform} />
          <Property text="Size" property={props.size} />
        </View>

        <View style={prItemStyle.smallPropertiesDiv}>
          <Property text="Status" property={props.status} />
          <Property text="Version" property={props.version} />
        </View>

        <View style={prItemStyle.smallPropertiesDiv}>
          <Property text="Reaview by BY" property={props.ByStatus} />
          <Property text="Reaview by AH" property={props.AhStatus} />
          <Property text="Reaview by HT" property={props.HtStatus} />
        </View>

        <View style={prItemStyle.dateContainer}>
          <Text style={prItemStyle.dateContainerText}>Date : </Text>
          <Text style={prItemStyle.dateContainerText}>''+{props.dateS}</Text>
        </View>
      </View>
    </>
  );
});

export default PrItem;
