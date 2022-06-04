import { createSlice } from "@reduxjs/toolkit";
import getConfig from "./getConfig";

const initialState = {
  showPopupAds: false,
  loading: false,
  error: null,
  config: {
    Name: "赢天下",
    CsConfig: {
      PcLogo: "http://img.wwzznn.com/upload/d/space.png",
      H5Logo: "http://img.wwzznn.com/upload/d/space.png",
      ServiceLink: "https://fanya.live7000.com/Chat/Chat?userID=&userName=",
      DownloadQRCode: "http://img.wwzznn.com/upload/d/space.png",
      EnabledH5Visit: true,
      EnabledAgentPattern: true,
    },
  },
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setShowPopupAds: (state, action) => {
      state.showPopupAds = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConfig.pending, (state) => {
        state.loading = "getConfig";
        state.error = null;
      })
      .addCase(getConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.config = action.payload;
      })
      .addCase(getConfig.rejected, (state, action) => {
        (state.loading = false),
          (state.error = {
            type: "getConfig",
            message: action.payload,
          });
      });
  },
});

export const { setShowPopupAds } = configSlice.actions;

export default configSlice.reducer;
