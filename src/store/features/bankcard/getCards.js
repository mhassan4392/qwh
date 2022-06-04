import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const getCards = createAsyncThunk(
  "bankcard/getCards",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios({
        url: "/member/cards",
        method: "POST",
      });
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default getCards;
