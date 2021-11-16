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
          <TextInput
            placeholder={"Email"}
            style={styles.Input}
          /> 
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
      
      <Button title="Login with Google" onPress={signInAsync} />
      

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
    backgroundColor: "orange",
    marginBottom: 70,
  },
  Inputcontainer:{
    flexDirection: "column",
  },
  Input:{
    fontSize: 18,
  },
  LoginButton:{
    width: 85,
    height: 90,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#7E7E7E",
    padding: 10,
    borderRadius: 10,
  },
});