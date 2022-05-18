import account_vip0 from "@/assets/images/account_vip0.webp";
import feature_moneysave from "@/assets/images/feature_moneysave.webp";
import feature_moneytransfer from "@/assets/images/feature_moneytransfer.webp";
import feature_moneydraw from "@/assets/images/feature_moneydraw.webp";
import feature_vip from "@/assets/images/feature_vip.webp";

const Features = () => {
  const features = [
    { image: feature_moneysave, title: "存款" },
    { image: feature_moneytransfer, title: "存款" },
    { image: feature_moneydraw, title: "存款" },
    { image: feature_vip, title: "VIP" },
  ];
  return (
    <div className="px-4 py-3 rounded-b-2xl bg-white mb-5 shadow">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center basis-[45%]">
            <small>aaron1990</small>
            <img src={account_vip0} className="w-10 ml-0.5" alt="" />
          </div>
          <div className="font-bold">¥ 0.00</div>
        </div>

        <div className="flex items-center basis-[55%] justify-between">
          {features.map((feature, i) => (
            <div key={i}>
              <img src={feature.image} className="w-8" alt="" />
              <div className="text-center text-sm">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
