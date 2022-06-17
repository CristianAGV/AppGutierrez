import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart";

const CartItem = ({ name, quantity, price, image, id }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <TouchableOpacity style={styles.locationContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.secondaryText}>Quantiity: {quantity}</Text>
        <Text style={styles.secondaryText}>Price: {price}$</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <TouchableOpacity onPress={handleRemove}>
        <EvilIcons name="trash" size={30} color="#F32424" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  locationContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: "#fff",
  },
  secondaryText: {
    color: "#999999",
  },

  imgContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
