import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity, ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';

const Stack = createStackNavigator();



const ForgotIdScreen = ({navigation}) => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <Text style={styles.signup_title}>
        ID 찾기
        </Text>
            <View style={styles.input_container}>
                <TextInput
                    placeholder={"Name"}
                    style={styles.input}
                />
                <TextInput
                    placeholder={"Phone Number"}
                    style={styles.input}
                    keyboardType="number-pad"
                />          
            </View>
            <TouchableOpacity style={styles.GetIdButton}>
                <Text style={{color: "#FFFFFF", fontSize: 16, fontWeight: "600"}}>
                Next
                </Text>
            </TouchableOpacity>
    </View>

    </TouchableWithoutFeedback>
  );
};


export default ForgotIdScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    signup_title:{
        fontSize: 45,
        fontWeight: "700",
        marginTop: 90,
    },
    input_container:{
        marginTop: 100,
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
    GetIdButton:{
        width: 280,
        height: 40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#C1C1C1",
        padding: 10,
        borderRadius: 10,
    },
});