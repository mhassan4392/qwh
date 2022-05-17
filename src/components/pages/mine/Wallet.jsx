import "./Wallet.css";
import account_wallet_bg from "@/assets/images/account_wallet_bg.webp";
import account_balance from "@/assets/images/account_balance.webp";
import account_moneysave from "@/assets/images/account_moneysave.webp";
import account_moneydraw from "@/assets/images/account_moneydraw.webp";
import account_moneytransfer from "@/assets/images/account_moneytransfer.webp";
import account_vip from "@/assets/images/account_vip.webp";
import { Link } from "react-router-dom";

const features = [
  { title: "存款", image: account_moneysave },
  { title: "转账", image: account_moneytransfer },
  { title: "取款", image: account_moneydraw },
  { title: "VIP", image: account_vip },
];
const Wallet = () => {
  return (
    <div className="px-4 w-full py-4">
      <div className="relative">
        <img src={account_wallet_bg} className="w-full" alt="" />
        <div className="absolute inset-0 bg-no-repeat bg-contain md:bg-center md:bg-cover">
          <div className="flex items-center justify-between account-top">
            <Link to="/wallet/mywallet" className="flex items-center space-x-1">
              <img src={account_balance} className="w-6" alt="" />
              <div className="text-xs">中心钱包</div>
            </Link>
            <div className="font-semibold">
              <small>¥</small>
              <span className="text-lg">0.00</span>
            </div>
          </div>

          <div className="flex items-center justify-between account-bottom">
            {features.map((feature, i) => (
              <div key={i} className="space-y-1 flex flex-col items-center">
                <img src={feature.image} className="account-image" alt="" />
                <div className="text-xs sm:text-sm md:text-lg text-center">
                  {feature.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
