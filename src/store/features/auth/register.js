import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const navigate = data.navigate;
      delete data.navigate;
      const res = await Axios({
        url: "/member/SignUp/do",
        method: "POST",
        data,
      });
      if (!res.data.info) {
        throw "something went wrong";
      }
      navigate("/auth/login");
      return res.data.info || null;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message || error);
    }
  }
);

export default register;
