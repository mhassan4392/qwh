import { Route, Routes } from "react-router-dom";
import HomeLayout from "@/layouts/home";
import Index from "@/pages";
import Mine from "@/pages/mine";
import Main from "../pages/userinfo/main";
import MyWallet from "../pages/wallet/mywallet";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Index />} />
        <Route path="/mine" element={<Mine />} />
      </Route>
      <Route path="/userinfo/main" element={<Main />} />
      <Route path="/wallet/mywallet" element={<MyWallet />} />
    </Routes>
  );
};

export default AllRoutes;
