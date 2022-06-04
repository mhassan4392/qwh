import account_vip0 from "@/assets/images/account_vip0.webp";
import feature_moneysave from "@/assets/images/feature_moneysave.webp";
import feature_moneytransfer from "@/assets/images/feature_moneytransfer.webp";
import feature_moneydraw from "@/assets/images/feature_moneydraw.webp";
import feature_vip from "@/assets/images/feature_vip.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Features = () => {
  const { user } = useSelector((state) => state.auth);
  const features = [
    { image: feature_moneysave, title: "存款", to: "/wallet/mydeposit" },
    { image: feature_moneytransfer, title: "转账", to: "/wallet/transfer" },
    { image: feature_moneydraw, title: "取款", to: "/wallet/withdraw" },
    { image: feature_vip, title: "VIP", to: "/vip/privilege" },
  ];
  return (
    <div className="px-4 py-3 rounded-b-2xl bg-white mb-5 shadow">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center basis-[45%]">
            {user?.UserName && <div className="text-sm">{user?.UserName}</div>}
            {!user?.UserName && <div className="font-semibold">您还未登录</div>}
            {user && <img src={account_vip0} className="w-10 ml-0.5" alt="" />}
          </div>
          {user && <div className="font-bold">¥ 0.00</div>}
          {!user && (
            <p className="text-sm">
              <Link to="/entry/login">登录</Link>/
              <Link to="/entry/register">注册</Link> 后查看
            </p>
          )}
        </div>

        <div className="flex items-center basis-[55%] justify-between">
          {features.map((feature, i) => (
            <Link to={feature.to} key={i}>
              <img src={feature.image} className="w-8" alt="" />
              <div className="text-center text-sm">{feature.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
