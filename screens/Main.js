import React, {useState} from "react";
import { ImageBackground ,SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useIsFocused } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { sendList, account_email, account_pw } from './LoginScreen';
import ChangePW from './ChangePW';
import Logout from "./Logout";
import DeleteAccountScreen from "./DeleteAccount";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";

  
const Drawer = createDrawerNavigator();
export let sendInfo = [];
export let currentID = 0;

const mainScreen = ({navigation}) => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerPosition: "right" }}>
            <Drawer.Screen 
            name="MainListScreen" 
            component={MainListScreen}  
            options = {{headerShown : false}}
            />
            <Drawer.Screen name="ChangePassword" component={ChangePW} options={{drawerLabel :'비밀번호 변경',headerShown : false}}/>
            <Drawer.Screen name="Logout" component={Logout} options={{drawerLabel :'로그아웃',headerShown : false}}/>
            <Drawer.Screen name="DeleteAccount" component={DeleteAccountScreen} options={{drawerLabel :'계정삭제',headerShown : false}}/>
        </Drawer.Navigator>
    );
}

function MainListScreen({ navigation }) {

    const [list,setList] = useState(sendList); // 계정 내 멤버 정보
    const isFocused = useIsFocused();
    const [selectedID, setSelectedID] = useState(0); 
    const [memberInfo, setMemberInfo] = useState([]); // 개인 상세 정보

    // useEffect(()=> { // 계정 내 멤버 reload
    //     list.forEach((value, index, array) => {
    //       if (value.member_type == 1) {
    //           value.img = require('../Source/person_activated.png');
    //       } else if (value.member_type == 2) {
    //           value.img = require('../Source/pet_activated.png');
    //       } else if (value.member_type == 3) {
    //           value.img = require('../Source/plant_activated.png');
    //       }
    //     })
    
    // }, [list]);
    useEffect(()=> {
        var key, count = 0;
        for(key in list){
          if(list.hasOwnProperty(key)){
            count++;
          }
        }
        if (!count){
        }
        else{
          sendList.forEach((value, index, array) => {
            if (value.member_type == 1) {
                value.img = require('../Source/person_activated.png');
            } else if (value.member_type == 2) {
                value.img = require('../Source/pet_activated.png');
            } else if (value.member_type == 3) {
                value.img = require('../Source/plant_activated.png');
            }
          });
        }
      }, [list]);

    useEffect(() => {
        currentID=selectedID;
    }, [selectedID])

    useEffect(() => { // 계정 정보 확인 -> 멤버 리스트 업데이트
        if (isFocused) {
            axios.post("http://35.212.138.86/auth/login", {
                email : account_email,
                pw : account_pw
              })
              .then(function(response) {
                setList(response.data.result);
              }).catch(function(error) {
                console.log(error);
              }).then(function() {
              }); 
        }
    }, [isFocused]);

    useEffect(() => { // 멤버 선택시 개인 생체 정보 저장. 
        if(memberInfo!=[]) {
            sendInfo = memberInfo;
            if (sendInfo.record == null){ // 인덱스 
                sendInfo.record = {};
              }else{
                sendInfo.record.forEach((value, index, array) => {
                  value.id = index+1;
                });
              }
            /*
            console.log(sendInfo);
            console.log("Before", sendInfo.next_intake);
            if (sendInfo.result[0].member_type == 1) { // 이미지 넣고 시간 포맷 변경
                sendInfo.result[0].img = require('../Source/person_inactivated.png');
                sendInfo.next_intake = sendInfo.next_intake.slice(11,16);
              sendInfo.record.forEach((value, index, array) => {
                value.date = value.date.slice(11,16);
              })
            } else if (sendInfo.result[0].member_type == 2) {
                sendInfo.result[0].img = require('../Source/pet_inactivated.png');
                sendInfo.next_intake = sendInfo.next_intake.slice(11,16);
              sendInfo.record.forEach((value, index, array) => {
                value.date = value.date.slice(11,16);
              })
            } else if (sendInfo.result[0].member_type == 3) {
                sendInfo.result[0].img = require('../Source/plant_inactivated.png');
                sendInfo.next_intake = sendInfo.next_intake.slice(0,10);
                sendInfo.record.forEach((value, index, array) => {
                value.date = value.date.slice(0,10);
              })
            }
            console.log("After", sendInfo.next_intake);
            */
        
        }
    }, [memberInfo]);


    const selectMember = async(info) => {
        setSelectedID(info.id);
        axios.post("http://35.212.138.86/member/specification", {
            member_id : info.id
        }).then(function(response) {
            setMemberInfo(response.data);
            console.log("memberInfo get in main");
            navigation.navigate('Spec');
        }).catch(function(error) {
            console.log("select member error \n" + error);
        }).then(function() {
        });
    };
    
    const renderItem = ({ item }) => {
        return (
        <TouchableOpacity onPress={()=>selectMember(item)}>
            <View style={ styles.item}>
                <Image style={styles.itemImg} source={item.img} ></Image>
                <Text style={styles.itemName}>{item.nickname}</Text>
            </View>
        </TouchableOpacity>
    );}

    return (
        <View style={styles.container}>
        <ImageBackground source = {require('../Source/main_background.png')} style = {styles.backgroundimage}>
        <StatusBar style="auto" />
        <View style={styles.body}>
            <View style={styles.memberListbg}>
                <SafeAreaView style={{flex:9}}>
                    <FlatList 
                    data={list} 
                    extraData={list}
                    renderItem={renderItem} 
                    keyExtractor={item => item.id} />
                </SafeAreaView> 
                <View style={styles.pluscontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
                        <Image style={styles.plusicon} source={require('../Source/plus.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ImageBackground>
    </View>
    );
  }
  

  

export default mainScreen;



const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    header : {
        flex : 1,
        flexDirection:"column",
        backgroundColor : 'white',
    },
    logobg_My: {
        flex : 1,
        flexDirection : "row",
        alignSelf: "flex-end",
      },
    body : {
        flex : 9,
        justifyContent : "center",
        alignItems: "center",
    },
    memberListbg :{
        flex:0.8,
        width: 300,
        height: 600,
        marginBottom:10,
        padding: 10,
    },
    item: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10,
        flexDirection:'row'
    },
    itemImg :{
        width:50,
        height:50,
        marginRight:10,
        resizeMode: "contain",
    },
    itemName :{
        fontSize:20,
        fontWeight: "300",
        justifyContent :"center",
        marginTop:15,
        marginHorizontal:10,
    },
    pluscontainer:{
        flex:1,
        backgroundColor:"white",
        borderTopWidth : StyleSheet.hairlineWidth,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        paddingTop : 10
    },
    plusicon:{
        height:30,
        width:30,
        resizeMode: "contain",
    },
});