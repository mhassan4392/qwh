import { createSlice } from "@reduxjs/toolkit";
import login from "./login";
import authenticate from "./authenticate";
import register from "./register";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.loading = "login";
        state.error = null;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "login",
          message: action.payload,
        };
        state.user = null;
      })
      // register
      .addCase(register.pending, (state) => {
        state.loading = "register";
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "register",
          message: action.payload,
        };
      })
      // authenticate
      .addCase(authenticate.pending, (state) => {
        state.loading = "authenticate";
        state.error = null;
        // state.user = null;
      })
      .addCase(authenticate.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "authenticate",
          message: action.payload,
        };
        state.user = null;
      });
  },
});

export const { setError } = authSlice.actions;

export default authSlice.reducer;
