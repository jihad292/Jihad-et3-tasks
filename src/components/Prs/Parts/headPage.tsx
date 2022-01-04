import React from 'react';
import {
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {ColorStore} from '../../../mobxStore/colorStore';

interface props {
  handleSort: voidFunction;
  name: string;
  value: string;
  handleChange: stringFunction;
}

const HeadPage: React.FC<props> = props => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            height: 'auto',
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              marginLeft: 20,
              marginRight: 40,
              borderBottomWidth: 1,
              borderColor: ColorStore().propertyBorderColor.get(),
              marginStart: 10,
            }}>
            <TextInput
              style={{
                color: ColorStore().textInputColor.get(),
                fontStyle: 'italic',
                height: 40,
                fontSize: 20,
              }}
              value={props.value}
              onChangeText={props.handleChange}
              placeholder="Search"
              placeholderTextColor={'black'}
            />
          </View>

          <View style={{marginEnd: 10}}>
            <Button
              color="rgb(0, 100, 500)"
              title={props.name}
              onPress={props.handleSort}></Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default HeadPage;
