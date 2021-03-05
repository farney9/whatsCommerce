import React, {useRef} from 'react'
import { View, Text, StyleSheet, Image, StatusBar, Button } from 'react-native'
import  LoginForm from "../../LoginForm";
// import PropTypes from "prop-types";
import Toast, {DURATION} from 'react-native-easy-toast'

export default function Login() {

    const toastRef = useRef()

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="128C7E"/>
            <Image 
            source = {require("../../../../assets/logo.png")}
            style = {styles.imgLogo}
            />
            <Text style = {styles.textoBanner}
            >¡Bienvenido!</Text>
            <LoginForm toastRef = {toastRef} />
            <Toast style={styles.toastStyle} ref = {toastRef} position="center" opacity="0.9"/>


            {/* <Button title={'Press me'} onPress={()=>{
                    this.toast.show('hello world!',2000);
                }}/>
            <Toast
                ref={(toast) => this.toast = toast}
                style={{backgroundColor:'red'}}
                position='top'
                positionValue={200}
                fadeInDuration={750}
                fadeOutDuration={1000}
                opacity={0.8}
                textStyle={{color:'red'}}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#128C7E",
    },
    imgLogo : {
        width: 106,
        height: 106,
        marginTop: 40,
        alignSelf: "center"
    },
    textoBanner : {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 30,
        color: "#fff",
        alignSelf: "center"
    },
    toastStyle: {
        alignSelf: "center",
    }
})

