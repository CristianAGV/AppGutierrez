import { createSlice } from "@reduxjs/toolkit";
import CategoriesListData from "../../data/CategoriesData";

const initialState = {
  categoryList: CategoriesListData,
  categorySelected: "",
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      const categorySelected = state.categoryList.find(
        (category) => category.id == action.payload
      );
      state.categorySelected = categorySelected.id;
    },
  },
});

export const { selectCategory } = categorySlice.actions;

export default categorySlice.reducer;
