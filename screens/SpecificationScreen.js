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

const App = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>DANBI LOGO</Text>
            </View>
            <View style={styles.setting}>
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

export default App;
const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    header : {
        flex: 3,
        flexDirection: "row",
        backgroundColor : "#F5F5F5",
        alignItems: "center",
        justifyContent : "center",
    },
    setting : {
        flex: 2,
        backgroundColor: "red",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    user : {
      flex: 2,
      justifyContent: "center",
      flexDirection: "row",
      paddingHorizontal: 20,
    },
    edit : {
        flex: 2,
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
        flex: 3,
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    stamp : {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    line : {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    record : {
        flex: 5,
        backgroundColor: "pink",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    }
});