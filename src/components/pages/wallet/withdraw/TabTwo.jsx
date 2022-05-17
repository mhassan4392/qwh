import { useState } from "react";
import { ImSpinner11 } from "react-icons/im";
import { BsChevronDoubleDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import icon_wallet_wallet from "@/assets/images/icon_wallet_wallet.webp";
import usdt_balance from "@/assets/images/wallet/usdt_balance.webp";

const TabTwo = () => {
  return (
    <>
      <div className="flex items-center justify-between py-3 px-4 bg-white border-b">
        <div className="flex items-center space-x-2">
          <div>钱包金额</div>

          <ImSpinner11 className="text-[#4080ff]" />
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-4 bg-white border-b">
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center space-x-2">
            <img src={icon_wallet_wallet} className="w-5" alt="" />
            <div className="text-xs">中心钱包</div>
          </div>
          <div className="text-[#4080ff] text-center">￥ 0.00</div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center space-x-2">
            <img src={icon_wallet_wallet} className="w-5" alt="" />
            <div className="text-xs">锁定钱包</div>
          </div>
          <div className="text-[#4080ff] text-center">￥ 0.00</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs px-4 my-3 bg-white py-4">
        <div>到账虚拟币地址</div>
        <div className="flex items-center space-x-2 text-[#4080ff]">
          <AiOutlinePlus />
          <span>添加虚拟币地址</span>
        </div>
      </div>

      <div className="px-4 py-3 text-xs">请先绑定一个虚拟币地址，用于收款</div>

      <div className="text-center px-4 text-xs my-5">
        取款遇到问题？联系<span className="text-[#4080ff]">人工客服</span>解决
      </div>
    </>
  );
};

export default TabTwo;
