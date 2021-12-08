import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard } from 'react-native';

const Stack = createStackNavigator();



const ForgotIdScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [pn, setPn] = useState("");

    const confirm = () => {
        console.log(name + " / " + pn);
    }

  return (
      
    <ImageBackground source = {require('../Source/login_background_2.png')} style = {styles.backgroundimage}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <Text style={styles.signup_title}>
            ID 찾기
            </Text>
            <View style={styles.input_container}>
                <TextInput
                    placeholder={"Name"}
                    onChangeText={setName}
                    value={name}
                    style={styles.input}
                />
                <TextInput
                    placeholder={"Phone Number"}
                    onChangeText={setPn}
                    value={pn}
                    style={styles.input}
                    keyboardType="number-pad"
                />          
            </View>
            <TouchableOpacity style={styles.GetIdButton} onPress={confirm}>
                <Text style={{color: "#FFFFFF", fontSize: 16, fontWeight: "600"}}>
                Next
                </Text>
            </TouchableOpacity>
            </View>
        

    </TouchableWithoutFeedback>
    </ImageBackground>
  );
};


export default ForgotIdScreen;

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
        alignSelf: "stretch",
        fontSize: 35,
        fontWeight: "800",
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
    GetIdButton:{
        width: 230,
        height: 40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#9Ac2F6",
        borderRadius: 10,
    },
});