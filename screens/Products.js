import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import ProductItem from "../components/ProductItem";

import { useSelector } from "react-redux";

export default function Products({ route, navigation }) {
  const { productsByCategory } = useSelector((store) => store.products);

  const renderProducts = ({ item }) => {
    return <ProductItem product={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productsByCategory}
        keyExtractor={(product) => product.id}
        renderItem={renderProducts}
        style={styles.list}
        numColumns={2}
        contentContainerStyle={{ margin: "auto" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#252A34",
    alignItems: "center",
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
