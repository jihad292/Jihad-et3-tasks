import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

interface props {
  text: string;
  handleLanguage: voidFunction;
}

export const ButtonHandler: React.FC<props> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.handleLanguage}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '25%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
    fontStyle: 'italic',
  },
});
