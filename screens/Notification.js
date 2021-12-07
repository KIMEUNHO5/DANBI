import { addNotificationsDroppedListener } from "expo-notifications";
import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import {sendInfo, currentID} from './Main.js'


const Notification = async() => {
      const react1 = async() => {
        axios.post("http://35.212.138.86/purifier/reaction", {
            member_id : currentID,
            reaction : "1"
          })
          .then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.log("ㅗ");
          }).then(function() {
            console.log("^^");
          });}

      const react2 = async() => {
        axios.post("http://35.212.138.86/purifier/reaction", {
            member_id : currentID,
            reaction : "2"
          })
          .then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.log("ㅗ");
          }).then(function() {
            console.log("^^");
          });}

        const react3 = async() => {
          axios.post("http://35.212.138.86/purifier/reaction", {
              member_id : currentID,
              reaction : "3"
            })
            .then(function (response) {
              console.log(response.data);
            }).catch(function (error) {
              console.log("ㅗ");
            }).then(function() {
              console.log("^^");
            });}
  Alert.alert(
    "OOO님의 수분 섭취 시간입니다",
    "~ml 섭취하세요",
      [
        {
          text: "물받기",
          onPress={react1}
        },
        {
          text: "마시기",
          onPress={react2},
        },
        { 
          text: "미루기", 
          onPress={react3} }
      ]
    );

  return Notification;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default Notification;