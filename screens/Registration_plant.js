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

function Registration_plant() {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const placeholder = "시간을 입력해주세요";
  const [text, onChangeText] = useState("");

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A time has been picked: ", date);
    hideTimePicker();
    onChangeText(date.format("a/p hh:mm"));
  };
  
  const [text_type, setText_type] = useState("");
  const onChangeText_type = (value) => {
      console.warn(value)
      setText_type(value);
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
                            value={text_type}
                            onValueChange={(value)=>onChangeText_type(value)}
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
                            ]}/>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.eachLine}>
                        <View style={styles.inputTag}>
                        <Text style={styles.contentText}>마지막 급수일</Text>
                        </View>
                        <TextInput 
                        style={styles.inputField}
                        placeholder = "Last Water Supply Date"
                        placeholderTextColor = "gray"/>
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
                        value={text}
                        />
                        <DateTimePickerModal
                        headerTextIOS={placeholder}
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
                        <TextInput 
                        style={styles.inputField}
                        placeholder = "Amount of Water Supply"
                        placeholderTextColor = "gray"/>
                    </View>
                    <View style={styles.eachLine}>
                        <View style={styles.inputTag}>
                        <Text style={styles.contentText}>급수 주기</Text>
                        </View>
                        <TextInput 
                        style={styles.inputField}
                        placeholder = "Water Supply Cycle"
                        placeholderTextColor = "gray"/>
                    </View>
                    <View style={styles.eachLine}>
                        <Button title="등록" />
                    </View>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

export default Registration_plant;

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