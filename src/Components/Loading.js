import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { Wander } from "react-native-animated-spinkit";

export default function Loading(props) {
  const { isVisible, text } = props;
  return (
    <Overlay isVisible={isVisible} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <Wander size={60} color="#128C7E" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.4)",
    borderColor: "#128C7E",
    borderStyle: "dashed",
    borderWidth: 3,
    borderRadius: 20,
    width: "90%",
    height: Dimensions.get("window").height / 2,
  },
  text: {
    color: "#FFF",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 22,
    textTransform: "capitalize",
    textAlign: "center"
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
