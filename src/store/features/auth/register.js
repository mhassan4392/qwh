import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const navigate = data.navigate;
      delete data.navigate;
      const res = await Axios({
        url: "/SignUp/do",
        method: "POST",
        data,
      });
      console.log(res);
      if (!res.data.info) {
        throw res.data.msg;
      }
      navigate("/auth/login");
      return res.data.info || null;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export default register;
