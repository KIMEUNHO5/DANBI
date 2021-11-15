import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Image} from 'react-native';
const mainScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
            <Image
            source={require('assets/icon.png')}
          />
            </View>
        </View>
      );
}

export default mainScreen;
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "white"

    },
    header : {
        flexDirection:"row",
        marginTop: 100,
        justifyContent:"center"
    }
});