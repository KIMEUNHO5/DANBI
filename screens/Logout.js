import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {StackActions} from '@react-navigation/native';
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity, ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';

const Stack = createStackNavigator();



const LogoutScreen = ({navigation}) => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <Text style={styles.signup_title}>
        Logout
        </Text>
            <Button title="Logout" onPress={() => navigation.dispatch(StackActions.popToTop())}/>
    </View>

    </TouchableWithoutFeedback>
  );
};


export default LogoutScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    signup_title:{
        fontSize: 40,
        fontWeight: "700",
        marginTop: 90,
    },
    input_container:{
        marginTop: 80,
        margin: 50
    },
    input:{
        borderBottomColor: "#C1C1C1",
        borderBottomWidth: 3,
        fontSize: 18,
        height: 30,
        width: 250,
        marginTop: 30,
    },
    GetPwButton:{
        width: 280,
        height: 40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#C1C1C1",
        padding: 10,
        borderRadius: 10,
    },
});