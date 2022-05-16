import header_center_wallet from "@/assets/images/header_center_wallet.webp";
import icon_wallet_wallet from "@/assets/images/icon_wallet_wallet.webp";
import feature_moneydraw from "@/assets/images/wallet/feature_moneydraw.webp";
import feature_moneytransfer from "@/assets/images/wallet/feature_moneytransfer.webp";
import feature_withdrawmoney from "@/assets/images/wallet/feature_withdrawmoney.webp";
import feature_bankcard from "@/assets/images/wallet/feature_bankcard.webp";

const CenterWallet = () => {
  const features = [
    { title: "存款", image: feature_moneydraw },
    { title: "转账", image: feature_moneytransfer },
    { title: "取款", image: feature_withdrawmoney },
    { title: "银行卡", image: feature_bankcard },
  ];
  return (
    <div className="shadow">
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
            <div className="text-lighten text-center">￥ 0.00</div>
          </div>
          <div>
            <div className="flex space-x-2">
              <img src={icon_wallet_wallet} className="w-3" alt="" />
              <div className="text-[9px]">中心钱包</div>
            </div>
            <div className="text-lighten text-center">￥ 0.00</div>
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

        <div></div>
      </div>
    </div>
  );
};

export default CenterWallet;
