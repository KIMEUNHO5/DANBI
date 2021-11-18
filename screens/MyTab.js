import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer' ;
import Login from './LoginScreen';
import Signup from './Signup';
import ChangePW from './ChangePW';
const Drawer =createDrawerNavigator();

const CustomDrawerContent =(props) =>{
    const doLogout =() =>{
        console.log("logout");
    }
    return (
        <DrawerContentScrollView{...props}>
            <DrawerItemList{...props}>
            <DrawerItem>
                label="로그아웃"
                onPress={doLogout}
            </DrawerItem></DrawerItemList>
        </DrawerContentScrollView>
    )
}
const MyTabScreen = ({navigation}) => {
  return (
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerType="front"
            drawerPosition="left"
            drawerContentOptions={{
                activeTintColor: 'blue',
                activeBackgroundColor :'yellow'
            }}
            drawerStyle={{
                backgroundColor:'red',
                width:200
            }}
        drawerContent={props => <CustomDrawerContent{...props}></CustomDrawerContent>}>
            <Drawer.Screen name="ChangePW" component={ChangePW} options={{drawerLabel :'비밀번호 변경'}}/>
            <Drawer.Screen name="Login" component={Login} options={{drawerLabel :'로그아웃'}}/>
            <Drawer.Screen name="Signup" component={Signup} options={{drawerLabel :'계정삭제'}}/>
        </Drawer.Navigator>
  );
}

export default MyTabScreen; 

