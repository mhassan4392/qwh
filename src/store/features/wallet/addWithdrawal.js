import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";
import { toast } from "react-toastify";

const addWithdrawal = createAsyncThunk(
  "wallet/addWithdrawal",
  async (data, { rejectWithValue }) => {
    const setValue = data.setValue;
    delete data.setValue;
    try {
      const res = await Axios({ url: "/withdrawals/do", method: "POST", data });
      console.log(res);
      toast(res.data.msg);
      setValue("money", "");
      return res.data.info;
    } catch (error) {
      toast(error.message || error);
      return rejectWithValue(error.message || error);
    }
  }
);

export default addWithdrawal;
