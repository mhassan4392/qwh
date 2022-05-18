import { useState } from "react";
import { BsChevronRight, BsX } from "react-icons/bs";
import button_step_small from "@/assets/images/wallet/button_step_small.webp";
import qr_code from "@/assets/images/wallet/qr_code.webp";
const TabTwo = () => {
  const steps = ["选择协议 选择冷钱包", "选择协议", "输入充币数量", "完成充币"];
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
          <div>USDT充币地址</div>
          <div className="text-[9px]">
            至少充入<span className="text-primary">20</span>USDT，否则无法到账
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <div className="truncate basis-3/4 text-[9px] sm:text-sm">
            TVDxLZDMw698HTPPWs2gNVazGRCztphJv6
          </div>
          <div className="text-xs text-secondary basis-1/4 flex items-center justify-end">
            <div className="border border-secondary px-1 py-0.5 rounded">
              复制
            </div>
          </div>
        </div>

        <div className="mb-2">
          <img src={qr_code} className="w-1/2 mx-auto" alt="" />
        </div>

        <div className="text-center mb-4">
          <button className="w-1/3 py-3 border rounded bg-white shadow">
            保存二维码
          </button>
        </div>

        <div className="mb-2 text-center">充币成功后自动到账</div>

        <div className="mb-3 text-light text-center text-[8px] sm:text-xs">
          <p>建议使用冷钱包进行中转操作，不要直接使用交易所；</p>
          <p>冷钱包不需要开通法币交易，不用注册个人资料。</p>
        </div>
      </div>

      <div className="my-5 px-4 text-center text-xs">
        充币遇到问题？联系 <span className="text-secondary">人工客服</span> 解决
      </div>
    </>
  );
};

export default TabTwo;
