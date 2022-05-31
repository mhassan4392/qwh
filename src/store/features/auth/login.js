import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const navigate = data.navigate;
      delete data.navigate;
      const res = await Axios({ url: "/member/signin", method: "POST", data });
      if (!res.data.info) {
        throw "user not found";
      }
      Axios.defaults.headers.common["Authorization"] = res.data.info.Session;
      localStorage.setItem("user", JSON.stringify(res.data.info));
      navigate("/");
      return res.data.info || null;
    } catch (error) {
      localStorage.removeItem("user");
      return rejectWithValue(error.message || error);
    }
  }
);

export default login;
