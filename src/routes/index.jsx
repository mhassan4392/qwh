import { Route, Routes, useLocation } from "react-router-dom";

// layouts
import HomeLayout from "@/layouts/home";
import EntryLayout from "@/layouts/entry";

// pages
import Index from "@/pages";
import Mine from "@/pages/mine";
import Message from "@/pages/message";
import Main from "@/pages/userinfo/main";
import MyWallet from "@/pages/wallet/mywallet";
import BankCardAdd from "@/pages/bankcard/add";
import BankCardList from "@/pages/bankcard/list";
import WalletWithdraw from "@/pages/wallet/withdraw";
import WalletTransfer from "@/pages/wallet/transfer";
import MyDeposit from "@/pages/wallet/mydeposit";
import Privilege from "@/pages/vip/privilege";
import Login from "@/pages/entry/login";
import Register from "@/pages/entry/register";

import { AnimatePresence } from "framer-motion";

import ProtectedRoute from "@/middleware/ProtectedRoute";
import PromoList from "../pages/promo/list";
import PromoItem from "../pages/promo/item";

const AllRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Index />} />
          <Route
            path="/mine"
            element={
              <ProtectedRoute>
                <Mine />
              </ProtectedRoute>
            }
          />
          <Route path="/promo/list" element={<PromoList />} />
        </Route>

        <Route path="/promo/list/:id" element={<PromoItem />} />

        <Route path="/entry" element={<EntryLayout />}>
          <Route path="/entry/login" element={<Login />} />
          <Route path="/entry/register" element={<Register />} />
        </Route>

        <Route path="/message" element={<Message />} />
        <Route
          path="/userinfo/main"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route path="/wallet/mywallet" element={<MyWallet />} />
        <Route path="/wallet/withdraw" element={<WalletWithdraw />} />
        <Route path="/wallet/transfer" element={<WalletTransfer />} />
        <Route path="/wallet/mydeposit" element={<MyDeposit />} />
        <Route path="/bankcard/add" element={<BankCardAdd />} />
        <Route path="/bankcard/list" element={<BankCardList />} />
        <Route path="/vip/privilege" element={<Privilege />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
