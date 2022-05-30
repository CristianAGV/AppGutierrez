import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CategoryItem from "../components/CategoryItem";
import { useSelector } from "react-redux";

export default function Categories({ navigation }) {
  const { categoryList } = useSelector((store) => store.categories);

  const renderCategories = ({ item }) => {
    return <CategoryItem category={item} navigation={navigation} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={categoryList}
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
