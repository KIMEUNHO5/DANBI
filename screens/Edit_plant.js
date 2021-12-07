import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import {sendInfo, currentID} from './Main.js'
import axios from 'axios';
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

function Edit_plant() {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [time_text, setTime_text] = useState("");

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSupplyTime(date);
    hideTimePicker();
    setTime_text(date.format("a/p hh:mm"));
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date_text, setDate_text] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm_date = (date) => {
    setSupplyDate(date);
    hideDatePicker();
    setDate_text(date.format("yyyy/MM/dd"))
  };

  const [text_cycle, setText_cycle] = useState("");

  const [nickname, setNickname] = useState("");
  const [type, setType] = useState("");
  const [supplyDate, setSupplyDate] = useState(null);
  const [supplyTime, setSupplyTime] = useState(null);
  const [amount, setAmount] = useState(0);
  const [amountInput, setAmountInput] = useState("");
  const [cycle, setCycle] = useState(0);
  const [cycleInput, setCycleInput] = useState("");

  const addAmountHandler = () => {
    const newAmountNum = parseInt(amountInput, 10);
    setAmount(newAmountNum);
  };
  const addCycleHandler = () => {
    const newCycleNum = parseInt(text_cycle, 10);
    setCycle(newCycleNum);
  };

  const editPlant = () => {
    addAmountHandler();
    addCycleHandler();
    console.log(
      nickname + " / " 
      + type + " / "
      + supplyDate + " / " 
      + supplyTime + " / " 
      + amountInput + " / "
      + text_cycle);

      axios.post("http://35.212.138.86/member/editmemberinfo", {
        nickname : nickname,
        supply_time : supplyTime,
        intake_goal : amountInput,
        last_supply_date : supplyDate,
        supply_time : supplyTime,
        cycle : cycle
      }).then(function(response) {
        console.log(response.data);
        navigation.goBack();
      }).catch(function (error) {
        console.log(error);
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
                        placeholderTextColor = "gray"/>
                    </View>
                    <View style={styles.eachLine}>
                        <View style={styles.inputTag}>
                        <Text style={styles.contentText}>식물 종류</Text>
                        </View>
                        <TouchableOpacity
                        style={styles.inputField}>
                            <RNPickerSelect
                            placeholder={{
                                label:"Plant Type",
                                color : "gray"
                            }}
                            value={type}
                            onValueChange={(value)=>setType(value)}
                            items={[
                                {label : '몬스테라 델리시오사', value : '몬스테라 델리시오사'},
                                {label : '올리브나무', value : '올리브나무'},
                                {label : '몬스테라 아단소니', value : '몬스테라 아단소니'},
                                {label : '블루스타 고사리', value : '블루스타 고사리'},
                                {label : '생선뼈 선인장', value : '생선뼈 선인장'},
                                {label : '몬스테라 알보 바리에가타', value : '몬스테라 알보 바리에가타'},
                                {label : '칼라디움', value : '칼라디움'},
                                {label : '유칼립투스 폴리안', value : '유칼립투스 폴리안'},
                                {label : '스투키', value : '스투키'},
                                {label : '테이블 야자', value : '테이블 야자'},
                                {label : '기타', value : '기타'},
                            ]}/>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.eachLine}>
                        <View style={styles.inputTag}>
                        <Text style={styles.contentText}>마지막 급수일</Text>
                        </View>

                        <TouchableOpacity onPress={showDatePicker} style={styles.inputField}>
                          <TextInput
                          pointerEvent="none"
                          placeholder="Last Water Supply Date"
                          placeholderTextColor="gray"
                          editable={false}
                          value={date_text}
                          />
                          <DateTimePickerModal
                          headerTextIOS = "Last Water Supply Date"
                          isVisible={isDatePickerVisible}
                          mode="date"
                          onConfirm={handleConfirm_date}
                          onCancel={hideDatePicker}
                          />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.eachLine}>
                        <View style={styles.inputTag}>
                        <Text style={styles.contentText}>급수 시간</Text>
                        </View>
                        <TouchableOpacity onPress={showTimePicker} style={styles.inputField}>
                        <TextInput
                        pointerEvent="none"
                        placeholder="Water Supply Time"
                        placeholderTextColor="gray"
                        editable={false}
                        value={time_text}
                        />
                        <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleConfirm}
                        onCancel={hideTimePicker}
                        minuteInterval={10}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.eachLine}>
                        <View style={styles.inputTag}>
                        <Text style={styles.contentText}>급수량</Text>
                        </View>
                        <View style={styles.inputField} flexDirection="row" justifyContent="space-between" alignItems="center">
                            <TextInput 
                           onChangeText={setAmountInput}
                           value={amountInput}
                           placeholder = "Water Supply Amount"
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
                                {label : '1일', value : 1},
                                {label : '2일', value : 2},
                                {label : '3일', value : 3},
                                {label : '4일', value : 4},
                                {label : '5일', value : 5},
                                {label : '6일', value : 6},
                                {label : '7일', value : 7},
                                {label : '8일', value : 8},
                                {label : '9일', value : 9},
                                {label : '10일', value : 10},
                                {label : '11일', value : 11},
                                {label : '12일', value : 12},
                                {label : '13일', value : 13},
                                {label : '14일', value : 14},
                                {label : '15일', value : 15},
                                {label : '16일', value : 16},
                                {label : '17일', value : 17},
                                {label : '18일', value : 18},
                                {label : '19일', value : 19},
                                {label : '20일', value : 20},
                                {label : '21일', value : 21},
                                {label : '22일', value : 22},
                                {label : '23일', value : 23},
                                {label : '24일', value : 24},
                                {label : '25일', value : 25},
                                {label : '26일', value : 26},
                                {label : '27일', value : 27},
                                {label : '28일', value : 28},
                                {label : '29일', value : 29},
                                {label : '30일', value : 30},
                            ]}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.eachLine}>
                        <Button title="수정" onPress={editPlant}/>
                    </View>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

export default Edit_plant;

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