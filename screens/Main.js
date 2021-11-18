import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native';

const DATA = [
    {
         id: '1',
         name: '수쟁이',
         img: require('../Source/person_activated.png')
    },
    {
        id: '2',
        name: '으노',
        img: require('../Source/person_activated.png')
    },
    {
        id: '3',
        name: '지유니',
        img: require('../Source/person_activated.png')
    },
    {
        id: '4',
        name: '횬',
        img: require('../Source/person_activated.png')
      },
    {
        id: '5',
        name: '흔',
        img: require('../Source/person_activated.png')
    },
    {
        id: '6',
        name: 'SJ',
        img: require('../Source/person_activated.png')
    },
    {
        id: '7',
        name: '왜살지',
        img: require('../Source/person_activated.png')
    },
  ];
  
  const Item = ({ title, img }) => (
    <DataView>
        <Image source = {img}></Image>
        <Text>{title}</Text>
    </DataView>
  );


const mainScreen = ({navigation}) => {
    const renderItem = ({ item }) => {return (
        <TouchableOpacity>
            <View style={ styles.item}>
                <Image style={styles.itemImg} source={item.img} ></Image>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );}
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image style={styles.logo_My} source={require('../Source/mytab_icon_new.png')}></Image>
            </View>
            <View style={styles.body}>
                <View style={styles.memberListbg}>
                    <SafeAreaView style>
                        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                        <View style={styles.pluscontainer}>
                            <TouchableOpacity>
                                <Image style={styles.plusicon} source={require('../Source/plus.png')}/>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView> 
                </View>
            </View>
        </View>
    );
}
/*  */

export default mainScreen;
const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    header : {
        flex : 1,
        flexDirection:"row",
        backgroundColor : 'white',
    },
    // logo_DANBI: {
    //     flex : 10,
    //     //backgroundColor: "green",
    //     resizeMode: "cover", 
    //     height: 130,
    //     alignContent : "center",
    //     justifyContent : "center"
    //   },
    logo_My: {
        flex : 1,
        //backgroundColor :"red",
        width : 45,
        height: 45,
        resizeMode: "contain",
        marginVertical : 10,
        marginLeft :330

      },
    body : {
        backgroundColor :"#FFFFFF",
        flex : 10,
        justifyContent : "center",
        alignItems: "center",
    },
    memberListbg :{
        width: 300,
        height: 550,
        marginBottom: 90,
        marginHorizontal: 30,
        padding: 10,
        borderWidth : 1,
        borderColor :"black",
        backgroundColor: "#DEEFFF",
        borderRadius: 10,
    },
    item: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10,
        flexDirection:'row'
    },
    itemImg :{
        //backgroundColor: "red",
        width:50,
        height:50,
        marginRight:10,
        resizeMode: "contain",
    },
    itemName :{
        //backgroundColor :"blue",
        fontSize:20,
        fontWeight: "900",
        justifyContent :"center",
        marginTop:15,
        marginHorizontal:10,
    },
    pluscontainer:{
        //backgroundColor:"red",
        height:40,
        justifyContent:"center",
        alignItems:"center",
    },
    plusicon:{
        height:30,
        width:30,
        resizeMode: "contain",
    },
});