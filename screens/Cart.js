import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your cart is empty</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252A34",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
});
