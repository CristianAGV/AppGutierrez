import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_SIGNIN, AUTH_SIGNUP } from "../../constants/firebase";

const initialState = {
  user: {
    userId: "",
    email: "",
    token: "",
  },
  userLogged: {
    userId: "",
    userLoggedEmail: "",
    token: "",
  },
  loading: false,
  error: "",
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (emailAndPassword, asyncThunk) => {
    try {
      const response = await fetch(`${AUTH_SIGNUP}`, {
        method: "POST",
        body: JSON.stringify({
          email: emailAndPassword.email,
          password: emailAndPassword.password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue("An error has ocurred");
    }
  }
);
export const signIn = createAsyncThunk(
  "auth/signin",
  async (emailAndPassword, asyncThunk) => {
    try {
      const response = await fetch(`${AUTH_SIGNIN}`, {
        method: "POST",
        body: JSON.stringify({
          email: emailAndPassword.email,
          password: emailAndPassword.password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue("An error has ocurred");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.error) {
        const errorMessage = payload.error.message;
        state.error = errorMessage;
        errorMessage === "EMAIL_EXISTS" &&
          alert("This Email is Already Registered");
        return;
      }
      state.user.userId = payload.localId;
      state.user.email = payload.email;
      state.user.token = payload.idToken;
    },
    [signUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      alert(payload);
    },
    [signIn.pending]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.error) {
        const errorMessage = payload.error.message;
        state.error = errorMessage;

        errorMessage === "INVALID_PASSWORD" && alert("Invalid Password");

        return;
      }
      state.userLogged.userId = payload.localId;
      state.userLogged.userLoggedEmail = payload.email;
      state.userLogged.token = payload.idToken;
    },
    [signIn.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      alert(payload);
    },
  },
});

export default authSlice.reducer;
