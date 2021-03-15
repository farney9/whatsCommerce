import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Button } from "react-native";
import RegisterForm from "../../RegisterForm";
import Toast, {DURATION} from "react-native-easy-toast";

export default function Register() {
  const toastRef = useRef();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#128C7E" />
      <Image
        source={require("../../../../assets/logo.png")}
        style={styles.imgLogo}
      />
      <Text style={styles.textoBanner}>Register form</Text>
      <RegisterForm toastRef={toastRef} />
      <Toast
        ref={toastRef}
        opacity={0.9}
        position="center"
        fadeInDuration={750}
        fadeOutDuration={9000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  toastStyle: {
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#128C7E",
  },
  imgLogo: {
    width: 106,
    height: 106,
    marginTop: 40,
    alignSelf: "center",
  },
  textoBanner: {
    // fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
  },
});
