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
    <View style={styles.item}>
        <Image source = {img}></Image>
        <Text>{title}</Text>

    </View>
  );


const mainScreen = ({navigation}) => {
    const renderItem = ({ item }) => {return (
        <TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <Image style={styles.itemImg} source={item.img} ></Image>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );}
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image style={styles.logo_DANBI} source={require('../Source/DANBI_LogoName.png')} />
                <Image style={styles.logo_My} source={require('../Source/mytab_icon_new.png')}></Image>
            </View>
            <View style={styles.body}>
                <View style={styles.memberListbg}>
                    <SafeAreaView style={styles.memberList}>
                        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
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
        backgroundColor : '#F5F5F5',
    },
    logo_DANBI: {
        flex : 10,
        backgroundColor: "green",
        resizeMode: "cover", 
        height: 130,
        alignContent : "center",
        justifyContent : "center"
      },
    logo_My: {
        flex : 1,
        backgroundColor :"red",
        height: 130,
        resizeMode: "contain",
        marginRight :10

      },
    body : {
        backgroundColor :"#FFFFFF",
        flex : 5,
        justifyContent : "center",
        alignItems: "center",
    },
    memberListbg :{
        width: 300,
        marginVertical: 30,
        marginHorizontal: 30,
        padding: 10,
        borderWidth : 1,
        borderColor :"black",
        backgroundColor: "#DEEFFF",
        borderRadius: 10,
    },
    item: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 20,
        marginVertical: 8,
      },
    memberList: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        borderBottomColor: "#bbb",
    },
    itemImg :{
        backgroundColor: "red",
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName :{
        backgroundColor :"blue",
        fontSize:30,
        justifyContent :"center",
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 30,
    },
});