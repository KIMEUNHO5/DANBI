import React,{ useState, useEffect, useRef} from "react";
import * as Notifications from 'expo-notifications';
import { useIsFocused } from '@react-navigation/native';
import { 
  ImageBackground,
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Platform,
  Alert
} from "react-native";
import {sendInfo, currentID} from './Main.js'
import axios from 'axios';
import Constants from 'expo-constants';


export let puriInfo = [];

const SpecificationScreen = ({navigation}) => {
    const [memberInfo, setMemberInfo] = useState(sendInfo);
    console.log("sendInfo in spec");
    console.log(sendInfo);
    console.log("memberInfo in spec");
    console.log(memberInfo);
    const [puriArray, setPuriArray] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
      if (!puriArray==[]) {
        puriInfo = puriArray;
      }
    }, [puriArray])
    //noti
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const react1 = () => {
        axios.post("http://35.212.138.86/purifier/reaction", {
            member_id : currentID,
            reaction : "1"
          })
          .then(function (response) { 
            setPuriArray(response.data.result);
            navigation.navigate('Purifier');
          }).catch(function (error) {
            console.log("마시기 error\n" + error);
          }).then(function() {
          });}

      const react2 = () => {
        axios.post("http://35.212.138.86/purifier/reaction", {
            member_id : currentID,
            reaction : "2"
          })
          .then(function (response) {
          }).catch(function (error) {
            console.log(error);
          }).then(function() {
          });}

        const react3 = () => {
          axios.post("http://35.212.138.86/purifier/reaction", {
              member_id : currentID,
              reaction : "3"
            })
            .then(function (response) {
            }).catch(function (error) {
              console.log(error);
            }).then(function() {
            });
          };

    useEffect(()=> { 
        var key, count = 0;
        for(key in memberInfo.record){
          if(memberInfo.record.hasOwnProperty(key)){
            count++;
          }
        }

        if (!count){ // 인덱스 
          memberInfo.record = {};
        }else{
          memberInfo.record.forEach((value, index, array) => {
            value.id = index+1;
          });
        }
        if (memberInfo.result[0].member_type == 1) { // 이미지 넣고 시간 포맷 변경
            memberInfo.result[0].img = require('../Source/person_inactivated.png');
            memberInfo.next_intake = sendInfo.next_intake.slice(11,16);
            if (memberInfo.record[0] == null){
            }else{
              memberInfo.record.forEach((value, index, array) => {
              value.date = value.date.slice(11,16);
            });}
        } else if (memberInfo.result[0].member_type == 2) {
            memberInfo.result[0].img = require('../Source/pet_inactivated.png');
            memberInfo.next_intake = sendInfo.next_intake.slice(11,16);
            if (memberInfo.record[0] == null){
            }else{
              memberInfo.record.forEach((value, index, array) => {
              value.date = value.date.slice(11,16);
            });}
        } else if (memberInfo.result[0].member_type == 3) {
            memberInfo.result[0].img = require('../Source/plant_inactivated.png');
            memberInfo.next_intake = sendInfo.next_intake.slice(11,16);
            if (memberInfo.record[0] == null){
            }else{
              memberInfo.record.forEach((value, index, array) => {
              value.date = value.date.slice(0,10);
            });}
        }
        
        if (memberInfo.today_intake == 0) { // 도식화
          memberInfo.cup_img = require('../Source/cup_0.png');
        } else if (memberInfo.today_intake <= 25) {
          memberInfo.cup_img = require("../Source/cup_25.png");
        } else if (memberInfo.today_intake <= 50) {
          memberInfo.cup_img = require("../Source/cup_50.png");
        } else if (memberInfo.today_intake <= 75) {
          memberInfo.cup_img = require("../Source/cup_75.png");
        } else {
          memberInfo.cup_img = require("../Source/cup_100.png");
        }

    }, [memberInfo]);

    useEffect(() => { // 계정 정보 확인 -> 멤버 리스트 업데이트
      if (isFocused) {
          axios.post("http://35.212.138.86/member/specification", {
              member_id : currentID
            })
            .then(function(response) {
              setMemberInfo(response.data);
            }).catch(function(error) {
              console.log(error);
            }).then(function() {
            }); 
      }
  }, [isFocused]);

    //noti
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            axios.post("http://35.212.138.86/notification/notification", {
             member_id : currentID
         }).then(function(response) {
            Alert.alert(
                response.data.result[0].nickname+"님의 수분 섭취 시간입니다",
                response.data.result[0].intake_once+"ml 섭취하세요",
                  [
                    {
                      text: "물받기",
                      onPress: react1
                    },
                    {
                      text: "마시기",
                      onPress: react2
                    },
                    { 
                      text: "미루기", 
                      onPress: react3
                    }
                  ]
                );
          console.log("OK")
         }).catch(function(error) {
           console.log(error);
         }).then(function() {
         });
            
        
        
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
      }, []);

    const showNotification = async() => {
        axios.post("http://35.212.138.86/notification/notification", {
             member_id : currentID
         }).then(function(response) {
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
           console.log(error);
         }).then(function() {
         });
        
    };

    const pressEdit = async() => {
        if (memberInfo.result[0].member_type == 1) {
            navigation.navigate('Edit_person');
        } else if (memberInfo.result[0].member_type == 2) {
            navigation.navigate('Edit_pet');
        } else if (memberInfo.result[0].member_type == 3) {
            navigation.navigate('Edit_plant');
        }
    }
    

    

    const renderItem = ({ item }) => {

        return (
            <View style={styles.item}>
                <View style={{justifyContent:"center", alignItems:"center", flex:1}}><Text style={styles.itemName}>{item.date}</Text></View>
                <View style={{justifyContent:"center", alignItems:"center", flex:1}}><Text style={styles.itemName}>{item.actual_intake}mL</Text></View>
            </View>
    );}

    return (
        <View style={styles.container}>
          <ImageBackground source = {require('../Source/spec_background.png')} style = {styles.backgroundimage}>
            <View style={styles.setting}>
                <View style={styles.user}>
                    <Image
                        style={styles.userLogo}
                        source={memberInfo.result[0].img}
                    />
                    <View style={styles.username}>
                      <Text style={{fontSize:20, fontWeight:"500",}}>{memberInfo.result[0].nickname}</Text>
                    </View>
                </View>
                    <TouchableOpacity onPress={showNotification}>
                        <Text>
                          알림
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pressEdit}>
                        <Image 
                            style={styles.edit}
                            source={require('../Source/edit.png')}
                        />
                    </TouchableOpacity>
                    
            </View>
            <View style={styles.body}>
                <View style={styles.waterStatus}>
                  <Text style={{fontSize : 30, paddingBottom : 20, fontWeight:"700"}}>{memberInfo.today_intake}%</Text>
                    <Image
                        style={styles.intakeImage}
                        source={memberInfo.cup_img}
                    />
                </View>
                <View style={{flexDirection:'row', paddingLeft : 92, paddingRight: 380}}>
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
                    <SafeAreaView style={{flex:1}}>
                        <FlatList style={{flex:5}} data={memberInfo.record} renderItem={renderItem} keyExtractor={item => item.id} />
                        <View style={styles.next_item}>
                          <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
                            <Text style={styles.nextItemName}>{memberInfo.next_intake}</Text>
                          </View>
                          <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
                            <Text style={styles.nextItemName}>{memberInfo.result[0].intake_once}mL</Text>
                          </View>
                        </View>
                      
                        <View style={styles.pluscontainer}>
                          <TouchableOpacity onPress={() => navigation.navigate('AddRecord')}>
                            <Image style={styles.plusicon} source={require('../Source/plus.png')}/>
                          </TouchableOpacity>
                        </View>
                    </SafeAreaView> 
                </View>
            </View>
          </ImageBackground>
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
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  } 
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "white",
    },
    backgroundimage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    setting : {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 37,
        paddingHorizontal: 58,
    },
    userLogo : {
        flexDirection: "row",
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    user : {
        width: 150,
        flexDirection: "row",
        alignItems: "center",
    },
    username : {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
    },
    edit : {
        flexDirection: "row",
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    body : {
        flex: 7,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    waterStatus : {
        flex: 5,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    intakeImage : {
        flexDirection: "row",
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
    stampcontainer:{
        alignSelf:"stretch",
    },
    stamp : {
        width: 35,
        height: 35,
        paddingBottom: 70,
        resizeMode: "contain",
    },
    record : {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
    },
    recordTable : {
        flex: 1,
        width: 300,
        marginTop: 10,
        marginBottom: 15,
        padding: 10,
    },
    item : {
        flex:0.3,
        padding: 5,
        flexDirection:'row',
        justifyContent : "center",
        alignItems:"center"
    },
    next_item : {
      flex:0.2,
      padding: 10,
      flexDirection:'row',
      justifyContent : "center",
      alignItems:"center",
      borderTopWidth : StyleSheet.hairlineWidth,
      borderTopColor : "lightgray",
      
  },
    itemName : {
        height: 20,
        fontSize: 17,
        fontWeight: "400",
        paddingLeft: 10,
        marginTop: 5,
    },
    nextItemName : {
      height: 20,
      fontSize: 17,
      fontWeight: "400",
      color:"lightgray",
      paddingLeft: 10,
      marginTop: 5,
  },
    pluscontainer:{
        borderTopWidth : StyleSheet.hairlineWidth,
        borderTopColor : "lightgray",
        flex:0.2,
        height: 40,
        paddingTop:10,
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