// Made by UNOKIM. 
import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View, Button, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const Stack = createStackNavigator();

// Screens
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MainListScreen from "./screens/Main";
import RegistrationScreen from "./screens/RegistrationScreen";
import SignupScreen from "./screens/Signup";
import entryScreen from "./screens/entry";
import ForgotIdScreen from "./screens/ForgotId";
import ForgotPwScreen from "./screens/ForgotPassword";
import SpecificationScreen from "./screens/SpecificationScreen";
import StampCalendar from "./screens/StampCalendar";
import AddRecord from "./screens/AddRecord";
import LogoutScreen from "./screens/Logout";
import DeleteAccountScreen from "./screens/DeleteAccount";
import Edit_person from "./screens/Edit_person";
import Edit_pet from "./screens/Edit_pet";
import Edit_plant from "./screens/Edit_plant";
import Notification from "./screens/Notification";

//React Navigation Setup
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";



function BackBtn() {
  return (
    <Image
      source={require('./Source/back_btn.png')}
      style={{marginLeft: 10, width: 22, height: 22,}}
    />
  );
}

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style = {{flexDirection:'row', paddingRight: 15}}>
      <TouchableOpacity
        onPress={() =>{
          navigation.dispatch(DrawerActions.openDrawer())
      }}>
        <Image style={styles.logo_My}
          source = {require ('./Source/mytab_icon_new.png')}>
        </Image>
      </TouchableOpacity>

    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Entry"
        onPress={() => navigation.navigate('Entry')}
      />
      <Button
        title="Go to Spec."
        onPress={() => navigation.navigate('Spec')}
      />
      <Button
        title="Go to Edit person."
        onPress={() => navigation.navigate('Edit_person')}
      />
      <Button
        title="Go to Edit pet."
        onPress={() => navigation.navigate('Edit_pet')}
      />
      <Button
        title="Go to Edit plant."
        onPress={() => navigation.navigate('Edit_plant')}
      />
      <Button
        title="Go to Notification."
        onPress={() => navigation.navigate('Notification')}
      />

    </View>
  );
}

const StackNavigator = () =>{
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerStyle:{
            height:100,
          },
        }}  />
        <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          headerStyle:{
            height:100
          },
          title:'',
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          headerStyle:{
            height:100
          },
        }}   />
        <Stack.Screen 
        name="Main" 
        component={MainListScreen}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
          headerRight: ({}) => <HeaderRight />
        }}  />
        <Stack.Screen 
        name="Reg" 
        component={RegistrationScreen}
        options={{
          headerStyle:{
            height:100
          },
          headerTitle : () => (
            <Image style = {{ width: 125, height : 25 }} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
        }} />
        <Stack.Screen 
        name="Signup" 
        component={SignupScreen}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen 
        name="Entry" 
        component={entryScreen}
        options={{
          headerStyle:{
            height:100
          },
        }}   />
        <Stack.Screen 
        name="ForgotId" 
        component={ForgotIdScreen}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen 
        name="ForgotPw" 
        component={ForgotPwScreen}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen 
        name="Spec" 
        component={SpecificationScreen} 
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        
        <Stack.Screen 
        name="Calend" 
        component={StampCalendar}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen
        name="AddRecord"
        component={AddRecord}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen 
        name="Logout" 
        component={LogoutScreen}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen 
        name="DeleteAccount" 
        component={DeleteAccountScreen}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen 
        name="Edit_person" 
        component={Edit_person}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen 
        name="Edit_pet" 
        component={Edit_pet}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen 
        name="Edit_plant" 
        component={Edit_plant}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
        <Stack.Screen 
        name="Notification" 
        component={Notification}
        options={{
          headerStyle:{
            height:100
          },headerTitle : () => (
            <Image style = {{ width: 125, height : 25}} source = {require('./Source/DANBI_LogoName.png')}/>
          ),
          headerBackTitleVisible: false,
          headerBackImage: BackBtn,
        }}  />
      </Stack.Navigator>

  );
};

const App = () => {
  
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  logo_My: {
    //backgroundColor :"yellow",
    width : 40,
    height: 40,
    resizeMode: "contain",
    //marginLeft :330

  },
});