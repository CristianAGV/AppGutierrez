import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteLocation, fetchLocations, insertAddress } from "../../db";
const initialState = {
  locations: [],
  loading: false,
  error: null,
  responseDb: "",
};

export const addLocationDb = createAsyncThunk(
  "location/addToDb",
  async (location, asyncThunk) => {
    try {
      const result = await insertAddress(
        location.title,
        location.image,
        location.id,
        location.address
      );

      console.log(result);
      console.log("Record Successfully Added.");
      return;
    } catch (error) {
      console.log(error.message);
      return asyncThunk.rejectWithValue("Error at adding location to db");
    }
  }
);

export const getLocationsDb = createAsyncThunk(
  "location/getLocations",
  async (_, asyncThunk) => {
    try {
      const result = await fetchLocations();
      const data = result.rows._array;
      return data;
    } catch (error) {
      console.log(error.message);
      return asyncThunk.rejectWithValue(
        "Error at getting the data from the database."
      );
    }
  }
);

export const deleteLocationDb = createAsyncThunk(
  "location/removeLocation",
  async (location, asyncThunk) => {
    try {
      const result = await deleteLocation(location.id);

      console.log(result);
      console.log("Record Successfully Removed.");
      return;
    } catch (error) {
      console.log(error.message);
      return asyncThunk.rejectWithValue("Error at deleting location from db");
    }
  }
);
export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation: (state, { payload }) => {
      state.locations.push(payload);
    },

    deleteLocationFromState: (state, { payload }) => {
      state.locations = state.locations.filter(
        (location) => location.id != payload
      );
    },
  },
  extraReducers: {
    [addLocationDb.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [addLocationDb.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
    },
    [addLocationDb.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [getLocationsDb.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getLocationsDb.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.locations = payload;
    },
    [getLocationsDb.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [deleteLocationDb.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [deleteLocationDb.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.responseDb = payload;
    },
    [deleteLocationDb.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { addLocation, deleteLocationFromState } = locationsSlice.actions;

export default locationsSlice.reducer;
