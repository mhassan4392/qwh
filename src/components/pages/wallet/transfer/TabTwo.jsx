import { useState } from "react";
import { ImSpinner11 } from "react-icons/im";
import { BsChevronDoubleDown, BsX } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineBell } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";

import icon_wallet_wallet from "@/assets/images/icon_wallet_wallet.webp";
import usdt_balance from "@/assets/images/wallet/usdt_balance.webp";

const TabTwo = () => {
  const values = ["随意兑换", "无手续费", "无延迟", "汇率稳定"];
  return (
    <>
      <div className="py-3 px-2 bg-white">
        <div className="bg-[#f9f9f9] py-2 px-2 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AiOutlineBell className="shrink-0" />
              <div className="text-[9px]">
                【虚拟币钱包】兑换至【中心钱包】即可游戏
              </div>
            </div>

            <BsX className="shrink-0" />
          </div>
          <div className="flex items-center justify-between text-[9px]">
            {values.map((value, i) => (
              <div className="bg-white rounded-3xl px-2 py-1" key={i}>
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-6 bg-white">
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center space-x-2">
            <div className="text-light">从</div>
            <div className="text-xs">中心钱包</div>
          </div>
          <div className="text-[#4080ff] text-center">￥ 0.00</div>
        </div>

        <div>
          <FaExchangeAlt className="text-light" />
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center space-x-2">
            <div className="text-light">到</div>
            <div className="text-xs">锁定钱包</div>
          </div>
          <div className="text-[#4080ff] text-center">￥ 0.00</div>
        </div>
      </div>

      <div className="text-xs px-4 my-3 bg-white py-4">
        <div className="space-y-3">
          <div>到账虚拟币地址</div>
          <div className="flex items-center justify-between border-b-4 border-[#f9f9f9]">
            <div className="flex items-center">
              <div className="font-bold text-lg mr-1">￥</div>
              <input
                type="text"
                name=""
                placeholder="请输入兑换人民币金额"
                className="bg-transparent border-0 outline-none grow"
                id=""
              />
            </div>
            <div className="text-[#4080ff] shrink-0">最大金额</div>
          </div>
          <div>
            <span className="text-light">参考汇率: </span> &nbsp; 6.85
          </div>
        </div>
      </div>

      <div className="mx-4">
        <button className="w-full bg-primary py-2 bg-opacity-50">
          立即兑换
        </button>
      </div>

      <div className="text-center px-4 text-xs my-5">
        取款遇到问题？联系<span className="text-[#4080ff]">人工客服</span>解决
      </div>
    </>
  );
};

export default TabTwo;
