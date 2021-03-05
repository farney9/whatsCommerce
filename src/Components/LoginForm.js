import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { Icon, Input, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";




export default function LoginForm() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Login Form</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F6F8",
        marginTop: 20,

    }
})
