import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPopupAds: false,
};

const loadSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    setShowPopupAds: (state, action) => {
      state.showPopupAds = action.payload;
    },
  },
});

export const { setShowPopupAds } = loadSlice.actions;

export default loadSlice.reducer;
