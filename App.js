// Made by UNOKIM. 
import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View, Button } from 'react-native';

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


//React Navigation Setup
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";



function BackBtn() {
  return (
    <Image
      source={require('./Source/back_btn.png')}
      style={{marginLeft: 10, width: 22, height: 22,}}
    />
  );
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

    </View>
  );
}

const App = () => {
  
  return (
    <NavigationContainer>
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
          headerRight: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              title="Info"
              color="#fff"
            />
          ),
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;