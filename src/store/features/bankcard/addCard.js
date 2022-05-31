import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";

import { toast } from "react-toastify";

const addCard = createAsyncThunk(
  "bankcard/addCard",
  async (data, { rejectWithValue }) => {
    try {
      const navigate = data.navigate;
      delete data.navigate;
      const res = await Axios({
        url: "/member/bindcard",
        method: "POST",
        data,
      });
      console.log(res);
      toast("Card add successfuly");
      navigate("/bankcard/list");
      return res.data.info;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default addCard;
