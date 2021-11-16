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
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";


const SpecificationScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.headLogo} source={require('../Source/DANBI_LogoName.png')} />
            </View>
            <View style={styles.setting}>
                <View style={styles.user}>
                    <Image
                        style={styles.userLogo}
                        source={require('../Source/person_inactivated.png')}
                    />
                    <Text>HEUN</Text>
                </View>
                    <TouchableOpacity>
                        <Image 
                            style={styles.edit}
                            source={require('../Source/edit.png')}
                        />
                    </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.waterStatus}>
                    <Image
                        style={styles.intakeImage}
                        source={require('../Source/waterIntakePicTest.png')}
                    />
                </View>
                <View style={styles.stampcontainer}>
                    <TouchableOpacity>
                        <Image
                            style={styles.stamp}
                            source={require('../Source/stamp.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.record}>
                <View style={styles.recordTable}>
 
                </View>
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
        flex: 1,
        flexDirection: "row",
        backgroundColor : "white",
        alignItems: "center",
        justifyContent : "center",
    },
    headLogo : {
        width: 200,
        height: 100,
        justifyContent: "center",
        alignContent: "center"
    },
    setting : {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
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
        backgroundColor: "white",
        flex: 7,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        borderColor: "black",
        borderBottomWidth: 2,
    },
    waterStatus : {
        flex: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    intakeImage : {
        flexDirection: "row",
        width: 250,
        height: 250,
        resizeMode: "contain",
    },
    stampcontainer:{
        alignSelf:"stretch",
    },
    stamp : {
        width: 40,
        height: 40,
        paddingBottom: 60,
        resizeMode: "contain",
    },
    record : {
        backgroundColor: "white",
        flex: 4,
        alignItems: "center",
        justifyContent: "center",

    },
    recordTable : {
        flex: 1,
        width: 300,
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: "#C1C1C1",
        borderRadius: 10,
    },
});