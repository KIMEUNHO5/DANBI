import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import {puriInfo} from './SpecificationScreen.js';

const PurifierScreen = ({ navigation }) => {
    console.log("puriInfo here");
    console.log(puriInfo);
    const mention_person = puriInfo.nickname + "님이 마실\n" + puriInfo.water_type + "°C의 물이\n" + puriInfo.actual_intake + "ml 출수되고 있습니다.";
    const mention_others = puriInfo.nickname + "님이 마실 정수가\n" + puriInfo.actual_intake + "ml 출수되고 있습니다.";
    var mention;

    if(puriInfo.water_type == "정수") { //동식물
        mention = mention_others;
    } else { // 사람
        mention = mention_person;
    }

    return(
        <ImageBackground source = {require('../Source/purifier_background.png')} style = {styles.backgroundimage}>
        <View style = {styles.container}>
            <Text style = {styles.text}>
                {mention}
            </Text>
            <Image
            style = {styles.image}
            source={require('../Source/purifier.gif')}
            />
        </View>
        </ImageBackground>
    )
};

export default PurifierScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text:{  
        marginTop: 160,
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 30,
    },
    image: {
        width: 205,
        height: 205,
        marginTop: 110,
        resizeMode: "contain",
    },
});