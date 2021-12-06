import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const IssueScreen = () => {
    return(
        <View style={styles.container}> 
            <Text>
                issue
            </Text>
        </View>
    )
}

export default IssueScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }})