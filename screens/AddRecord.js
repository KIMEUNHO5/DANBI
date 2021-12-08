import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import { 
  ImageBackground,
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  SliderComponent
} from "react-native";
import axios from "axios";
import {currentID} from './Main.js';
import { SectionList } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

Date.prototype.format = function(f) {
    if(!this.valueOf()) return " ";
  
    var d = this;
  
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
      switch ($1) {
          case "yyyy": return d.getFullYear();
          case "yy": return (d.getFullYear() % 1000).zf(2);
          case "MM": return (d.getMonth() + 1).zf(2);
          case "dd": return d.getDate().zf(2);
          case "E": return weekName[d.getDay()];
          case "HH": return d.getHours().zf(2);
          case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
          case "mm": return d.getMinutes().zf(2);
          case "ss": return d.getSeconds().zf(2);
          case "a/p": return d.getHours() < 12 ? "AM" : "PM";
          default: return $1;
      }
    });
  };
  
  String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
  String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
  Number.prototype.zf = function(len){return this.toString().zf(len);};
  
  function AddRecord({navigation}) {
    const placeholder = "input time";
    const [isWaterIntakeTimePickerVisible, setWaterIntakeTimePickerVisibility] = useState(false);
    const [time_text, setTime_text] = useState(""); // 얜 걍 문자임
  
    const showWaterIntakeTimePicker = () => {
      setWaterIntakeTimePickerVisibility(true);
    };
  
    const hideWaterIntakeTimePicker = () => {
      setWaterIntakeTimePickerVisibility(false);
    };
  
    const handleConfirm_WaterIntake = (date) => { // 얜 진짜 데이터임
      setTime(date);
      hideWaterIntakeTimePicker();
      setTime_text(date.format("a/p hh:mm"));
    };

    const [time, setTime] = useState(null);
    const [amount, setAmount] = useState(0); 

    const [amountInput, setAmountInput] = useState(""); 

    const addAmountHandler = () => { 
      const newAmountNum = parseInt(amountInput, 10);
      setAmount(newAmountNum);
    };

    const addRecordHandler = () => { 
      addAmountHandler();
    };

    const confirm = async()=> {
      //addAmountHandler();
      console.log(currentID, time, amountInput);
      axios.post("http://35.212.138.86/record/record", {
        member_id : currentID,
        date : time, 
        actual_intake : amountInput
      }).then(function(response) {
        console.log(response.data);
        navigation.goBack();
      }).catch(function(error) {
        console.log(error);
      }).then(function() {
        console.log("^^");
      });
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground source = {require('../Source/addrecord_background.png')} style = {styles.backgroundimage}>
        <View style={styles.container}>
        <View style={styles.body}>
        <View style={styles.list}>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>추가 수분 섭취 시간</Text>
            </View>
            <TouchableOpacity onPress={showWaterIntakeTimePicker} style={styles.inputField}>
              <TextInput
              pointerEvent="none"
              placeholder="Time"
              placeholderTextColor="gray"
              editable={false}
              value={time_text}
              />
              <DateTimePickerModal
              headerTextIOS={placeholder}
              isVisible={isWaterIntakeTimePickerVisible}
              mode="time"
              onConfirm={handleConfirm_WaterIntake}
              onCancel={hideWaterIntakeTimePicker}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>추가 수분 섭취량</Text>
            </View>
            <View style={styles.inputField} flexDirection="row" justifyContent="space-between" alignItems="center">
                <TextInput 
                placeholder = "Amount"
                placeholderTextColor = "gray"
                keyboardType="number-pad"
                onChangeText={setAmountInput}
                value={amountInput}
                />
                    <Text>mL</Text>
            </View>
          </View>
          <View style={styles.eachLine}>
            <TouchableOpacity style={styles.button} onPress={confirm}>
              <Text style = {{fontSize:18, color: "white"}}>등록</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </ImageBackground>
    </TouchableWithoutFeedback>
    ); 
}

export default AddRecord;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundimage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    body : {
        flex : 50,
        justifyContent : "center",
        paddingTop: 150,
        paddingBottom : 150,
        paddingLeft : 30,
        paddingRight : 30
    },
    list: {
        justifyContent : "center",
        alignItems : "center",
        flex : 3,
        paddingTop : 120,
        paddingBottom : 120,
        paddingHorizontal : 30,
    },
    eachLine: {
        flex:1,
        flexDirection:"row",
        paddingTop : 10,
        paddingBottom : 10,
        alignContent:"center",
        justifyContent:"center",
    },
    button: {
      flex:1,
      paddingTop : 10,
      paddingBottom : 10,
      width:80,
      height:50,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#9AC2F6",
      borderRadius:10
  },
    inputTag: {
        flex:3,
        justifyContent : "center",
    },
    contentText: {
        fontSize : 15,
    },
    inputField: {
        flex:3,
        justifyContent: "center",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
});
