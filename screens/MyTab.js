import React from "react";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer' ;
import Login from './LoginScreen';
import Signup from './Signup';
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
        drwaerStyle={{
            backgroundColor:'#c6cbef',
            width:200
        }}
      drawerContent={props => <CustomDrawerContent{...props}></CustomDrawerContent>}>
        <Drawer.Screen name="Login" component={Login} options={{drawerLabel :'로그아웃'}}/>
        <Drawer.Screen name="Signup" component={Signup} options={{drawerLabel :'계정삭제'}}/>
      </Drawer.Navigator>
  );
}

export default MyTabScreen; 
