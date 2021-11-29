import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity, ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';

const Stack = createStackNavigator();



const ForgotPwScreen = ({navigation}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const confirm = () => {
        console.log(name + " / " + email);
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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

    </TouchableWithoutFeedback>
  );
};


export default ForgotPwScreen;

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
        marginTop: 107,
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