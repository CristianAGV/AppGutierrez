import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../constants/firebase";
import ProductsListData from "../../data/ProductsData";

const initialState = {
  products: [],
  total: 0,
  response: {},
  loading: false,
  error: false,
};

export const handlePurchase = createAsyncThunk(
  "cart/confirm",
  async (items, asyncThunk) => {
    try {
      const response = await fetch(`${DB_URL}orders.json`, {
        method: "POST",
        body: JSON.stringify({
          date: new Date().toLocaleDateString(),
          items,
        }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue("An error has ocurred");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productoRepetido = state.products.find(
        (product) => product.id === action.payload
      );

      if (!productoRepetido) {
        const product = ProductsListData.find(
          (product) => product.id === action.payload
        );
        state.products.push({ ...product, quantity: 1 });
        return;
      }
      state.products.map((item) => {
        item.id === action.payload && item.quantity++;
        return item;
      });
    },
    removeItem: (state, action) => {
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = filteredProducts;
    },

    getTotal: (state, action) => {
      let totalPrice = 0;
      state.products.forEach((product) => {
        totalPrice = totalPrice + product.price * product.quantity;
      });

      state.total = totalPrice;
    },
    emptyCart: (state, action) => {
      state.products = [];
    },
  },
  extraReducers: {
    [handlePurchase.pending]: (state) => {
      state.loading = true;
    },
    [handlePurchase.fulfilled]: (state, { payload }) => {
      state.response = payload;
      state.loading = false;
    },
    [handlePurchase.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { addItem, removeItem, getTotal, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
