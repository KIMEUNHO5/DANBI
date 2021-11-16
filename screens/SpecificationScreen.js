import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState, Component } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  Button,
  TextInput
} from "react-native";

const SpecificationScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>DANBI LOGO</Text>
            </View>
            <View style={styles.setting}>
                <View style={styles.user}>
                    <Image
                        style={styles.userLogo}
                        source={require('../Source/person_inactivated.png')}
                    />
                    <Text>HEUN</Text>
                </View>
                <Image 
                    style={styles.edit}
                    source={require('../Source/edit.png')}
                />
            </View>
            <View style={styles.body}>
                <View style={styles.waterStatus}>
                    <Text>water status</Text>
                </View>
                <Image
                    style={styles.stamp}
                    source={require('../Source/stamp.png')}
                />
            </View>
            <View style={styles.record}>
                <Text>Record</Text>
            </View>
        </View>
    );
}

export default SpecificationScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    header : {
        flex: 1.5,
        flexDirection: "row",
        backgroundColor : "#F5F5F5",
        alignItems: "center",
        justifyContent : "center",
    },
    setting : {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "red",
    },
    userLogo : {
        flexDirection: "row",
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    user : {
        flexDirection: "row",
        alignItems: "center",
    },
    edit : {
        flexDirection: "row",
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    body : {
        flex: 7,
        backgroundColor: "yellow",
        alignItems: "center",
        paddingHorizontal: 20,
        borderColor: "black",
        borderBottomWidth: 2,
    },
    waterStatus : {
        flex: 5,
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    stamp : {
        alignSelf: "stretch",
        width: 40,
        height: 40,
        paddingBottom: 60,
        resizeMode: "contain",
    },
    record : {
        flex: 4,
        backgroundColor: "pink",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    }
});