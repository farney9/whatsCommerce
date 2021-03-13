import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import {Icon} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ShopButton() {

    const navigation = useNavigation()

    return (
        <TouchableHighlight 
            style={styles.container}
            onPress={() => {
                navigation.navigate("my-store")
            }}
        >
            <Icon type="material-community" name="store" color="#fff" size={30} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#25D366",
        justifyContent:"center",
        alignItems: "center",
        width: 72,
        height: 72,
        borderRadius: 36,
        top: -20.5,
        shadowRadius: 5,
        shadowOffset: {height: 10},
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#fff",
        tintColor: "#fff"
    }
})
