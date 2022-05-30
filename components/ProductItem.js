import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { setProductSelected } from "../features/products";
import { useDispatch } from "react-redux";

export default function ProductItem({ product, navigation }) {
  const dispatch = useDispatch();
  const handleProductDetail = () => {
    dispatch(setProductSelected(product.id));
    navigation.navigate("detail", {
      productName: product.name,
    });
  };
  return (
    <TouchableOpacity style={styles.item} onPress={handleProductDetail}>
      <View style={styles.categoryTextContainer}>
        <Text style={styles.text}>{product.name}</Text>
      </View>
      <View style={styles.backdrop}></View>

      <Image
        style={styles.image}
        source={{ uri: product.image }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  categoryTextContainer: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    zIndex: 3,
  },
  text: {
    fontSize: 20,

    color: "#fff",
  },

  backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.4,
    zIndex: 2,
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
