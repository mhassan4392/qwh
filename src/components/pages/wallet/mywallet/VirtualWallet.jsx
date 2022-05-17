import feature_moneydraw from "@/assets/images/wallet/feature_moneydraw.webp";
import feature_withdrawmoney from "@/assets/images/wallet/feature_withdrawmoney.webp";

import usdt_withdrawal from "@/assets/images/wallet/usdt_withdrawal.webp";
import usdt_address from "@/assets/images/wallet/usdt_address.webp";
import usdt_balance from "@/assets/images/wallet/usdt_balance.webp";

import { AiFillStar } from "react-icons/ai";

const VirtualWallet = () => {
  const features = [
    { title: "充币", image: feature_moneydraw },
    { title: "充币", image: usdt_withdrawal },
    { title: "取款", image: feature_withdrawmoney },
    { title: "银行卡", image: usdt_address },
  ];
  return (
    <div className="shadow-lg">
      <div className="py-2 bg-contain bg-center bg-no-repeat bg-gradient-to-r from-green-500 to-green-800 rounded-t-lg">
        <span className="text-white text-sm border-l-2 border-white px-3 mx-3">
          虚拟币钱包（USDT）
        </span>
      </div>
      <div className="bg-white py-4">
        <div className="flex items-center justify-between px-6">
          <div className="">
            <div className="flex space-x-2">
              <img src={usdt_balance} className="w-3" alt="" />
              <div className="text-[9px]">中心钱包</div>
            </div>
            <div className="text-[#4080ff] text-center">￥ 0.00</div>
          </div>
          <div>
            <div className="flex space-x-2">
              <img src={usdt_balance} className="w-3" alt="" />
              <div className="text-[9px]">中心钱包</div>
            </div>
            <div className="text-[#4080ff] text-center">￥ 0.00</div>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 my-5">
          {features.map((feature, i) => (
            <div key={i} className="space-y-1">
              <img src={feature.image} className="w-10 sm:w-20" alt="" />
              <div className="text-center text-xs">{feature.title}</div>
            </div>
          ))}
        </div>

        <div className="px-5">
          <div className="py-2 bg-[#f9f9f9] px-2 rounded-xl space-y-2 text-light text-[10px]">
            <div className="flex items-center space-x-1">
              <AiFillStar />
              <p>用于存放USDT数字货币，安全稳定、不受监管</p>
            </div>
            <div className="flex items-center space-x-1">
              <AiFillStar />
              <p>USDT随意充币/提币，兑换至【中心钱包】即可游戏</p>
            </div>
            <div className="flex items-center space-x-1">
              <AiFillStar />
              <p>与中心钱包间兑换，无手续费，秒到账</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualWallet;
