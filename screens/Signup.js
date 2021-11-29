import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity, ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';

const Stack = createStackNavigator();



const SignupScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [pn, setPn] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const confirm = () => {
        console.log(name + " / " + pn + " / " + email + " / " + pw);
    };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <Text style={styles.signup_title}>
        Sign up
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
            <TextInput
                placeholder={"Email"}
                onChangeText={setEmail}
                value={email}
                style={styles.input}
                keyboardType="email-address"
            />   
            <TextInput
                placeholder={"Password"}
                onChangeText={setPw}
                value={pw}
                style={styles.input}
                returnKeyType="done"
            />              
            </View>
            <TouchableOpacity style={styles.SignupButton}
                onPress={() => navigation.navigate('Login')}> 
                <Text style={{color: "#FFFFFF", fontSize: 16, fontWeight: "600"}}>
                Sign up
                </Text>
            </TouchableOpacity>
            <View style={styles.footer}>
            <View style = {{flexDirection:"row", justifyContent:"space-evenly", margin: 20,}}>
            <TouchableOpacity>
                <Image
                style={styles.signup_btn}
                source={require('../Source/btn_google.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                style={styles.signup_btn}
                source={require('../Source/btn_naver.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={confirm}>
                <Image
                style={styles.signup_btn}
                source={require('../Source/btn_kakao.png')}
                />
            </TouchableOpacity>         
            </View>
        </View>
    </View>

    </TouchableWithoutFeedback>
  );
};


export default SignupScreen;

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
        margin: 45,
    },
    input:{
        borderBottomColor: "#C1C1C1",
        borderBottomWidth: 3,
        fontSize: 18,
        height: 30,
        width: 250,
        marginTop: 30,
    },
    SignupButton:{
        width: 280,
        height: 40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#C1C1C1",
        padding: 10,
        borderRadius: 10,
    },
    footer:{
        height:120,
        width:"100%",
        position: 'absolute', 
        bottom: 30,
        borderTopColor: "#C1C1C1",
        borderTopWidth: 3,
    },
    signup_btn:{
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
});