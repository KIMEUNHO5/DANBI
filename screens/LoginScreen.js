import React from "react";
import { StyleSheet, View, Button, Image, Text, TextInput, TouchableOpacity, ColorPropType } from "react-native";
import * as Google from "expo-google-app-auth";
//import logo from './Source/DANBI_Logo.png'; 

const LoginScreen = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../Source/DANBI_Logo.png')}
      />
      <Image
        style={styles.name}
        source={require('../Source/DANBI_Name.png')}
      />
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
              style={styles.Input}
            /> 
          </View>
          <TextInput
            placeholder={"Password"}
            style={styles.Input}
          />             
        </View>
        <TouchableOpacity
          style={styles.LoginButton}>
            <Text style={{color: "#FFFFFF", fontSize: 16, fontWeight: "600"}}
            >Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style = {{flexDirection:"row", justifyContent:"space-evenly", margin: 20,}}>
          <Image
          style={styles.login_btn}
          source={require('../Source/btn_google.png')}
          />
          <Image
          style={styles.login_btn}
          source={require('../Source/btn_naver.png')}
          />
          <Image
          style={styles.login_btn}
          source={require('../Source/btn_kakao.png')}
          />
        </View>
        <View style={styles.signcontainer}>
          <View style = {styles.sign}>
            <Button title="ID 찾기" />
            <Button title="비밀번호 찾기"/>
            <Button title="회원가입"/>
          </View>
        </View>
      </View>
    </View>
    
  );
};


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
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
    marginHorizontal: 30,
  },
  TextLogin:{
    fontSize: 40,
    fontWeight: "800",
  },
  InputAndButton:{
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    //backgroundColor: "orange",
    marginBottom: 70,
  },
  Inputcontainer:{
    flexDirection: "column",
  },
  Input:{
    borderBottomColor: "#C1C1C1",
    borderBottomWidth: 3,
    fontSize: 18,
    height: 30,
    width: 180,
    marginTop: 13,
  },
  LoginButton:{
    width: 85,
    height: 90,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#C1C1C1",
    padding: 10,
    borderRadius: 10,
  },
  footer:{
    height:170,
    width:"100%",
    position: 'absolute', 
    bottom: 30,
    borderTopColor: "#C1C1C1",
    borderTopWidth: 3,
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
    justifyContent: 'flex-end',
    justifyContent:"space-evenly",
    flexDirection: "row",
  },
  
  
});