import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function CategoryItem({ category }) {
  const imagePath = category.image;

  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.text}>{category.name}</Text>

      {category.id === 1 && (
        <Image
          style={styles.image}
          source={require(`../assets/category-images/cycling.jpg`)}
          resizeMode="cover"
        />
      )}
      {category.id === 2 && (
        <Image
          style={styles.image}
          source={require(`../assets/category-images/basketball.jpg`)}
          resizeMode="cover"
        />
      )}
      {category.id === 3 && (
        <Image
          style={styles.image}
          source={require(`../assets/category-images/boxing.jpg`)}
          resizeMode="cover"
        />
      )}
      {category.id === 4 && (
        <Image
          style={styles.image}
          source={require(`../assets/category-images/running_shoes.jpg`)}
          resizeMode="cover"
        />
      )}
      {category.id === 5 && (
        <Image
          style={styles.image}
          source={require(`../assets/category-images/soccer.jpg`)}
          resizeMode="cover"
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: "#5568FE",
  },

  image: {
    width: "100%",
    height: 120,
  },
});
