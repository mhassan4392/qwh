import { createSlice } from "@reduxjs/toolkit";

import getBalance from "./getBalance";
import addTrans from "./addTrans";
import addPay from "./addPay";
import addWithdrawal from "./addWithdrawal";

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
      .addCase(addTrans.fulfilled, (state) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(addTrans.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "addTrans",
          message: action.payload,
        };
      })
      // add pay
      .addCase(addPay.pending, (state) => {
        state.loading = "addPay";
        state.error = null;
      })
      .addCase(addPay.fulfilled, (state) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(addPay.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "addPay",
          message: action.payload,
        };
      })
      // add withdrawal
      .addCase(addWithdrawal.pending, (state) => {
        state.loading = "addWithdrawal";
        state.error = null;
      })
      .addCase(addWithdrawal.fulfilled, (state) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(addWithdrawal.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "addWithdrawal",
          message: action.payload,
        };
      });
  },
});

export { addTrans, getBalance };

export default walletSlice.reducer;
