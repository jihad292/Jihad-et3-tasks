import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ColorStore} from '../../mobxStore/colorStore';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorStore().homePageBackgroundColor.get(),
      }}>
      <FontAwesome5
        name={'robot'}
        size={80}
        color={ColorStore().homePageIconsColor.get()}
      />
      <Text style={styles.text}>Welcome To your Prs Application </Text>
      <FontAwesome5
        name={'exclamation-triangle'}
        size={80}
        color={ColorStore().homePageIconsColor.get()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: ColorStore().homePageTextColor.get(),
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic',
  },
  arrowDiv: {
    padding: 50,
  },
});

export default HomeScreen;
