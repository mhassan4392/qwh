import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const getConfig = createAsyncThunk(
  "config/getConfig",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios({
        url: "/page/config",
        method: "POST",
      });
      return res.data.info;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default getConfig;
