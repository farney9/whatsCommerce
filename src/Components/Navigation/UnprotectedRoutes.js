import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Views/Account/Login"
import Register from "../Views/Account/Register"
import PasswordRecovery from "../Views/Account/PasswordRecovery"
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()

export default function UnprotectedRoutes() {


    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="login"
            screenOptions = {{headerShown: false}}
        >
            <Stack.Screen
                component = {Login} 
                name="login" 
                options = {{ 
                    title: "Login", 
                    }}
            />
            <Stack.Screen
                component = {Register} 
                name="register" 
                options = {{ 
                    title: "Register", 
                    }}
            />
            <Stack.Screen
                component = {PasswordRecovery} 
                name="password-recovery" 
                options = {{ 
                    title: "Password Recovery", 
                    }}
            />
        </Stack.Navigator>

        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
