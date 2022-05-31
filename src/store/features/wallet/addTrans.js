import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";
import { toast } from "react-toastify";

const addTrans = createAsyncThunk(
  "wallet/addTrans",
  async (data, { rejectWithValue }) => {
    const setMoney = data.setMoney;
    delete data.setMoney;
    try {
      const res = await Axios({ url: "/Game/trans", method: "POST", data });
      setMoney("");
      toast("Transaction is successful");
      return res.data.info;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default addTrans;
