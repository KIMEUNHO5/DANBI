import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native';
import { Header } from "react-native/Libraries/NewAppScreen";


const entryScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.entryimage}
                source={require('../Source/entry.png')}
            />
        </View>
    );
}

/*
<Image source={require('assets\icon.png')} />
*/
export default entryScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#FFFFFF",
        alignItems: "center",
        justifyContent : "center",
    },
    entryimage:{
        width:"100%",
        resizeMode: "contain",
    },
});