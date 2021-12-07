import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const PurifierScreen = ({ navigation }) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                뒤를 부탁한다,,
            </Text>
            <Image
            style = {styles.image}
            source={require('../Source/purifier.gif')}
            />
        </View>
    )
};

export default PurifierScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 40,
        resizeMode: "contain",
    },
    text:{
        
    fontSize: 40,
    fontWeight: "800",
    }

});