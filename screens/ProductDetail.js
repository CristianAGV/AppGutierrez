import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";
export default function ProductDetail({ route }) {
  const product = useSelector((store) => store.products.productSelected);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image }}
        resizeMode="cover"
      />

      <View style={styles.detailContainer}>
        <Text style={styles.text}>Product Name:</Text>
        <Text style={styles.text}>{product.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.text}>Price:</Text>
        <Text style={styles.text}>${product.price}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Add to Cart" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#252A34",
  },
  image: {
    width: "100%",
    height: 400,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    marginBottom: 10,
    color: "white",
  },
  btnContainer: {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
