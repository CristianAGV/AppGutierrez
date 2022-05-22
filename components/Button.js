import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button(props) {
  const onPressHandler = () => {
    if (props.onPress) {
      props.onPress();
    }
  };
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.button}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5568FE",
    width: "100%",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
