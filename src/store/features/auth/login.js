import { createAsyncThunk } from "@reduxjs/toolkit";

const login = createAsyncThunk("auth/login", (data, { rejectWithValue }) => {
  try {
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export default login;
