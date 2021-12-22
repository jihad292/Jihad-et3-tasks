import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ColorStore} from '../../mobxStore/colorStore';
// import { PrsStore } from '../../mobxStore/prsStore';

const HomeScreen = () => {
  // setTimeout(stopTime,250000);//setting the stop time
  //   const intervalId = setInterval(() =>{
  //       console.log(PrsStore().prsTotalNumber.get())},2000);
  //   function stopTime(){
  //       clearInterval(intervalId)
  //   }
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
