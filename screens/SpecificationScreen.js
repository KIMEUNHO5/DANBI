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

const DATA = [
    {
         id: '1',
         name: '1st log',
    },
    {
        id: '2',
        name: '2nd log',
    },
    {
        id: '3',
        name: '3rd log',
    },
  ];
  
const Item = ({ title }) => (
    <DataView>
        <Text>{title}</Text>
    </DataView>
  );

const SpecificationScreen = ({navigation}) => {
    const renderItem = ({ item }) => {return (
        <TouchableOpacity>
            <View style={ styles.item}>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );}

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
                    <View style={styles.username}>
                    <Text>HEUN</Text>
                    </View>
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
                    <SafeAreaView style>
                        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                        <View style={styles.pluscontainer}>
                            <TouchableOpacity>
                                <Image style={styles.plusicon} source={require('../Source/plus.png')}/>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView> 
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
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    user : {
        flexDirection: "row",
        alignItems: "center",
    },
    username : {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5,
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
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        backgroundColor: "#C1C1C1",
        borderRadius: 10,
    },
    item : {
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10,
        flexDirection:'row',
    },
    itemName : {
        width: 250,
        height: 20,
        fontSize: 13,
        fontWeight: "900",
        justifyContent: "center",
        paddingLeft: 10,
        marginTop: 5,
    },
    pluscontainer:{
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    plusicon:{
        height: 20,
        width: 20,
        resizeMode: "contain",
    },
});