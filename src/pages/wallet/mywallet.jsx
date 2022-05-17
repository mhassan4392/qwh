import wallet_page_bg from "@/assets/images/wallet_page_bg.webp";
import { BiHelpCircle } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import { ImSpinner11 } from "react-icons/im";
import { Link } from "react-router-dom";
import CenterWallet from "../../components/pages/wallet/mywallet/CenterWallet";
import VirtualWallet from "../../components/pages/wallet/mywallet/VirtualWallet";
const MyWallet = () => {
  return (
    <div className="overflow-y-auto h-full">
      <div className="relative">
        <img src={wallet_page_bg} className="w-full h-[200px]" alt="" />
        <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-4 z-50">
          <Link to="/mine">
            <BsChevronLeft className="text-xl text-white" />
          </Link>
          <div>我的钱包</div>
          <div>交易记录</div>
        </div>
        <div className="absolute inset-0 flex justify-center flex-col px-4">
          <div className="flex items-center text-light">
            <div>总资产（元）</div>
            <BiHelpCircle />
          </div>
          <div className="flex items-center space-x-2 text-white">
            <small>￥ </small>
            <span className="text-xl">0.00</span>
            <ImSpinner11 />
          </div>
        </div>
      </div>
      <div className="px-4 -mt-16 relative z-50">
        <CenterWallet />
        <VirtualWallet />
      </div>
    </div>
  );
};

export default MyWallet;
