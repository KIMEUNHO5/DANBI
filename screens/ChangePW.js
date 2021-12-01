import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity, ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import axios from "axios";

const Stack = createStackNavigator();

const ForgotPwScreen = ({navigation}) => {

const [currentPW, setCurrentPW] = useState("");
const [newPW, setNewPW] = useState("");
const [checkPW, setCheckPW] = useState("");

const confirm = async() => {
    navigation.navigate('Login');
    if (newPW == checkPW) {
        axios.post("http://35.212.138.86/changepw", {
        // email: 이메일
        pw: currentPW,
        newpw: newPW
        }).then(function(response) {
            // 비밀번호 변경
            navigation.navigate('Login');
        }).catch(function(error) {
            console.log('error');
        }).then(function() {
            console.log("^^");
        });
    } else {
        console.log("비밀번호가 일치하지 않습니다");
    }
}


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <Text style={styles.signup_title}>
        비밀번호 변경
        </Text>
            <View style={styles.input_container}>
                <TextInput
                    placeholder={"현재 비밀번호"}
                    onChangeText={setCurrentPW}
                    value={currentPW}
                    style={styles.input}
                />
                <TextInput
                    placeholder={"새로운 비밀번호"}
                    onChangeText={setNewPW}
                    value={newPW}
                    style={styles.input}
                />
                <TextInput
                    placeholder={"새로운 비밀번호 확인"}
                    onChangeText={setCheckPW}
                    value={checkPW}
                    style={styles.input}
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