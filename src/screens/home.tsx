import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'rgb(204, 204, 255)' }}>
          <FontAwesome5 name={'robot'} size={80} color={'olivedrab'} />
          <Text style={styles.text}>Welcome To your Prs Application </Text>
          <FontAwesome5 name={'exclamation-triangle'} size={80} color={'olivedrab'} />
        </View>
      );
    }
  
    const styles = StyleSheet.create(
      {
        text:{
          color:'rgb(0, 0, 204)',
          fontWeight:'bold',
          fontSize:20,
          fontStyle:'italic',
        },
        arrowDiv:{
          padding:50,
        }
      }
    )

    export default HomeScreen