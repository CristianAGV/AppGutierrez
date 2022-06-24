import { StyleSheet, View, Image, Text, Alert } from "react-native";
import React from "react";
import Button from "../components/Button";
import { addItem } from "../features/cart";
import { useSelector, useDispatch } from "react-redux";
export default function ProductDetail({ route }) {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.products.productSelected);
  const handleAddToCart = () => {
    dispatch(addItem(product.id));
    Alert.alert("Done", "Product Added to Cart!");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image }}
        resizeMode="cover"
      />

      <View style={styles.detailCard}>
        <View style={styles.detailContainer}>
          <Text style={{ ...styles.text, ...styles.productTitle }}>
            {product.name}
          </Text>
        </View>
        <View
          style={[
            styles.detailContainer,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomColor: "#d3d3d3",
              borderBottomWidth: 1,
            },
          ]}
        >
          <Text style={styles.text}>${product.price.toFixed(2)}</Text>
          <Text style={styles.text}>x 1</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button title="Add to Cart" onPress={handleAddToCart} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#252A34",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: 400,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  detailCard: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    bottom: 15,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#f6f6f6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.65,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailContainer: {
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
    color: "#000",
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  btnContainer: {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
