import axios from 'axios';
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, Component } from "react";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import * as Notifications from 'expo-notifications';
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
import DateTimePicker from "react-native-modal-datetime-picker";
import { StackActions, CommonActions } from '@react-navigation/native';
// import { useEffect } from 'react/cjs/react.development';

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

const Registration_person = ({navigation}) => {

  useEffect(()=> {
    defaultWeight();
  }, [weightInput]); 
   
  const placeholder = "input time";
  const [isWakeupTimePickerVisible, setWakeupTimePickerVisibility] = useState(false);
  const [isSleepTimePickerVisible, setSleepTimePickerVisibility] = useState(false);
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
  const [weight, setWeight] = useState(0);
  const [weightInput, setWeightInput] = useState("");
  const [wakeup, setWakeup] = useState(null);
  const [bedtime, setBedtime] = useState(null);
  const [temperature, setTemperature] = useState(0);
  const [tempInput, setTempInput] = useState("");
  const [goal, setGoal] = useState(0);
  const [goalInput, setGoalInput] = useState("");
  const [cycle, setCycle] = useState(0);

  const defaultWeight = () => {
    setWeight(parseInt(weightInput, 10));
    setGoalInput(String(weight*30));
    console.log("weightInput", weightInput, "weight", weight, "goal", goal);
  }
/*
  const addWeightHandler = () => {
    const newWeightNum = parseInt(weightInput, 10);
    setWeight(newWeightNum);
  };
  const addTempHandler = () => {
    const newTempNum = parseInt(tempInput, 10);
    setTemperature(newTempNum);
  };
  const addGoalHandler = () => {
    const newGoalNum = parseInt(goalInput, 10);
    setGoal(newGoalNum);
  };
  const addCycleHandler = () => {
    const newCycleNum = parseInt(text_cycle, 10);
    setCycle(newCycleNum);
  }; */
  
  const registerPerson = async() => {
    
    axios.post("http://35.212.138.86/registration", {
      email: "test",
      nickname: nickname,
      member_type: "1",
      weight: weightInput,
      wakeup_time: wakeup,
      bed_time: bedtime,
      temperature: tempInput,
      intake_goal: goalInput,
      cycle: text_cycle,
    })
    .then(function (response) {
      console.log(response.data);
      navigation.navigate('Main');
    }).catch(function (error) {
      console.log("ㅗ");
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
            onChangeText={setNickname}
            value={nickname}
            style={styles.inputField}
            placeholder = "Nickname"
            placeholderTextColor="gray"/>
          </View>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>체중</Text>
            </View>
            <View style={styles.inputField} flexDirection="row" justifyContent="space-between" alignItems="center">
                <TextInput 
                onChangeText={setWeightInput}
                value={weightInput}
                onEndEditing={()=>{
                  defaultWeight();
                }}
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
              <Text style={styles.contentText}>선호 물 온도</Text>
            </View>
            <View style={styles.inputField} flexDirection="row" justifyContent="space-between" alignItems="center">
                <TextInput 
                onChangeText={setTempInput}
                value={tempInput}
                placeholder = "Water Temperature"
                placeholderTextColor = "gray"
                keyboardType="number-pad"/>
                <Text>°C</Text>
            </View>
          </View>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>목표 수분 섭취량</Text>
            </View>
            <View style={styles.inputField} flexDirection="row" justifyContent="space-between" alignItems="center">
                <TextInput 
                onChangeText={setGoalInput}
                value={goalInput}
                placeholder = {goalInput}
                placeholderTextColor = "gray"
                keyboardType="number-pad"/>
                <Text>mL</Text>
            </View>
          </View>
          <View style={styles.eachLine}>
            <View style={styles.inputTag}>
              <Text style={styles.contentText}>수분 섭취 주기</Text>
            </View>

            <TouchableOpacity
            style={styles.inputField}>
                <RNPickerSelect
                placeholder={{
                    label:"Water Intake Cycle",
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
            <Button title="등록" onPress={registerPerson}/>
            <Button
              title="알림"
              onPress={() => {
                Notifications.scheduleNotificationAsync({
                  content: {
                    title: "물 마실 시간입니다.",
                    body: '마시세요',
                  },
                  trigger: {
                    seconds: 1, //onPress가 클릭이 되면 1초 뒤에 알람이 발생합니다.
                  },
                });
              }}></Button>

          </View>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

export default Registration_person;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


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