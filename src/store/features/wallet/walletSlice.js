import { createSlice } from "@reduxjs/toolkit";

import getBalance from "./getBalance";
import addTrans from "./addTrans";

const initialState = {
  wallet: null,
  loading: false,
  error: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get balance
      .addCase(getBalance.pending, (state) => {
        state.loading = "getBalance";
        state.error = null;
      })
      .addCase(getBalance.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.wallet = action.payload;
      })
      .addCase(getBalance.rejected, (state, action) => {
        state.loading = false;
        state.wallet = null;
        state.error = {
          type: "getBalance",
          message: action.payload,
        };
      })
      // add trans
      .addCase(addTrans.pending, (state) => {
        state.loading = "addTrans";
        state.error = null;
      })
      .addCase(addTrans.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(addTrans.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "addTrans",
          message: action.payload,
        };
      });
  },
});

export { addTrans, getBalance };

export default walletSlice.reducer;
