import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native';

const DATA = [
    {
      id: '1',
      title: '수쟁이',
      img: require('../Source/person_activated.png')
    },
    {
      id: '2',
      title: 'Second Item',
      img: require('../Source/person_activated.png')
    },
    {
      id: '3',
      title: 'Third Item',
      img: require('../Source/person_activated.png')
    },
  ];
  
  const Item = ({ title, img }) => (
    <View style={styles.item}>
      <Text>{title}</Text>
      <Image source = {img}></Image>
    </View>
  );


const mainScreen = ({navigation}) => {
    const renderItem = ({ item }) => <Item title={item.title} />;
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
        backgroundColor : "#F5F5F5",

    },
    logo_DANBI: {
        width: 200,
        height: 100,
        justifyContent : "center",
        alignContent : "center"
      },
    logo_My: {
        width: 40,
        height: 100,
        resizeMode: "contain",
        marginRight :10

      },
    body : {
        flex : 5,
        justifyContent : "center",
        alignItems: "center",
    },
    memberListbg :{
        flex: 1,
        width: 300,
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
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
});