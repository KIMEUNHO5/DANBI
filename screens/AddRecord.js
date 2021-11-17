import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

const AddRecord = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.entryimage}
                source={require('../Source/entry.png')}
            />
        </View>
    );
}

/*
<Image source={require('assets\icon.png')} />
*/
export default AddRecord;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#FFFFFF",
        alignItems: "center",
        justifyContent : "center",
    },
    entryimage:{
        width:"100%",
        resizeMode: "contain",
    },
});