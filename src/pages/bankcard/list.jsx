import {
  Tabs,
  TabsButtons,
  TabsItems,
  TabButton,
  TabItem,
} from "@/components/tabs";
import { BsChevronLeft, BsPlusLg } from "react-icons/bs";
import { Link, useSearchParams } from "react-router-dom";

import TabOne from "../../components/pages/backcard/TabOne";
import TabTwo from "../../components/pages/backcard/TabTwo";
import TabThree from "../../components/pages/backcard/TabThree";
const BankCardList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const usdt = searchParams.get("usdt");
  const ebpay = searchParams.get("ebpay");
  const tabs = [
    { title: "银行卡", id: 0 },
    { title: "虚拟币", id: 1 },
    { title: "EBpay地址", id: 2 },
  ];
  return (
    <div className="bg-common-bg h-full flex flex-col">
      <header>
        <nav className="bg-white flex items-center justify-center relative py-3">
          <Link to={-1} className="absolute inset-0 flex items-center mx-2">
            <BsChevronLeft className="font-bold text-xl" />
          </Link>
          <h2>账户管理</h2>
        </nav>
      </header>

      <div className="grow h-full overflow-y-auto">
        <Tabs defaultTab={0}>
          <div className="px-4 py-3 bg-white">
            <TabsButtons className="flex items-center justify-between bg-common-bg cursor-pointer rounded-lg overflow-hidden">
              {tabs.map((tab, i) => (
                <TabButton
                  className="basis-1/3 py-0.5 text-sm rounded-lg text-light"
                  activeClass="bg-white text-black"
                  key={i}
                  tab={tab.id}
                  onClick={() => {
                    if (tab.id == 1) {
                      setSearchParams({ usdt: 1 });
                    } else if (tab.id == 2) {
                      setSearchParams({ ebpay: 1 });
                    } else {
                      setSearchParams({});
                    }
                  }}
                >
                  {tab.title}
                </TabButton>
              ))}
            </TabsButtons>
          </div>

          <div className="px-4">
            <TabsItems>
              {tabs.map((tab, i) => (
                <TabItem key={i} tab={tab.id} defaultTab={tab.id == 0}>
                  {i == 0 && <TabOne />}
                  {i == 1 && <TabTwo />}
                  {i == 2 && <TabThree />}

                  <Link
                    to="/bankcard/add"
                    className="flex items-center justify-center w-full bg-white text-black py-4 my-3 rounded"
                  >
                    <BsPlusLg />
                    {!usdt && !ebpay && "添加银行卡"}
                    {usdt && "添加虚拟币地址"}
                    {ebpay && "添加EBpay地址"}
                  </Link>

                  <div className="text-center text-sm">
                    {!usdt && !ebpay && "最多支持添加10张银行卡"}
                    {usdt && "最多支持添加5个虚拟币地址"}
                    {ebpay && "最多支持添加5个EBpay地址"}
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
