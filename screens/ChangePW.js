import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard } from 'react-native';
import axios from "axios";

const Stack = createStackNavigator();

const ForgotPwScreen = ({navigation}) => {

const [currentPW, setCurrentPW] = useState("");
const [newPW, setNewPW] = useState("");
const [checkPW, setCheckPW] = useState("");

const confirm = async() => {
    navigation.navigate('Login');
    if (newPW == checkPW) {
        axios.post("http://35.212.138.86/auth/changepw", {
        // email: 이메일
        pw: currentPW,
        newpw: newPW
        }).then(function(response) {
            navigation.navigate('Login');
        }).catch(function(error) {
        }).then(function() {
        });
    } else {
        Alert.alert("비밀번호가 일치하지 않습니다");
    }
}


  return (
    <ImageBackground source = {require('../Source/login_background_2.png')} style = {styles.backgroundimage}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <Text style={styles.signup_title}>
        비밀번호 변경
        </Text>
            <View>
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
            <TouchableOpacity style={styles.ChangeButton} onPress={confirm}>
                <Text style={{color: "#FFFFFF", fontSize: 16, fontWeight: "600"}}>
                Next
                </Text>
            </TouchableOpacity>
    </View>

    </TouchableWithoutFeedback>
    </ImageBackground>
  );
};


export default ForgotPwScreen;

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
    signup_title:{
        fontSize: 30,
        fontWeight: "700",
        marginTop: 300,
    },
    input:{
        borderBottomColor: "#9AC2F6",
        borderBottomWidth: 3,
        fontSize: 17,
        height: 30,
        width: 230,
        marginTop: 25,
    },
    ChangeButton:{
        width: 230,
        height: 40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#9AC2F6",
        padding: 10,
        borderRadius: 10,
        marginTop: 25,
    },
});