import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const Notification = () => {
  const createThreeButtonAlert = () =>
    Alert.alert(
      "OOO님의 수분 섭취 시간입니다",
      "~ml 섭취하세요",
      [
        {
          text: "물받기",
          onPress: () => console.log("물받기 Pressed")
        },
        {
          text: "마시기",
          onPress: () => console.log("마시기 Pressed"),
        },
        { 
          text: "미루기", 
          onPress: () => console.log("미루기 Pressed") }
      ]
    );

  return (
    <View style={styles.container}>
      <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default Notification;