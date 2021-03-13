import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon, Input, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Utils, validateEmail } from "../Components/Utils/Utils";
import {isEmpty} from "lodash";

export default function LoginForm(props) {

    const {toastRef} = props;
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    const startSesion = () => {
        if (isEmpty(email || isEmpty(password))) {
            toastRef.current.show("Email or password is empty")
        } 
        else if (!validateEmail(email)) {
            toastRef.current.show("Enter a correct email!")

        }
    }


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
        />
        <Input
          secureTextEntry={true}
          value={password}
          containerStyle={styles.input}
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "key", color: "#128C7E" }}
          rightIcon={{
            type: "font-awesome",
            name: "eye",
            color: "#128C7E",
            onPress: () => alert("Has hecho clic en email"),
          }}
          onChangeText={(text) => {
            setPassword(text)
          }}
        />
        <Button
          containerStyle={styles.btnLogin}
          buttonStyle={{
            backgroundColor: "#25D366",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          onPress={() => startSesion()}
          title="Login"
        />
        <Text style={{ marginVertical: 10 }}>
          ¿No tienes cuenta? |
          <Text style={styles.btnCrearCuenta}> Crear cuenta</Text>
        </Text>
        <Divider
          style={{
            backgroundColor: "#128C7E",
            height: 1,
            width: "90%",
            marginVertical: 10,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 5,
            color: "#128C7E",
          }}
        >
          ó
        </Text>
        <View style={styles.btnGroupLoginWithSocials}>
          <TouchableOpacity style={styles.btnLoginWithSocials}>
            <Icon
              type="material-community"
              size={24}
              name="google"
              color="#fff"
              backgroundColor="transparent"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLoginWithSocials}>
            <Icon
              type="material-community"
              size={24}
              name="facebook"
              color="#fff"
              backgroundColor="transparent"
            />
          </TouchableOpacity>
        </View>
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
        alignItems: 'center',
        paddingTop: 20,
    },
    input: {
        width: "90%",
        marginVertical: 10,
        height: 50
    },
    btnLogin: {
        width: "90%"
    },
    btnCrearCuenta: {
        color: "#128C7E", 
        fontWeight:"bold",
        fontSize: 15
    },
    btnGroupLoginWithSocials: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: "100%"
    },
    btnLoginWithSocials: {
        backgroundColor: "#25D366",
        // height: 40,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center"

    }
})
