import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CategoriesListData from "../data/CategoriesData";
import CategoryItem from "../components/CategoryItem";

export default function Categories({ navigation }) {
  const renderCategories = ({ item }) => {
    return <CategoryItem category={item} navigation={navigation} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CategoriesListData}
        keyExtractor={(category) => category.id}
        renderItem={renderCategories}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#252A34",
  },
  text: {
    marginBottom: 10,
    color: "white",
    textAlign: "center",
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  list: {
    width: "100%",
  },
});
