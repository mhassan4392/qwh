import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/utils/axios";
import { toast } from "react-toastify";

const addPay = createAsyncThunk(
  "wallet/addPay",
  async (data, { rejectWithValue }) => {
    const setValue = data.setValue;
    delete data.setValue;
    try {
      const res = await Axios({ url: "/pay/do", method: "POST", data });
      setValue("money", "");
      toast("Payment is successful");
      return res.data.info;
    } catch (error) {
      toast(error.message || error);
      return rejectWithValue(error.message || error);
    }
  }
);

export default addPay;
