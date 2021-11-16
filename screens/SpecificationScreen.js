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
                <Image
                    style={styles.userLogo}
                    source={require('../Source/person_inactivated.png')}
                />
                <View style={styles.user}>
                    <Text>HEUN</Text>
                </View>
                <View style={styles.edit}>
                    <Text>edit</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.waterStatus}>
                    <Text>water status</Text>
                </View>
                <View style={styles.stamp}>
                    <Text>stamp</Text>
                </View>
                <View style={styles.line}>
                    <Text>line</Text>
                </View>
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
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "red",
    },
    userLogo : {
        width: 30,
        height: 30,

    },
    user : {
      justifyContent: "center",
      flexDirection: "row",
      paddingHorizontal: 20,
    },
    edit : {
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    body : {
        flex: 5,
        backgroundColor: "yellow",
        justifyContent : "center",
        alignItems: "center",
    },
    waterStatus : {
        flex: 5,
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    stamp : {
        backgroundColor: "blue",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    line : {
        backgroundColor: "green",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    record : {
        flex: 4,
        backgroundColor: "pink",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    }
});