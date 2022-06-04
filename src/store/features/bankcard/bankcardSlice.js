import { createSlice } from "@reduxjs/toolkit";

import addCard from "./addCard";
import getCards from "./getCards";

const initialState = {
  cards: [],
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
      .addCase(addCard.fulfilled, (state) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "addCard",
          message: action.payload,
        };
      })
      .addCase(getCards.pending, (state) => {
        state.loading = "getCards";
        state.error = false;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          type: "getCards",
          message: action.payload,
        };
      });
  },
});

export default bankcardSlice.reducer;
