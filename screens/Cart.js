import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import Button from "../components/Button";
import { getTotal, emptyCart, handlePurchase } from "../features/cart";

const renderItem = ({ item }) => {
  return (
    <CartItem
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      image={item.image}
      id={item.id}
    />
  );
};

export default function Cart() {
  const { products, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  let content;

  useEffect(() => {
    dispatch(getTotal());
  }, [products]);

  if (products.length === 0) {
    content = (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your cart is empty</Text>
      </View>
    );
  }
  let totalBtnTitle = `Buy ${total}$`;

  const handleBuy = () => {
    dispatch(handlePurchase(products));
    dispatch(emptyCart());
  };

  if (products.length > 0) {
    content = (
      <View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(product) => product.id}
        />
        <View style={styles.btnContainer}>
          <Button title={totalBtnTitle} onPress={handleBuy} />
        </View>
      </View>
    );
  }
  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252A34",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },

  btnContainer: {
    marginTop: 30,
    paddingHorizontal: 60,
  },
});
