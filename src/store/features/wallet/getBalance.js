import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const getBalance = createAsyncThunk(
  "wallet/getBalance",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios({ url: "/Game/Balance", method: "POST" });
      return res.data.info;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default getBalance;
