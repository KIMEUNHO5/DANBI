import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native';

const mainScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Text>Hello!</Text>
            </View>
        </View>
    );
}

/*
<Image source={require('assets\icon.png')} />
*/
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