import {
  Tabs,
  TabsButtons,
  TabsItems,
  TabButton,
  TabItem,
} from "@/components/tabs";
import { BsChevronLeft } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

import TabOne from "../../components/pages/wallet/mydeposit/TabOne";
import TabTwo from "../../components/pages/wallet/mydeposit/TabTwo";
const MyDeposit = () => {
  const tabs = [
    { title: "存入中心钱包", id: 0 },
    { title: "存入虚拟币钱包", id: 1 },
  ];
  return (
    <div className="bg-[#f7f9fe] h-full flex flex-col">
      <header>
        <nav className="bg-white flex items-center justify-between relative py-3 px-2">
          <Link to="/wallet/mywallet" className="inset-0 flex items-center">
            <BsChevronLeft className="font-bold text-xl" />
          </Link>
          <h2>存款</h2>
          <div className="flex items-center space-x-1">
            <div>教程</div>
            <BiHelpCircle />
          </div>
        </nav>
      </header>

      <div className="grow h-full overflow-y-auto bg-[#f9f9f9]">
        <Tabs defaultTab={0}>
          <TabsButtons className="flex items-center text-xs pt-3 justify-center bg-[#f9f9f9] cursor-pointer overflow-hidden">
            {tabs.map((tab, i) => (
              <TabButton
                className="flex flex-col items-center py-1.5 text-xs rounded-b-lg text-light basis-2/3 relative"
                activeClass="bg-white text-black rounded-t-lg"
                key={i}
                tab={tab.id}
              >
                {({ isActive }) => (
                  <>
                    <span>{tab.title}</span>
                    {isActive && (
                      <span className="h-0.5 w-8 bg-[#4080ff] my-1 absolute -bottom-0.5"></span>
                    )}
                  </>
                )}
              </TabButton>
            ))}
          </TabsButtons>

          <TabsItems>
            {tabs.map((tab, i) => (
              <TabItem tab={tab.id} defaultTab={tab.id == 0}>
                {tab.id == 0 && <TabOne />}
                {tab.id == 1 && <TabTwo />}
              </TabItem>
            ))}
          </TabsItems>
        </Tabs>
      </div>
    </div>
  );
};

export default MyDeposit;
