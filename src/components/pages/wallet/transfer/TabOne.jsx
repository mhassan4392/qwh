import { useState } from "react";
import { ImSpinner11 } from "react-icons/im";
import { BsChevronDoubleDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import icon_wallet_wallet from "@/assets/images/icon_wallet_wallet.webp";
import usdt_balance from "@/assets/images/wallet/usdt_balance.webp";
import Checkbox from "../../../checkbox/Checkbox";

const TabOne = () => {
  const [value, setValue] = useState(false);
  const [more, setMore] = useState(true);
  const amounts = [
    { title: "球王会体育", amount: 0.0 },
    { title: "OB体育", amount: 0.0 },
    { title: "FB体育", amount: 0.0 },
    { title: "eBET真人", amount: 0.0 },
    { title: "球王会体育", amount: 0.0 },
    { title: "OB体育", amount: 0.0 },
    { title: "FB体育", amount: 0.0 },
    { title: "eBET真人", amount: 0.0 },
    { title: "球王会体育", amount: 0.0 },
    { title: "OB体育", amount: 0.0 },
    { title: "FB体育", amount: 0.0 },
    { title: "eBET真人", amount: 0.0 },
    { title: "球王会体育", amount: 0.0 },
    { title: "OB体育", amount: 0.0 },
    { title: "FB体育", amount: 0.0 },
  ];

  const ams = !more ? amounts.slice(0, 3) : amounts;

  return (
    <>
      <div className="flex items-center justify-between py-3 px-4 bg-white border-b">
        <div className="flex items-center space-x-2">
          <div>钱包金额</div>

          <ImSpinner11 className="text-[#4080ff]" />
        </div>

        <div className="text-[#4080ff]">一键回收</div>
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

      <div className="grid grid-cols-4 items-center justify-between px-4 bg-white">
        {ams.map((amount, i) => (
          <div
            key={i}
            className="text-[11px] flex flex-col items-center py-3 px-2"
          >
            <div className="truncate">{amount.title}</div>
            <div>{amount.amount}</div>
          </div>
        ))}
        <div
          onClick={() => setMore(!more)}
          className="text-[11px] flex flex-col items-center py-3 px-2"
        >
          <div>收起</div>
          <div>
            <BsChevronDoubleDown
              className={more ? "transform rotate-180" : ""}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white py-4 px-4">
        <div>自动转账</div>
        <div>
          <Checkbox value={value} onChange={(v) => setValue(v)} />
        </div>
      </div>

      <div className="text-center px-4 text-xs my-5">
        如需帮助，请 <span className="text-[#4080ff]">联系客服</span>
      </div>
    </>
  );
};

export default TabOne;
