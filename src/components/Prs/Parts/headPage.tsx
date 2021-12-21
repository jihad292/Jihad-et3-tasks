import React from 'react';
import {
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {StyleSheet} from 'react-native';
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
        <View style={styles.headContainer}>
          <View style={styles.search}>
            <TextInput
              style={styles.textInput}
              value={props.value}
              onChangeText={props.handleChange}
              placeholder="Search"
              placeholderTextColor={'black'}
            />
          </View>

          <View style={styles.button}>
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
const styles = StyleSheet.create({
  headContainer: {
    flexDirection: 'row',
    marginTop: 10,
    height: 'auto',
    alignItems: 'flex-start',
  },
  inputContainer: {
    alignItems: 'center',
  },
  button: {
    marginEnd: 10,
  },
  search: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 40,
    borderBottomWidth: 1,
    borderColor: ColorStore().propertyBorderColor.get(),
    marginStart: 10,
  },
  textInput: {
    color: ColorStore().textInputColor.get(),
    fontStyle: 'italic',
    height: 40,
    fontSize: 20,
  },
});
