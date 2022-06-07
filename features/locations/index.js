import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation: (state, { payload }) => {
      state.locations.push(payload);
    },
  },
  extraReducers: {},
});

export const { addLocation } = locationsSlice.actions;

export default locationsSlice.reducer;
