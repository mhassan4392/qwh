import { Route, Routes } from "react-router-dom";
import HomeLayout from "@/layouts/home";
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

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Index />} />
        <Route path="/mine" element={<Mine />} />
      </Route>

      <Route path="/message" element={<Message />} />
      <Route path="/userinfo/main" element={<Main />} />
      <Route path="/wallet/mywallet" element={<MyWallet />} />
      <Route path="/wallet/withdraw" element={<WalletWithdraw />} />
      <Route path="/wallet/transfer" element={<WalletTransfer />} />
      <Route path="/wallet/mydeposit" element={<MyDeposit />} />
      <Route path="/bankcard/add" element={<BankCardAdd />} />
      <Route path="/bankcard/list" element={<BankCardList />} />
      <Route path="/vip/privilege" element={<Privilege />} />
    </Routes>
  );
};

export default AllRoutes;
