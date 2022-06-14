import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const navigate = data.navigate;
      delete data.navigate;
      const setCookie = data.setCookie;
      delete data.setCookie;
      const res = await Axios({ url: "/member/signin", method: "POST", data });
      if (!res.data.info) {
        throw res.data.msg;
      }
      setCookie("user", res.data.info, { path: "/" });
      Axios.defaults.headers.common["Authorization"] = res.data.info.Session;
      navigate("/");
      return res.data.info || null;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default login;
