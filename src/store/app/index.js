import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../features/auth/authSlice";
import bankcardSlice from "../features/bankcard/bankcardSlice";
import loadSlice from "../features/load/loadSlice";
import walletSlice from "../features/wallet/walletSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    bankcard: bankcardSlice,
    wallet: walletSlice,
    load: loadSlice,
  },
});
