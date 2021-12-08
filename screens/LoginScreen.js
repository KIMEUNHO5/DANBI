import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, View, Button, Image, Text, TextInput, TouchableOpacity, ColorPropType, TouchableWithoutFeedback, Keyboard } from "react-native";
import * as Google from "expo-google-app-auth";
import axios from "axios";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
// import { response } from "express";
//import logo from './Source/DANBI_Logo.png'; 
export let sendList = [];
export let account_email = "";
export let account_pw = "";
const LoginScreen = ({ navigation }) => {

  const [list, setList] = useState([]);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `99932479259-algvl2fhdk9qvvq398vi7gj6qrv87vrs.apps.googleusercontent.com`,
        androidClientId: `<YOUR_ANDROID_CLIENT_ID>`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  const confirm = async() => {
    axios.post("http://35.212.138.86/auth/login", {
      email : email,
      pw : pw
    })
    .then(function(response) {
      if (response.data.success == true) {
        setList(response.data.result);
        navigation.navigate('Main');
      }
      else {
        Alert.alert('Login failed');
      }
    }).catch(function(error) {
      console.log("Login error\n" + error);
    }).then(function() {
      console.log("^^");
    });
  };

  useEffect(()=> {
    if (!list.length==0) {
      sendList=list;
      account_email = email;
      account_pw = pw;
      sendList.forEach((value, index, array) => {
        if (value.member_type == 1) {
            value.img = require('../Source/person_activated.png');
        } else if (value.member_type == 2) {
            value.img = require('../Source/pet_activated.png');
        } else if (value.member_type == 3) {
            value.img = require('../Source/plant_activated.png');
        }
      })
    }
  }, [list]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground source = {require('../Source/login_background.png')} style = {styles.backgroundimage}>
      <View style={styles.container}>
      {/* <Image
        style={styles.logo}
        source={require('../Source/DANBI_Logo.png')}
      /> */}
      {/* <Image
        style={styles.name}
        source={require('../Source/DANBI_Name.png')}
      /> */}
      <View style={styles.TextLoginContainer}>
        <Text
          style={styles.TextLogin}>
          Login
        </Text>
      </View>
      <View style={styles.InputAndButton}>
        <View style={styles.Inputcontainer}>
          <View>
            <TextInput
              placeholder={"Email"}
              onChangeText={setEmail}
              value={email}
              style={styles.Input}
              keyboardType="email-address"
            /> 
          </View>
          <TextInput
            secureTextEntry={true}
            placeholder={"Password"}
            onChangeText={setPw}
            value={pw}
            style={styles.Input}
            returnKeyType="done"
          />             
        </View>
        <TouchableOpacity style={styles.LoginButton}
          onPress={confirm}>
            <Text style={{color: "#FFFFFF", fontSize: 16, fontWeight: "600"}}>
              Login
            </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style = {{flexDirection:"row", justifyContent:"space-evenly", margin: 20,}}>
          <TouchableOpacity onPress={signInAsync}>
            <Image
            style={styles.login_btn}
            source={require('../Source/btn_google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            style={styles.login_btn}
            source={require('../Source/btn_naver.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={confirm}>
            <Image
            style={styles.login_btn}
            source={require('../Source/btn_kakao.png')}
            />
          </TouchableOpacity>         
        </View>
        <View style={styles.signcontainer}>
          <View style = {styles.sign}>
            <Button title="ID 찾기" onPress={() => navigation.navigate('ForgotId')}/>
            <Button title="비밀번호 찾기" onPress={() => navigation.navigate('ForgotPw')}/>
            <Button title="회원가입"onPress={() => navigation.navigate('Signup')}/>
          </View>
        </View>
      </View>
    </View>
    </ImageBackground>
    </TouchableWithoutFeedback>
    
    
  );
};


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    //backgroundColor: "white",
    //backgroundColor :"#C1E3ED",
    //backgroundColor: "#F0FBFF"
  },
  backgroundimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 140,
    marginTop: 40,
    resizeMode: "contain",
  },
  name: {
    width: 150,
    height: 50,
    marginBottom: 60,
    resizeMode: "contain",
  },
  TextLoginContainer:{
    alignSelf: "stretch",
    marginTop: 315,
    marginBottom: 20,
    marginHorizontal: 40,
  },
  TextLogin:{
    fontSize: 35,
    fontWeight: "800",
    //color: "white",
  },
  InputAndButton:{
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    //backgroundColor: "orange",
    //marginBottom: 60,

  },
  Inputcontainer:{
    flexDirection: "column",
  },
  Input:{
    //borderBottomColor: "#C1C1C1",
    borderBottomColor: "#9Ac2F6",
    borderBottomWidth: 3,
    fontSize: 18,
    height: 30,
    width: 160,
    marginTop: 13,
  },
  LoginButton:{
    width: 85,
    height: 90,
    alignItems:"center",
    justifyContent:"center",
    //backgroundColor: "#C1C1C1",
    //backgroundColor :"#78AED3",
    backgroundColor: "#9AC2F6",
    padding: 10,
    borderRadius: 10,
  },
  footer:{
    height:170,
    width:"100%",
    position: 'absolute', 
    bottom: 30,
    //borderTopColor: "#C1C1C1",
    //borderTopColor: "#9AC2F6",
    //borderTopWidth: 3,
  },
  login_btn:{
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  signcontainer:{
    width:"100%",
    position: 'absolute', 
    bottom: 0,
  },
  sign:{
     borderTopColor: "#C1C1C1",
    borderTopColor: "#9AC2F6",
    borderTopWidth: 3,
    justifyContent: 'flex-end',
    justifyContent:"space-evenly",
    flexDirection: "row",
  },
  
  
});