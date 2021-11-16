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
import mainScreen from "./screens/Main";
import RegistrationScreen from "./screens/RegistrationScreen";
import SignupScreen from "./screens/Signup";
import entryScreen from "./screens/entry";
import ForgotIdScreen from "./screens/ForgotId";
import ForgotPwScreen from "./screens/ForgotPassword";
import SpecificationScreen from "./screens/SpecificationScreen";


//React Navigation Setup
import { NavigationContainer } from "@react-navigation/native";



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Main')}
      />
      <Button
        title="Go to Reg."
        onPress={() => navigation.navigate('Reg')}
      />
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      />
      <Button
        title="Go to Entry"
        onPress={() => navigation.navigate('Entry')}
      />
      <Button
        title="Go to find ID"
        onPress={() => navigation.navigate('ForgotId')}
      />
      <Button
        title="Go to find Password"
        onPress={() => navigation.navigate('ForgotPw')}
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Main" component={mainScreen}/>
        <Stack.Screen name="Reg" component={RegistrationScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Entry" component={entryScreen} />
        <Stack.Screen name="ForgotId" component={ForgotIdScreen} />
        <Stack.Screen name="ForgotPw" component={ForgotPwScreen} />
        <Stack.Screen name="Spec" component={SpecificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;