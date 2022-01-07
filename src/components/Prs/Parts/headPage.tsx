import React from 'react';
import {
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Colors} from '../../Common/colors';

interface props {
  handleSort: voidFunction;
  name: string;
  value: string;
  handleChange: stringFunction;
}

const HeadPage: React.FC<props> = props => {
  const {handleSort, name, value, handleChange} = props;
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
              borderColor: Colors.blue,
              marginStart: 10,
            }}>
            <TextInput
              style={{
                color: Colors.black,
                fontStyle: 'italic',
                height: 40,
                fontSize: 20,
              }}
              value={value}
              onChangeText={handleChange}
              placeholder="Search"
              placeholderTextColor={Colors.black}
            />
          </View>

          <View style={{marginEnd: 10}}>
            <Button title={name} onPress={handleSort}></Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default HeadPage;
