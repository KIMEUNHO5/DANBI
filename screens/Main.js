import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native';
import { Header } from "react-native/Libraries/NewAppScreen";


const mainScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../Source/DANBI_LogoName.png')} />
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
    },
    logo: {
        width: 120,
        height: 140,
        marginTop: 10,
        resizeMode: "contain",
      },
});