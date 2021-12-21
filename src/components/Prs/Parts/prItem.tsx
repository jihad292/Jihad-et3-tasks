import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PrsStore} from '../../../mobxStore/prsStore';
import {prItemStyle} from './prItemStyle';
import {observer} from 'mobx-react';
import {LanguageStore} from '../../../mobxStore/languageStore';
import {UpdateStore} from '../../../mobxStore/updateStore';
import i18n from '../../Language/Parts/i18n';

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
          <Property
            text={i18n.get('id', LanguageStore().languageStateString.get())}
            property={props.id}
          />

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
          text={i18n.get('comment', LanguageStore().languageStateString.get())}
          property={props.comment}
        />
        <Property
          text={i18n.get('link', LanguageStore().languageStateString.get())}
          property={props.link}
        />

        <View style={prItemStyle.smallPropertiesDiv}>
          <Property
            text={i18n.get('se', LanguageStore().languageStateString.get())}
            property={props.se}
          />
          <Property
            text={i18n.get(
              'difficulty',
              LanguageStore().languageStateString.get(),
            )}
            property={props.difficulty}
          />
        </View>

        <View style={prItemStyle.smallPropertiesDiv}>
          <Property
            text={i18n.get(
              'platform',
              LanguageStore().languageStateString.get(),
            )}
            property={props.platform}
          />
          <Property
            text={i18n.get('size', LanguageStore().languageStateString.get())}
            property={props.size}
          />
        </View>

        <View style={prItemStyle.smallPropertiesDiv}>
          <Property
            text={i18n.get('status', LanguageStore().languageStateString.get())}
            property={props.status}
          />
          <Property
            text={i18n.get(
              'version',
              LanguageStore().languageStateString.get(),
            )}
            property={props.version}
          />
        </View>

        <View style={prItemStyle.smallPropertiesDiv}>
          <Property
            text={i18n.get('by', LanguageStore().languageStateString.get())}
            property={props.ByStatus}
          />
          <Property
            text={i18n.get('ah', LanguageStore().languageStateString.get())}
            property={props.AhStatus}
          />
          <Property
            text={i18n.get('ht', LanguageStore().languageStateString.get())}
            property={props.HtStatus}
          />
        </View>

        <View style={prItemStyle.dateContainer}>
          <Text style={prItemStyle.dateContainerText}>
            {i18n.get('date', LanguageStore().languageStateString.get())}
          </Text>
          <Text style={prItemStyle.propertyData}>''+{props.dateS}</Text>
        </View>
      </View>
    </>
  );
});

export default PrItem;
