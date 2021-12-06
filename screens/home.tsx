import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'rgb(204, 204, 255)' }}>
         
          <Text style={styles.text}>Welcome To your Prs Application </Text>
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