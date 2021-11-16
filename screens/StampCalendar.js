import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState, Component } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  Button,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";


const StampCalendar = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Calendar</Text>
            </View>
        </View>
    );
}

export default StampCalendar;

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    header : {
        flex: 1,
        flexDirection: "row",
        backgroundColor : "white",
        alignItems: "center",
        justifyContent : "center",
    },
});