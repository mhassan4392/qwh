import account_account from "@/assets/images/account_account.webp";
import account_wallet from "@/assets/images/account_wallet.webp";
import account_betting from "@/assets/images/account_betting.webp";
import account_transaction from "@/assets/images/account_transaction.webp";

import account_hist from "@/assets/images/account_hist.webp";
import account_help from "@/assets/images/account_help.webp";
import account_join from "@/assets/images/account_join_.webp";
import account_about from "@/assets/images/account_about.webp";

import { BsChevronRight } from "react-icons/bs";

const features = [
  { title: "我的钱包", image: account_wallet },
  { title: "投注记录", image: account_transaction },
  { title: "交易记录", image: account_betting },
  { title: "账户管理", image: account_account },
];

const features2 = [
  { title: "福利中心", subtitle: "领取红利、兑奖记录", image: account_hist },
  {
    title: "帮助中心",
    subtitle: "存取款、投注有疑问，看这里",
    image: account_help,
  },
  { title: "加入我们", subtitle: "合营计划", image: account_join },
  { title: "关于球王会体育", subtitle: "", image: account_about },
];

const MineAccount = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-lighter rounded-t-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-4 rounded-t-2xl overflow-hidden">
        {features.map((feature, i) => (
          <div key={i} className="space-y-1 flex flex-col items-center">
            <img src={feature.image} className="w-10" alt="" />
            <div className="text-center text-xs">{feature.title}</div>
          </div>
        ))}
      </div>
      <div className="px-4 py-6">
        {features2.map((feature, i) => (
          <div
            key={i}
            className="space-y-1 flex items-center justify-between bg-white shadow rounded-lg py-2 my-2 px-2 account-bottom"
          >
            <div className="flex items-center space-x-1">
              <img src={feature.image} className="w-8" alt="" />
              <div className="text-center text-xs">{feature.title}</div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="text-xs text-light">{feature.subtitle}</div>
              <BsChevronRight className="text-light" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MineAccount;
