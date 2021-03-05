import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import ComfirmPhoneNumber from "../Views/Account/ComfirmPhoneNumber"
import SendEmailConfirmation from "../Views/Account/SendEmailConfirmation"

const Stack = createStackNavigator()

export default function AccountStack() {
    return (
        <Stack.Navigator
            screenOptions = {{
                headerStyle: {backgroundColor: "#128C7E"},
                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen
                component = {SendEmailConfirmation} 
                name="send-email-confirmation" 
                options = {{ 
                    title: "Comfirm your Phone Number", 
                    }}
            />
            <Stack.Screen
                component = {ComfirmPhoneNumber} 
                name="comfirm-phone-number" 
                options = {{ 
                    title: "Comfirm Phone Number", 
                    }}
            />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
