import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const getValidCode = createAsyncThunk(
  "auth/validCode",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Axios({
        url: "/SignUp/validCode",
        method: "POST",
        responseType: "blob",
      });
      if (!res.data) {
        throw res.data.msg;
      }
      return URL.createObjectURL(res.data);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message || error);
    }
  }
);

export default getValidCode;
