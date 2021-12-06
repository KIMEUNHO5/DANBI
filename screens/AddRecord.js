import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
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
  Keyboard,
  SliderComponent
} from "react-native";
import axios from "axios";
import {currentID} from './Main.js';
import { SectionList } from "native-base";

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
  
  function AddRecord() {
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
      addAmountHandler();
      console.log(currentID, time, amount);
      axios.post("http://35.212.138.86/record", {
        member_id : currentID,
        date : time, 
        actual_intake : amount
      }).then(function(response) {
        console.log(response.data);
      }).catch(function(error) {
        console.log(error);
      }).then(function() {
        console.log("^^");
      });
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
              <Text style = {{fontSize:20}}>등록</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </TouchableWithoutFeedback>
    ); 
}

export default AddRecord;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body : {
        flex : 50,
        justifyContent : "center",
        backgroundColor : "white",
        paddingTop: 150,
        paddingBottom : 150,
        paddingLeft : 30,
        paddingRight : 30
    },
    list: {
        backgroundColor : "white",
        justifyContent : "center",
        alignItems : "center",
        flex : 3,
        paddingTop : 120,
        paddingBottom : 120,
        paddingHorizontal : 20
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
      paddingHorizontal:100,
      width:80,
      height:50,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"lightskyblue",
      borderRadius:10
  },
    inputTag: {
        flex:3,
        backgroundColor: "white",
        justifyContent : "center",
    },
    contentText: {
        fontSize : 15,
    },
    inputField: {
        flex:4,
        backgroundColor:"white",
        justifyContent: "center",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
});
