import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Input, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Utils, validateEmail } from "../Components/Utils/Utils";
import { isEmpty, size } from "lodash";
import { validateSesion } from "./Utils/Actions";
import Loading from "../Components/Loading";
import * as firebase from "firebase";

export default function RegisterForm(props) {
  const { toastRef } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  validateSesion();

  const createAccount = () => {
    if (isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
      toastRef.current.show("Email or passwords are empty");
    } else if (!validateEmail(email)) {
      toastRef.current.show("Enter a correct email!");
    } else if (password !== confirmPassword) {
      toastRef.current.show("Password and Confirm Password not match!");
    } else if (size(password) < 6) {
      toastRef.current.show("The passwords must be at least 6 characters!");
    } else {
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            setIsLoading(false);
            toastRef.current.show("User has been created successfully!");
            // console.log(response);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err.message);
          toastRef.current.show(err.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#25D366",
          borderBottomWidth: 2,
          width: 100,
        }}
      />
      <Input
        value={email}
        containerStyle={styles.input}
        placeholder="email@address.com"
        rightIcon={{
          type: "font-awesome",
          name: "eye",
          color: "#128C7E",
        }}
        leftIcon={{
          type: "material-community",
          name: "at",
          color: "#128C7E",
        }}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <Input
        secureTextEntry={!showPassword}
        value={password}
        containerStyle={styles.input}
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "key", color: "#128C7E" }}
        rightIcon={{
          type: "font-awesome",
          name: showPassword ? "eye" : "eye-slash",
          color: "#128C7E",
          onPress: () => setShowPassword(!showPassword),
        }}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Input
        secureTextEntry={!showConfirmPassword}
        value={confirmPassword}
        containerStyle={styles.input}
        placeholder="Confirm Password"
        leftIcon={{ type: "font-awesome", name: "key", color: "#128C7E" }}
        rightIcon={{
          type: "font-awesome",
          name: showConfirmPassword ? "eye" : "eye-slash",
          color: "#128C7E",
          onPress: () => setShowConfirmPassword(!showConfirmPassword),
        }}
        onChangeText={(txt) => {
          setConfirmPassword(txt);
        }}
      />
      <View
        style={{
          borderBottomColor: "#25D366",
          borderBottomWidth: 2,
          width: 100,
          marginVertical: 15,
        }}
      />
      <Button
        containerStyle={styles.btnRegister}
        buttonStyle={{
          backgroundColor: "#25D366",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        onPress={() => createAccount()}
        title="Register"
      />
      <Button
        containerStyle={styles.btnGoToLogin}
        buttonStyle={{
          backgroundColor: "#128C7E",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        onPress={() => navigation.goBack()}
        title="Login"
      />
      <Loading
        isVisible={isLoading}
        text="We're working very Hard .... plase wait!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    paddingTop: 20,
  },
  input: {
    width: "90%",
    marginVertical: 10,
    height: 50,
  },
  btnRegister: {
    width: "90%",
  },
  btnGoToLogin: {
    width: "90%",
    marginVertical: 5,
  },
});
