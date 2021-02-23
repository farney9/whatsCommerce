import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import MyStore from "../Views/MyStore/MyStore"
import ProductEdit from "../Views/MyStore/ProductEdit"

const Stack = createStackNavigator()

export default function MyStoreStack() {
    return (
        <Stack.Navigator
            screenOptions = {{
                   headerStyle: {backgroundColor: "#128C7E"},
                   headerTintColor: "#fff",
                }}
        >
            <Stack.Screen
                component = {MyStore} 
                name="my-store" 
                options = {{ 
                    title: "My Store", 
                    }}
            />
            <Stack.Screen
                component = {ProductEdit} 
                name="product-edit" 
                options = {{ 
                    title: "Edit Product", 
                    }}
            />
        </Stack.Navigator>
    )
    
}