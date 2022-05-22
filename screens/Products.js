import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ProductsListData from "../data/ProductsData";
import ProductItem from "../components/ProductItem";

export default function Categories({ route }) {
  const categoryId = route.params.categoryId;

  const renderProducts = ({ item }) => {
    return <ProductItem product={item} />;
  };
  const [products, setProducts] = useState(ProductsListData);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category_id === categoryId
    );
    setProducts(filteredProducts);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
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
