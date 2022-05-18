import ebpay from "@/assets/images/wallet/ebpay.png";
import mydeposit2 from "@/assets/images/wallet/mydeposit2.png";
import mydeposit3 from "@/assets/images/wallet/mydeposit3.png";
import mydeposit4 from "@/assets/images/wallet/mydeposit4.png";
import mydeposit5 from "@/assets/images/wallet/mydeposit5.png";
import mydeposit6 from "@/assets/images/wallet/mydeposit6.png";
import mydeposit7 from "@/assets/images/wallet/mydeposit7.png";
import mydeposit8 from "@/assets/images/wallet/mydeposit8.png";
import mydeposit9 from "@/assets/images/wallet/mydeposit9.png";

import NestedTabOne from "./nestedtabs/TabOne";
import NestedTabTwo from "./nestedtabs/TabTwo";
import NestedTabThree from "./nestedtabs/TabThree";
import NestedTabFour from "./nestedtabs/TabFour";
import NestedTabFive from "./nestedtabs/TabFive";
import NestedTabSix from "./nestedtabs/TabSix";
import NestedTabSeven from "./nestedtabs/TabSeven";
import NestedTabEight from "./nestedtabs/TabEight";
import NestedTabNine from "./nestedtabs/TabNine";

import {
  Tabs,
  TabsButtons,
  TabsItems,
  TabButton,
  TabItem,
} from "@/components/tabs";

const TabOne = () => {
  const tabs = [
    { title: "EBpay", subtitle: "加送 1 %", image: ebpay },
    { title: "易币付", image: mydeposit2 },
    { title: "虚拟币扫码", image: mydeposit3 },
    { title: "网银转账", image: mydeposit4 },
    { title: "银行卡转账", image: mydeposit5 },
    { title: "极速微信", image: mydeposit6 },
    { title: "极速支付宝", image: mydeposit7 },
    { title: "支付宝", image: mydeposit8 },
    { title: "QQ扫码", image: mydeposit9 },
  ];

  return (
    <>
      <Tabs defaultTab={0}>
        <TabsButtons className="grid grid-cols-4 gap-3 px-4 bg-white items-center text-xs pt-3 pb-5 justify-center cursor-pointer overflow-hidden">
          {tabs.map((tab, i) => (
            <TabButton
              className="text-xs flex flex-col h-20 rounded-lg items-center justify-center border space-y-1"
              activeClass="bg-white text-black border-[#4080ff]"
              key={i}
              tab={i}
            >
              {({ isActive }) => (
                <>
                  <img src={tab.image} className="w-8" alt="" />
                  <div
                    className={`text-[10px] ${
                      isActive ? "text-[#4080ff]" : ""
                    }`}
                  >
                    <div>{tab.title}</div>
                    {tab.subtitle && (
                      <span className="text-primary text-[8px]">
                        {tab.subtitle}
                      </span>
                    )}
                  </div>
                </>
              )}
            </TabButton>
          ))}
        </TabsButtons>

        <TabsItems>
          {tabs.map((tab, i) => (
            <TabItem key={tab.title} tab={i} defaultTab={i == 0}>
              {i == 0 && <NestedTabOne />}
              {i == 1 && <NestedTabTwo />}
              {i == 2 && <NestedTabThree />}
              {i == 3 && <NestedTabFour />}
              {i == 4 && <NestedTabFive />}
              {i == 5 && <NestedTabSix />}
              {i == 6 && <NestedTabSeven />}
              {i == 7 && <NestedTabEight />}
              {i == 8 && <NestedTabNine />}
            </TabItem>
          ))}
        </TabsItems>
      </Tabs>

      <div className="mx-4 my-4">
        <button
          disabled
          className="w-full bg-primary py-2 bg-opacity-50 text-white"
        >
          立即存款
        </button>
      </div>

      <div className="my-5 px-4 text-center text-xs">
        存款遇到问题？联系<span className="text-[#4080ff]">人工客服</span>解决
      </div>
    </>
  );
};

export default TabOne;
