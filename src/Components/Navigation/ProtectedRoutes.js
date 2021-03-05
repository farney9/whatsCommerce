import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core'

// library.add(fab, faShoppingCart, faUserCircle)


import StoreStack from "./StoreStack"
import ProfileStack from "./ProfileStack"
import MyStoreStack from "./MyStoreStack"
import ShopButton from '../ShopButton';

//TODO importar aquí otros componentes más adelante

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const TabBar = () => {
    return (
            <Tab.Navigator
            initialRouteName="store"
            tabBarOptions = {{
                inactiveTintColor: "#fff",
                activeTintColor: "#fff",
                style: {
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60,
                    // alignItems: "space-between",
                    alignContent:"space-between",
                    backgroundColor: "#128C7E",
                    paddingBottom: 5
                }
            }}
            screenOptions = {({route}) => ({
                    tabBarIcon: ({color}) => showIcon(route, color),
                })}
            >
            <Tab.Screen
                component = {StoreStack} 
                name="store" 
                options = {{ 
                    title: "Store", 
                    }}
            />
            <Tab.Screen
                component = {MyStoreStack} 
                name="my-store" 
                options = {{
                    title: "My Store",
                    tabBarIcon: () => <ShopButton/>
                }}
            />
            <Tab.Screen
                component = {ProfileStack} 
                name="profile" 
                options = {{ 
                    title: "Profile" 
                }}
            />
        </Tab.Navigator>

    )
}

function showIcon(route, color){
    let iconName = "";
    switch (route.name) {
        case "store":
            iconName ="cart"
            break;
            
        case "my-store":
            iconName ="cart"
            break;
            
        case "profile":
            iconName ="account-circle"
            // iconName ="user-circle"
            break;
        }
        
        // console.log(route.name)
        return (
            <Icon type="material-community" name={iconName} size={24} color={color} />
        );
}
const styles = StyleSheet.create({})

export default function ProtectedRoutes(){
    return (
        <NavigationContainer>
            <TabBar/>
        </NavigationContainer>
    )
}
