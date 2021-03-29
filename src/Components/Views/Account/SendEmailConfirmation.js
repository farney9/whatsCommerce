import React, {useState, useRef} from 'react'
import { StyleSheet, View, Text, TextInput, StatusBar, Image } from 'react-native'
import { Button } from "react-native-elements";
import CountryPicker from "react-native-country-picker-modal";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "lodash";

export default function SendEmailConfirmation() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#128C7E" />
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.imgLogo}
        />
        <View style={styles.panel}>

        </View>
        <Text>Send email confirmation</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#128C7E",
      },
      imgLogo: {
        width: 106,
        height: 106,
        marginVertical: 40,
        alignSelf: "center",
      },
      panel: {

      }
  });
