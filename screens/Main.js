import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Alert, Text, View, FlatList, TouchableOpacity, Pressable, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, CommonActions, useIsFocused } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login, { sendList, account_email, account_pw } from './LoginScreen';
import Signup from './Signup';
import ChangePW from './ChangePW';
import StackNavigator from '../App';
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
    const [selectedItem, setSelectedItem] = useState([]); // 개인 단순 정보

    useEffect(()=> { // 계정 내 멤버 reload
        list.forEach((value, index, array) => {
          if (value.member_type == 1) {
              value.img = require('../Source/person_activated.png');
          } else if (value.member_type == 2) {
              value.img = require('../Source/pet_activated.png');
          } else if (value.member_type == 3) {
              value.img = require('../Source/plant_activated.png');
          }
        })
        //console.log(list);
    
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
                //console.log(list);
              }).catch(function(error) {
                //console.log("account loading failed");
                console.log(error);
              }).then(function() {
                //console.log("^^");
              }); 
        }
    }, [isFocused]);

    useEffect(() => { // 멤버 선택시 개인 생체 정보 저장
        
        if(!memberInfo==[]) {
            sendInfo = memberInfo;
            console.log(sendInfo);
            //console.log("sendInfo here");
            //console.log(sendInfo);
            if (memberInfo.member_type == 1) {
                memberInfo.img = require('../Source/person_inactivated.png');
            } else if (memberInfo.member_type == 2) {
                memberInfo.img = require('../Source/pet_inactivated.png');
            } else if (memberInfo.member_type == 3) {
                memberInfo.img = require('../Source/plant_inactivated.png');
            }
        }
    }, [memberInfo]);


    const selectMember = async(info) => {
        setSelectedID(info.id);
        axios.post("http://35.212.138.86/member/specification", {
            member_id : info.id
        }).then(function(response) {
            //console.log("selectedID : ", selectedID);
            //console.log("response data here");
            //console.log(response.data);
            setMemberInfo(response.data.result[0]);
            //console.log("memberInfo in main");
            //console.log(memberInfo);
            //console.log("sendInfo in main");
            //console.log(sendInfo); 
            console.log(response.data);
            navigation.navigate('Spec');
        }).catch(function(error) {
            console.log(error);
        }).then(function() {
            //console.log("^^");
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
    </View>
    );
  }
  

  

export default mainScreen;



const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    header : {
        flex : 1,
        flexDirection:"column",
        backgroundColor : 'white',
    },
    // logo_DANBI: {
    //     flex : 10,
    //     //backgroundColor: "green",
    //     resizeMode: "cover", 
    //     height: 130,
    //     alignContent : "center",
    //     justifyContent : "center"
    //   },
    logobg_My: {
        flex : 1,
        flexDirection : "row",
        //backgroundColor :"blue",
        alignSelf: "flex-end",
        //marginVertical : 10,
        //marginLeft :10,
        
      },
    logo_My: {
        flex : 1,
        //backgroundColor :"yellow",
        width : 47,
        height: 47,
        resizeMode: "contain",
        margin: 10,
        //marginLeft :330

      },
    body : {
        backgroundColor :"#FFFFFF",
        flex : 9,
        justifyContent : "center",
        alignItems: "center",
    },
    memberListbg :{
        flex:0.8,
        width: 300,
        height: 600,
        marginHorizontal: 30,
        padding: 10,
        borderWidth : 1,
        borderColor :"black",
        backgroundColor: "white",
        borderRadius: 10,
    },
    item: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10,
        flexDirection:'row'
    },
    itemImg :{
        //backgroundColor: "red",
        width:50,
        height:50,
        marginRight:10,
        resizeMode: "contain",
    },
    itemName :{
        //backgroundColor :"blue",
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