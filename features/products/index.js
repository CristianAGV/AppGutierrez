import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "../../data/ProductsData";

const initialState = {
  productList: ProductsData,
  productsByCategory: [],
  productSelected: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsByCategory: (state, actions) => {
      state.productsByCategory = state.productList.filter(
        (product) => product.category_id == actions.payload
      );
    },
    setProductSelected: (state, actions) => {
      const productFound = state.productsByCategory.find(
        (product) => product.id == actions.payload
      );
      state.productSelected = productFound;
    },
  },
});

export const { setProductsByCategory, setProductSelected } =
  productSlice.actions;

export default productSlice.reducer;
