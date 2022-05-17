import {
  Tabs,
  TabsButtons,
  TabsItems,
  TabButton,
  TabItem,
} from "@/components/tabs";
import { BsChevronLeft, BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

import nodata from "@/assets/images/bankcard/nodata.webp";
const BankCardList = () => {
  const tabs = [
    { title: "银行卡", id: 0 },
    { title: "虚拟币", id: 1 },
    { title: "EBpay地址", id: 2 },
  ];
  return (
    <div className="bg-[#f7f9fe] h-full flex flex-col">
      <header>
        <nav className="bg-white flex items-center justify-center relative py-3">
          <Link
            to="/wallet/mywallet"
            className="absolute inset-0 flex items-center mx-2"
          >
            <BsChevronLeft className="font-bold text-xl" />
          </Link>
          <h2>账户管理</h2>
        </nav>
      </header>

      <div className="grow h-full overflow-y-auto">
        <Tabs defaultTab={0}>
          <div className="px-4 py-3 bg-white">
            <TabsButtons className="flex items-center justify-between bg-[#f7f9fe] cursor-pointer rounded-lg overflow-hidden">
              {tabs.map((tab, i) => (
                <TabButton
                  className="basis-1/3 py-0.5 text-sm rounded-lg text-light"
                  activeClass="bg-white text-black"
                  key={i}
                  tab={tab.id}
                >
                  {tab.title}
                </TabButton>
              ))}
            </TabsButtons>
          </div>

          <div className="px-4">
            <TabsItems>
              {tabs.map((tab, i) => (
                <TabItem tab={tab.id} defaultTab={tab.id == 0}>
                  <div className="px-6 mt-20">
                    <img src={nodata} className="w-full" alt="" />
                  </div>

                  <Link
                    to="/bankcard/add"
                    className="flex items-center justify-center w-full bg-white text-black py-4 my-3 rounded"
                  >
                    <BsPlusLg />
                    <span>添加银行卡</span>
                  </Link>

                  <div className="text-center text-sm">
                    最多支持添加10张银行卡
                  </div>
                </TabItem>
              ))}
            </TabsItems>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default BankCardList;
