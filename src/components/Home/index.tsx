import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { PrsStore } from '../../mobxStore/prsStore';

const HomeScreen = () => {
  setTimeout(stopTime,250000);//setting the stop time
    const intervalId = setInterval(() =>{
        console.log(PrsStore().prsTotalNumber.get())},2000);
    function stopTime(){
        clearInterval(intervalId)   
    }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(204, 204, 255)',
      }}>
      <FontAwesome5 name={'robot'} size={80} color={'olivedrab'} />
      <Text style={styles.text}>Welcome To your Prs Application </Text>
      <FontAwesome5
        name={'exclamation-triangle'}
        size={80}
        color={'olivedrab'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'rgb(0, 0, 204)',
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic',
  },
  arrowDiv: {
    padding: 50,
  },
});

export default HomeScreen;
