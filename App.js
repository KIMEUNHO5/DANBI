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


//React Navigation Setup
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;