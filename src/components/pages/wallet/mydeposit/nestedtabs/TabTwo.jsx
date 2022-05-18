import { useState } from "react";
import { BiHelpCircle } from "react-icons/bi";
import { BsChevronRight, BsX } from "react-icons/bs";
import button_step_small from "@/assets/images/wallet/button_step_small.webp";
const TabTwo = () => {
  const steps = ["选择协议 输入金额", "交易所划转USDT", "完成存款"];
  const [value, setValue] = useState("TRC20");
  return (
    <>
      <div className="bg-white py-2 text-xs">
        <div className="mx-4 px-2 py-3 bg-common-bg">
          <div className="flex items-center justify-between">
            <div>USDT价格稳定 流通性高 不受监管</div>
            <div className="flex items-center text-light text-[9px]">
              <span>了解更多 </span>
              <BsChevronRight className="shrink-0" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center justify-between">
              {steps.map((step, i) => (
                <div className="relative">
                  <div className="absolute text-[8px] inset-0 flex items-center justify-center">
                    {step}
                  </div>
                  <img src={button_step_small} className="w-full" alt="" />
                </div>
              ))}
            </div>
            <BsX className="text-light shrink-0 ml-1 text-xl" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-5 px-4">
          <div className="flex items-center space-x-2">
            <div>选择协议</div>
            <div
              onClick={() => setValue("TRC20")}
              className={`border px-3 py-2 rounded ${
                value == "TRC20" ? "border-secondary icon-select-bg" : ""
              }`}
            >
              TRC20
            </div>
            <div
              onClick={() => setValue("ERC20")}
              className={`border px-3 py-2 rounded ${
                value == "ERC20" ? "border-secondary icon-select-bg" : ""
              }`}
            >
              ERC20
            </div>
          </div>
          <div className="flex items-center text-light">
            <span>协议区别 </span>
            <BsChevronRight />
          </div>
        </div>
      </div>

      <div className="text-xs px-4 bg-white py-3 my-4">
        <div className="flex items-center justify-between mb-3">
          <div>存款人民币金额</div>
          <div className="text-primary flex items-center space-x-1 text-[9px]">
            加送1%，每日最高优惠1000.00元
            <BiHelpCircle />
          </div>
        </div>
        <div className="flex items-center justify-between border-b mb-2">
          <input
            type="text"
            name=""
            placeholder="请输入101~500,000"
            className="bg-transparent border-0 outline-none py-1"
            id=""
          />
          <div>元</div>
        </div>
        <div className="text-light">1USDT ≈ 6.79元 实时变化）</div>
      </div>
    </>
  );
};

export default TabTwo;
