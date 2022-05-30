import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { selectCategory } from "../features/categories";
import { setProductsByCategory } from "../features/products";

export default function CategoryItem({ navigation, category }) {
  const dispatch = useDispatch();
  const handleProductView = () => {
    dispatch(selectCategory(category.id));
    dispatch(setProductsByCategory(category.id));
    navigation.navigate("Products", {
      categoryName: category.name,
    });
  };
  return (
    <TouchableOpacity style={styles.item} onPress={handleProductView}>
      <View style={styles.categoryTextContainer}>
        <Text style={styles.text}>{category.name}</Text>
      </View>
      <View style={styles.backdrop}></View>

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
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
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
