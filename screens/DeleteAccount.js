import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {StackActions} from '@react-navigation/native';
import { ImageBackground, StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity, ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { useState } from "react";
import axios from 'axios';

const Stack = createStackNavigator();



const DeleteAccountScreen = ({navigation}) => {
    const [PW, setPW] = useState("");

    const confirm = async() => {   
        axios.post("http://35.212.138.86/auth/accountdelete", {
            // email : 이메일
            pw : PW
        }).then(function(response) {
            // 계정 삭제
        }).catch(function(error) {
            console.log("error");
        }).then(function() {
            console.log("^^");
        });
    }

  return (
    <ImageBackground source = {require('../Source/login_background.png')} style = {styles.backgroundimage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
            <Text style={styles.title}>
            계정 삭제
            </Text>
                <View style={styles.input_container}>
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={setPW}
                        value={PW}
                        placeholder={"비밀번호를 입력해주세요"}
                        style={styles.input}
                        returnKeyType="done"
                    />  
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(StackActions.popToTop())}>
                     <Text style={styles.text}>
                         계정 삭제하기
                     </Text>
                </TouchableOpacity>  
            </View>
        </TouchableWithoutFeedback>
    </ImageBackground>
  );
};


export default DeleteAccountScreen;

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
    title:{
        fontSize: 35,
        fontWeight: "700",
        marginTop: 300,
    },
    input_container:{
        marginTop: 30,
        margin: 30
    },
    input:{
        borderBottomColor: "#9AC2F6",
        borderBottomWidth: 3,
        fontSize: 17,
        height: 30,
        width: 230,
        marginTop: 20,
    },
    button:{
        width: 230,
        height: 40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#9AC2F6",
        padding: 10,
        borderRadius: 10,
    },
    text: {
        color: "white",
        fontWeight: "600",
        fontSize: 15,
    }
});