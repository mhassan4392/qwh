import { createSlice } from "@reduxjs/toolkit";
import login from "./login";
import authenticate from "./authenticate";
import register from "./register";
import getValidCode from "./getValidCode";

const initialState = {
  user: null,
  loading: true,
  error: null,
  code: null,
  validCode: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
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
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "authenticate",
          message: action.payload,
        };
        state.user = null;
      })
      // get valid code
      .addCase(getValidCode.pending, (state) => {
        state.validCode = false;
        state.loading = "getValidCode";
      })
      .addCase(getValidCode.fulfilled, (state, action) => {
        state.validCode = action.payload;
        state.loading = false;
      })
      .addCase(getValidCode.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "getValidCode",
          message: action.payload,
        };
      });
  },
});

export const { setError, setUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
