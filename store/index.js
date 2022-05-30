import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories";
import productReducer from "../features/products";

const Store = configureStore({
  reducer: { categories: categoriesReducer, products: productReducer },
});
export default Store;
