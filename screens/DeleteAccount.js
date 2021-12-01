import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {StackActions} from '@react-navigation/native';
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity, ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { useState } from "react";

const Stack = createStackNavigator();



const DeleteAccountScreen = ({navigation}) => {
    const [PW, setPW] = useState("");

    const confirm = async() => {
        axios.post("http://35.212.138.86/accountdelete", {
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
        <Button title="계정 삭제하기" onPress={() => navigation.dispatch(StackActions.popToTop())}/>
    </View>
</TouchableWithoutFeedback>
  );
};


export default DeleteAccountScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    title:{
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