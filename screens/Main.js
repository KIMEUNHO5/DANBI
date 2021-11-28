import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Pressable, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './LoginScreen';
import Signup from './Signup';
import ChangePW from './ChangePW';
import StackNavigator from '../App';
import Logout from "./Logout";

const DATA = [
    {
         id: '1',
         name: '수쟁이',
         img: require('../Source/person_activated.png')
    },
    {
        id: '2',
        name: '으노',
        img: require('../Source/person_activated.png')
    },
    {
        id: '3',
        name: '지유니',
        img: require('../Source/person_activated.png')
    },
    {
        id: '4',
        name: '횬',
        img: require('../Source/person_activated.png')
      },
    {
        id: '5',
        name: '흔',
        img: require('../Source/person_activated.png')
    },
    {
        id: '6',
        name: 'SJ',
        img: require('../Source/person_activated.png')
    },
    {
        id: '7',
        name: '왜살지',
        img: require('../Source/person_activated.png')
    },
  ];
  
const Drawer = createDrawerNavigator();

const mainScreen = ({navigation}) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
            name="MainListScreen" 
            component={MainListScreen}  
            options = {{headerShown : false}}
            />
            <Drawer.Screen name="ChangePassword" component={ChangePW} options={{drawerLabel :'비밀번호 변경',headerShown : false}}/>
            <Drawer.Screen name="Logout" component={Logout} options={{drawerLabel :'로그아웃'}}/>
            <Drawer.Screen name="DeleteAccount" component={Signup} options={{drawerLabel :'계정삭제'}}/>
        </Drawer.Navigator>
    );
}

function MainListScreen({ navigation }) {
    const renderItem = ({ item }) => {return (
        <TouchableOpacity>
            <View style={ styles.item}>
                <Image style={styles.itemImg} source={item.img} ></Image>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );}
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
            <View style={styles.logobg_My}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                >
                    <Image style={styles.logo_My}
                    source = {require ('../Source/mytab_icon_new.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.body}>
            <View style={styles.memberListbg}>
                <SafeAreaView style>
                    <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                    <View style={styles.pluscontainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
                            <Image style={styles.plusicon} source={require('../Source/plus.png')}/>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView> 
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
        flex : 10,
        justifyContent : "center",
        alignItems: "center",
    },
    memberListbg :{
        width: 300,
        height: 550,
        marginBottom: 90,
        marginHorizontal: 30,
        padding: 10,
        borderWidth : 1,
        borderColor :"black",
        backgroundColor: "#DEEFFF",
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
        fontWeight: "900",
        justifyContent :"center",
        marginTop:15,
        marginHorizontal:10,
    },
    pluscontainer:{
        //backgroundColor:"red",
        height:40,
        justifyContent:"center",
        alignItems:"center",
    },
    plusicon:{
        height:30,
        width:30,
        resizeMode: "contain",
    },
});