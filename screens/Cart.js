import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const { products } = useSelector((store) => store.cart);
  let content;
  if (products.length === 0) {
    content = <Text style={styles.text}>Your cart is empty</Text>;
  }

  if (products.length > 0) {
    content = (
      <Text style={styles.text}>
        There are {products.length} items in your cart
      </Text>
    );
  }
  return <View style={styles.container}>{content}</View>;
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
