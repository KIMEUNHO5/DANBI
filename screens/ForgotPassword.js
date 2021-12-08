import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground, StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity, ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';

const Stack = createStackNavigator();



const ForgotPwScreen = ({navigation}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const confirm = () => {
        console.log(name + " / " + email);
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground source = {require('../Source/login_background_2.png')} style = {styles.backgroundimage}>
        <View style={styles.container}>
        <Text style={styles.signup_title}>
        비밀번호 찾기
        </Text>
            <View style={styles.input_container}>
                <TextInput
                    placeholder={"Name"}
                    onChangeText = {setName}
                    value = {name}
                    style={styles.input}
                />
                <TextInput
                placeholder={"Email"}
                onChangeText = {setEmail}
                value = {email}
                style={styles.input}
                keyboardType="email-address"
            />       
            </View>
            <TouchableOpacity style={styles.GetPwButton} onPress={confirm}>
                <Text style={{color: "#FFFFFF", fontSize: 16, fontWeight: "600"}}>
                Next
                </Text>
            </TouchableOpacity>
    </View>
    </ImageBackground>

    </TouchableWithoutFeedback>
  );
};


export default ForgotPwScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        //backgroundColor: "white",
    },
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    signup_title:{
        alignSelf: "stretch",
        fontSize: 33,
        fontWeight: "900",
        marginHorizontal: 60,
        marginTop: 300,
    },
    input_container:{
        marginTop: 6,
        margin: 40
    },
    input:{
        borderBottomColor: "#9Ac2F6",
        borderBottomWidth: 3,
        fontSize: 18,
        height: 30,
        width: 220,
        marginTop: 30,
    },
    GetPwButton:{
        width: 230,
        height: 40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#9Ac2F6",
        //padding: 10,
        borderRadius: 10,
    },
});