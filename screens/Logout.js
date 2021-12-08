import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {StackActions} from '@react-navigation/native';
<<<<<<< Updated upstream
import { ImageBackground, StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity, ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';
=======
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback,Keyboard } from 'react-native';
>>>>>>> Stashed changes

const Stack = createStackNavigator();

const LogoutScreen = ({navigation}) => {

  return (
    <ImageBackground source = {require('../Source/login_background.png')} style = {styles.backgroundimage}>
        <View style={styles.container}>
            <Text style={styles.logout_title}>
                Logout
            </Text>
            <TouchableOpacity style={styles.LogoutButton} onPress={() => navigation.dispatch(StackActions.popToTop())}>
                <Text style={styles.text}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};


export default LogoutScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    logout_title:{
        fontSize: 40,
        fontWeight: "700",
        marginTop: 320,
    },
    LogoutButton:{
        width: 230,
        height: 40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#9AC2F6",
        padding: 10,
        borderRadius: 10,
        marginTop: 45,
    },
    text: {
        color: "white",
        fontWeight: "600",
        fontSize: 15,
    }
});