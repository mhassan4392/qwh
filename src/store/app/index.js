import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../features/auth/authSlice";
import bankcardSlice from "../features/bankcard/bankcardSlice";
import walletSlice from "../features/wallet/walletSlice";
import configSlice from "../features/config/configSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    bankcard: bankcardSlice,
    wallet: walletSlice,
    config: configSlice,
  },
});
