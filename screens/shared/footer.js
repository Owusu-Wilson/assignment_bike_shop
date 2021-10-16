import React from "react";
import { View, Button, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import ItemPopup from "../bikes_list";



export default function Footer(params) {
    return (
    <View style={styles.setBottom}>
        <FontAwesome name="home" size={20} color="orange" style/>
        <FontAwesome name="microphone" size={20} color="white" style/>
        <FontAwesome name="shopping-bag" size={20} color="grey" style={styles.round_btn}/>
    </View>

          
    )};



const styles = StyleSheet.create({
round_btn: {
    marginTop: 20,
    width: 150,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'black'
},
setBottom: {
    alignItems: 'buttom'
}
});