import { useState } from "react";
import icon_wallet_wallet from "@/assets/images/icon_wallet_wallet.webp";
import feature_moneydraw from "@/assets/images/wallet/feature_moneydraw.webp";
import feature_moneytransfer from "@/assets/images/wallet/feature_moneytransfer.webp";
import feature_withdrawmoney from "@/assets/images/wallet/feature_withdrawmoney.webp";
import feature_bankcard from "@/assets/images/wallet/feature_bankcard.webp";

import { Link } from "react-router-dom";

import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const CenterWallet = () => {
  const [show, setShow] = useState(false);
  const features = [
    { title: "存款", image: feature_moneydraw, to: "/wallet/mydeposit" },
    { title: "转账", image: feature_moneytransfer, to: "/wallet/transfer" },
    { title: "取款", image: feature_withdrawmoney, to: "/wallet/withdraw" },
    { title: "银行卡", image: feature_bankcard, to: "/bankcard/list" },
  ];
  return (
    <div className="shadow-lg mb-5">
      <div className="py-2 bg-contain bg-center bg-no-repeat bg-gradient-to-r from-gray-500 to-gray-800 rounded-t-lg">
        <span className="text-white text-sm border-l-2 border-white px-3 mx-3">
          中心钱包（元）
        </span>
      </div>
      <div className="bg-white py-4">
        <div className="flex items-center justify-between px-6">
          <div className="">
            <div className="flex space-x-2">
              <img src={icon_wallet_wallet} className="w-3" alt="" />
              <div className="text-[9px]">中心钱包</div>
            </div>
            <div className="text-secondary text-center">￥ 0.00</div>
          </div>
          <div>
            <div className="flex space-x-2">
              <img src={icon_wallet_wallet} className="w-3" alt="" />
              <div className="text-[9px]">中心钱包</div>
            </div>
            <div className="text-secondary text-center">￥ 0.00</div>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 my-5">
          {features.map((feature, i) => (
            <Link to={feature.to} key={i} className="space-y-1">
              <img src={feature.image} className="w-10 sm:w-20" alt="" />
              <div className="text-center text-xs">{feature.title}</div>
            </Link>
          ))}
        </div>

        <div className="px-5">
          <div className="bg-[#f9f9f9] rounded-xl">
            <div className="flex items-center px-2 justify-between py-2">
              <div className="flex items-center space-x-2 text-xs">
                <div>场馆余额</div>
                <div className="border border-primary text-primary rounded-full px-3 py1">
                  一场馆
                </div>
              </div>

              <div
                className="flex items-center space-x-2 text-xs"
                onClick={() => setShow(!show)}
              >
                <div className="text-primary">展开明细</div>
                <div className="text-secondary">
                  <HiOutlineChevronDoubleDown
                    className={`transform transition-all duration-500 ${
                      show ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
            {show && (
              <div className="bg-light-bg text-[8px]">
                <div className="flex items-center justify-between py-2 px-2 border-t">
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 px-2 border-t">
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 px-2 border-t">
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                </div>

                <div className="flex items-center justify-start py-2 px-2 border-t">
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex flex-col items-center basis-1/4">
                    <div>球王会体育</div>
                    <div>0.00</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterWallet;
