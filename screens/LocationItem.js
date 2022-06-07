import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const LocationItem = ({ title, image, address }) => {
  console.log(image);
  return (
    <TouchableOpacity style={styles.locationContainer}>
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.secondaryText}>{address}</Text>
      </View>

      <Image
        source={{ uri: image }}
        resizeMode="contain"
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default LocationItem;

const styles = StyleSheet.create({
  locationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
  },
  text: {
    color: "#fff",
  },
  secondaryText: {
    color: "#999999",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
