import { createSlice } from "@reduxjs/toolkit";

import addCard from "./addCard";

const initialState = {
  loading: false,
  error: null,
};

const bankcardSlice = createSlice({
  name: "bankcard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCard.pending, (state) => {
        state.loading = "addCard";
        state.error = false;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "addCard",
          message: action.payload,
        };
      });
  },
});

export default bankcardSlice.reducer;
