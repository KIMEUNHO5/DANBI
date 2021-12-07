import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState, Component, useEffect} from "react";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import * as Linking from 'expo-linking';
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
import {sendInfo, currentID} from './Main.js'
import axios from 'axios';



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
    const [memberInfo, setMemberInfo] = useState(sendInfo);
    const [notiArray, setNotiArray] = useState([]);

    useEffect(()=> { 
        if (memberInfo.member_type == 1) {
            memberInfo.img = require('../Source/person_inactivated.png');
        } else if (memberInfo.member_type == 2) {
            memberInfo.img = require('../Source/pet_inactivated.png');
        } else if (memberInfo.member_type == 3) {
            memberInfo.img = require('../Source/plant_inactivated.png');
        }
        //console.log("memberInfo in spec");
        //console.log(memberInfo);
        //console.log("memberinfo.nickname");
        //console.log(memberInfo.nickname);
    
    }, [memberInfo]);

    const showNotification = async() => {
        axios.post("http://35.212.138.86/notification/notification", {
             member_id : currentID
         }).then(function(response) {
           //console.log(response.data);
           //setNotiArray(response.data.result[0]);
           Notifications.scheduleNotificationAsync({
            content: {
                title: response.data.result[0].nickname + "님의 수분 섭취 시간입니다.",
                body: response.data.result[0].intake_once + 'ml 섭취하세요',
            },
            trigger: {
                seconds: 1, //onPress가 클릭이 되면 1초 뒤에 알람이 발생합니다.
            },
        });
         }).catch(function(error) {
           //console.log(error);
         }).then(function() {
           //console.log("^^");;
         });
        
    };

    const pressEdit = async() => {
        if (memberInfo.member_type == 1) {
            navigation.navigate('Edit_person');
        } else if (memberInfo.member_type == 2) {
            navigation.navigate('Edit_pet');
        } else if (memberInfo.member_type == 3) {
            navigation.navigate('Edit_plant');
        }
    }

    

    const renderItem = ({ item }) => {
        return (
        <TouchableOpacity >
            <View style={ styles.item}>
                <Text style={styles.itemName}>{currentID}</Text>
            </View>
        </TouchableOpacity>
    );}

    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <View style={styles.user}>
                    <Image
                        style={styles.userLogo}
                        source={memberInfo.img}
                    />
                    <View style={styles.username}>
                    <Text style={{fontSize:20}}>{memberInfo.nickname}</Text>
                    </View>
                </View>
                <Button
                        title="알림"
                        onPress={showNotification}></Button>
                    <TouchableOpacity onPress={pressEdit}>
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
                <View style={{flexDirection:'row', paddingLeft : 30, paddingRight: 380}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Calend')}>
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
                            <TouchableOpacity onPress={() => navigation.navigate('AddRecord')}>
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

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "white",
    },
    setting : {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
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
        paddingLeft: 10,
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
        marginBottom: 20,
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
    eachLine: {
        flex:1,
        flexDirection:"row",
        paddingTop : 10,
        paddingBottom : 10,
        alignContent:"center",
        justifyContent:"center",
      },
});