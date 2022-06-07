import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories";
import productReducer from "../features/products";
import cartReducer from "../features/cart";
import authReducer from "../features/auth";
import locationsReducer from "../features/locations";

const Store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    locations: locationsReducer,
  },
});
export default Store;
