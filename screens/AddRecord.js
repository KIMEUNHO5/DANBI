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
  
  function AddRecord() {
    const [isWaterIntakeTimePickerVisible, setWaterIntakeTimePickerVisibility] = useState(false);
    const placeholder = "시간을 입력해주세요";
    const [text_WaterIntake, onChangeText_WaterIntake] = useState("");
  
    const showWaterIntakeTimePicker = () => {
      setWaterIntakeTimePickerVisibility(true);
    };
  
    const hideWaterIntakeTimePicker = () => {
      setWaterIntakeTimePickerVisibility(false);
    };
  
    const handleConfirm_WaterIntake = (date) => {
      const WaterIntakeDate = new Date(date);
      console.warn("A time has been picked: ", WaterIntakeDate);
      hideWaterIntakeTimePicker();
      onChangeText_WaterIntake(WaterIntakeDate.format("a/p hh:mm"));
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
              value={text_WaterIntake}
              />
              <DateTimePickerModal
              headerTextIOS={placeholder}
              isVisible={isWaterIntakeTimePickerVisible}
              mode="time"
              onConfirm={handleConfirm_WaterIntake}
              onCancel={hideWaterIntakeTimePicker}
              minuteInterval={10}
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
                keyboardType="number-pad"/>
                    <Text>mL</Text>
            </View>
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
        backgroundColor : "white",
        paddingTop: 200,
        paddingBottom : 200,
        paddingLeft : 30,
        paddingRight : 30
    },
    list: {
        backgroundColor : "white",
        flex : 1,
        paddingTop : 100,
        paddingBottom : 100,
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
    inputTag: {
        flex:1,
        backgroundColor: "white",
        justifyContent : "center",
    },
    contentText: {
        fontSize : 15,
    },
    inputField: {
        flex:1,
        backgroundColor:"white",
        justifyContent: "center",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
});