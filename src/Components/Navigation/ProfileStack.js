import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Views/Profile/Profile"

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
                component = {Profile} 
                name="profile" 
                options = {{ 
                    title: "Profile", 
                    }}
            />
        </Stack.Navigator>
    )
    
}