import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Store from "../Views/Store/Store"
import ProductAdd from "../Views/Store/ProductAdd"
import ProductDetails from "../Views/Store/ProductDetails"
import MessageList from "../Views/Store/MessageList"
import Contact from "../Views/Store/Contact"

const Stack = createStackNavigator()

export default function StoreStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen component = {Store} name="store" options = {{headerShown: false}}/>
            <Stack.Screen 
                component = {ProductAdd} 
                name="product-add" 
                options = {{ 
                    title: "Add new product", 
                    headerStyle: {backgroundColor: "#128C7E"},
                    headerTintColor: "#fff",
                    }}
            />
            <Stack.Screen 
                component = {ProductDetails} 
                name="product-details" 
                options = {{ 
                    title: "",
                    headertransparent: true, 
                    headerTintColor: "#128C7E",
                    }}
            />
            <Stack.Screen 
                component = {MessageList} 
                name="Messages" 
                options = {{ 
                    title: "Messages", 
                    headerStyle: {backgroundColor: "#128C7E"},
                    headerTintColor: "#fff",
                    }}
            />
            <Stack.Screen 
                component = {Contact} 
                name="Contact" 
                options = {{ 
                    title: "Contact", 
                    headerStyle: {backgroundColor: "#128C7E"},
                    headerTintColor: "#fff",
                    }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
