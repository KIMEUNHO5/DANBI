import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Image, Text, View, Button } from 'react-native';

const Stack = createStackNavigator();



const SignupScreen = ({navigation}) => {
  
  return (
    <View>
        <Text>Hello!</Text>
    </View>
  );
};


export default SignupScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "white"

    },
    header : {
        flexDirection:"row",
        marginTop: 100,
        justifyContent:"center"
    }
});