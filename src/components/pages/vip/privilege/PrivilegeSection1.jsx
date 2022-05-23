import vip_icon_withdrawaltimes from "@/assets/images/vip/vip_icon_withdrawaltimes.svg";
import vip_icon_withdrawalamount from "@/assets/images/vip/vip_icon_withdrawalamount.svg";
import vip_icon_update from "@/assets/images/vip/vip_icon_update.svg";
import vip_icon_redmoney from "@/assets/images/vip/vip_icon_redmoney.svg";

const PrivilegeSection1 = () => {
  const features = [
    { title: "每日提款次数", img: vip_icon_withdrawaltimes, no: "10" },
    { title: "每日提款额度", img: vip_icon_withdrawalamount, no: "250,000.00" },
    { title: "升级礼金", img: vip_icon_update, no: "88" },
    { title: "每周红包", img: vip_icon_redmoney, no: "88.00" },
  ];
  return (
    <div className="px-4 bg-white py-4 my-3">
      <div className="border-l-[3px] text-sm border-primary pl-3">VIP4尊享</div>
      <div className="flex items-center flex-wrap justify-between px-4 pt-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`${
              i == 2 ? "basis-[100%]" : "basis-[50%]"
            } flex grow space-x-2 mb-2`}
          >
            <div>
              <img src={feature.img} className="w-8" alt="" />
            </div>
            <div>
              <div className="font-medium">{feature.no}</div>
              <div className="text-light text-xs">{feature.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivilegeSection1;
