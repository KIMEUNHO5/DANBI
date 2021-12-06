import axios from 'axios';
import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import {account_email} from './LoginScreen.js';
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

const Registration_pet = ({navigation}) =>{
  const [isWakeupTimePickerVisible, setWakeupTimePickerVisibility] = useState(false);
  const [isSleepTimePickerVisible, setSleepTimePickerVisibility] = useState(false);
  const placeholder = "시간을 입력해주세요";
  const [text_wakeup, onChangeText_wakeup] = useState("");
  const [text_sleep, onChangeText_sleep] = useState("");

  const showWakeupTimePicker = () => {
    setWakeupTimePickerVisibility(true);
  };

  const showSleepTimePicker = () => {
    setSleepTimePickerVisibility(true);
  }

  const hideWakeupTimePicker = () => {
    setWakeupTimePickerVisibility(false);
  };

  const hideSleepTimePicker = () => {
    setSleepTimePickerVisibility(false);
  };

  const handleConfirm_wakeup = (date) => {
    setWakeup(date);
    hideWakeupTimePicker();
    onChangeText_wakeup(date.format("a/p hh:mm"));
  };

  const handleConfirm_sleep = (date) => {
    setBedtime(date);
    hideSleepTimePicker();
    onChangeText_sleep(date.format("a/p hh:mm"));
  };

  const [text_cycle, setText_cycle] = useState("");

  const [nickname, setNickname] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState(0);
  const [weightInput, setWeightInput] = useState("");
  const [wakeup, setWakeup] = useState(null);
  const [bedtime, setBedtime] = useState(null);
  const [goal, setGoal] = useState(0);
  const [goalInput, setGoalInput] = useState("");
  const [cycle, setCycle] = useState(0);
  const [cycleInput, setCycleInput] = useState("");
  
  const addWeightHandler = () => {
    const newWeightNum = parseInt(weightInput, 10);
    setWeight(newWeightNum);
  };
  const addGoalHandler = () => {
    const newGoalNum = parseInt(goalInput, 10);
    setGoal(newGoalNum);
  };
  const addCycleHandler = () => {
    const newCycleNum = parseInt(text_cycle, 10);
    setCycle(newCycleNum);
  };

  const registerPet = () => {
    //addWeightHandler();
    //addGoalHandler();
    //addCycleHandler();
    console.log(
      nickname + " / " 
      + type + " / "
      + weightInput + " / " 
      + wakeup + " / " 
      + bedtime + " / " 
      + goalInput + " / "
      + cycleInput);
    
    axios.post("http://35.212.138.86/registration", {
      email: account_email,
      nickname: nickname,
      pet_type:type,
      member_type: "2",
      weight: weightInput,
      wakeup_time: wakeup,
      bed_time: bedtime,
      intake_goal: goalInput,
      cycle: text_cycle,
    })
    .then(function (response) {
      console.log(response.data);
      navigation.navigate('Main');
    }).catch(function (error) {
      console.log("error");
    }).then(function() {
      console.log("^^");
    }); 
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.list}>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>닉네임</Text>
            </View>
            <TextInput 
            style={styles.inputField}
            onChangeText={setNickname}
            value={nickname}
            placeholder = "Nickname"
            placeholderTextcolor = "gray"/>
          </View>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>종류</Text>
            </View>
            <TouchableOpacity
            style={styles.inputField}>
                <RNPickerSelect
                placeholder={{
                    label:"Animal Type",
                    color : "gray",
                }}
                value={type}
                onValueChange={(value)=>setType(value)}
                items={[
                    {label : '강아지', value : '강아지'},
                    {label : '고양이', value : '고양이'}
                ]}/>
            </TouchableOpacity>
          </View>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>체중</Text>
            </View>
            <View style={styles.inputField} flexDirection="row" justifyContent="space-between" alignItems="center">
                <TextInput 
                onChangeText={setWeightInput}
                value={weightInput}
                placeholder = "Weight"
                placeholderTextColor = "gray"
                keyboardType="number-pad"/>
                <Text>kg</Text>
            </View>
          </View>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>기상 시간</Text>
            </View>
            <TouchableOpacity onPress={showWakeupTimePicker} style={styles.inputField}>
              <TextInput
              pointerEvent="none"
              placeholder="Wake-up Time"
              placeholderTextColor="gray"
              editable={false}
              value={text_wakeup}
              />
              <DateTimePickerModal
              headerTextIOS={placeholder}
              isVisible={isWakeupTimePickerVisible}
              mode="time"
              onConfirm={handleConfirm_wakeup}
              onCancel={hideWakeupTimePicker}
              minuteInterval={10}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>취침 시간</Text>
            </View>
            <TouchableOpacity onPress={showSleepTimePicker} style={styles.inputField}>
              <TextInput
              pointerEvent="none"
              placeholder="Bed Time"
              placeholderTextColor="gray"
              editable={false}
              value={text_sleep}
              />
              <DateTimePickerModal
              headerTextIOS={placeholder}
              isVisible={isSleepTimePickerVisible}
              mode="time"
              onConfirm={handleConfirm_sleep}
              onCancel={hideSleepTimePicker}
              minuteInterval={10}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>목표 급수량</Text>
            </View>
            <View style={styles.inputField} flexDirection="row" justifyContent="space-between" alignItems="center">
                <TextInput 
                onChangeText={setGoalInput}
                value={goalInput}
                placeholder = "Water Supply Goal"
                placeholderTextColor = "gray"
                keyboardType="number-pad"/>
                <Text>mL</Text>
            </View>
          </View>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>급수 주기</Text>
            </View>
            <TouchableOpacity
            style={styles.inputField}>
                <RNPickerSelect
                placeholder={{
                    label:"Water Supply Cycle",
                    color : "gray",
                }}
                value={text_cycle}
                onValueChange={(value)=>setText_cycle(value)}
                items={[
                    {label : '30분', value : 30},
                    {label : '1시간', value : 60},
                    {label : '1시간 30분', value : 90},
                    {label : '2시간', value : 120},
                    {label : '2시간 30분', value : 150},
                    {label : '3시간', value : 180},
                ]}/>
            </TouchableOpacity>
          </View>
          <View style={styles.eachLine}>
            <Button title="등록" onPress={registerPet}/>
          </View>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

export default Registration_pet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex : 3,
    backgroundColor : "#F5F5F5",
    justifyContent : "center",
    alignItems: "center",
  },
  menu: {
    flex : 2,
    backgroundColor: "skyblue",
    justifyContent:"center",
    flexDirection : "row",
    paddingHorizontal:20
  },
  option: {
    flex: 1,
    backgroundColor:"skyblue",
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems:"center",
    paddingHorizontal : 20,
    borderBottomColor : "black",
    borderBottomWidth : 2
  },
  body : {
    flex : 15,
    backgroundColor : "white",
    paddingTop: 30,
    paddingBottom : 30,
    paddingLeft : 20,
    paddingRight : 20
  },
  text : {
      fontSize : 28,
      color : "black",
  },
  logo : {
    height : 200,
    width: 200, 
    resizeMode : 'contain'
  },
  btnText: {
    fontSize : 24,
    fontWeight : "600",
  },
  list: {
    backgroundColor : "white",
    flex : 1,
    paddingTop : 30,
    paddingBottom : 20,
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
  contentText: {
    fontSize : 20,
  },
  inputTag: {
    flex:1,
    backgroundColor: "white",
    justifyContent : "center"
  },
  inputField: {
    flex:1,
    backgroundColor:"white",
    justifyContent: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1
  }
});
