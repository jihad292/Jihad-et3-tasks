import React from 'react';
import {View} from 'react-native';
import Property from './itemProperty';
import i18n from '../../Language/Parts/i18n';

interface Props {
  comment: string;
  link: string;
}

const ItemInputProperty: React.FC<Props> = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginTop: 10,
        marginBottom: 10,
      }}>
      <Property text={i18n.get('comment')} property={props.comment} />
      <Property text={i18n.get('link')} property={props.link} />
    </View>
  );
};

export default ItemInputProperty;