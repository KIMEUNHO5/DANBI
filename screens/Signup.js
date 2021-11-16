import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native';
import { Header } from "react-native/Libraries/NewAppScreen";


const mainScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image style={styles.logo_DANBI} source={require('../Source/DANBI_LogoName.png')} />
                <Image style={styles.logo_My} source={require('../Source/mytab_icon.png')}></Image>
            </View>
            <View style={styles.body}>
                <View style={styles.memberList}><Text>here</Text></View>
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
    },
    header : {
        flex : 1,
        flexDirection:"row",
        backgroundColor : "#F5F5F5",
        alignItems: "center",
        justifyContent : "center",
    },
    body : {
        flex : 5,
        justifyContent : "center",
        alignItems: "center",
    },
    logo_DANBI: {
        width: 200,
        height: 100,
        justifyContent : "center",
      },
    logo_My: {
        width: 40,
        height: 100,
        resizeMode: "contain",

      },
    memberList :{
        flex :1,
        backgroundColor : "red",
        marginVertical: 20,
        marginHorizontal: 30

    }
});