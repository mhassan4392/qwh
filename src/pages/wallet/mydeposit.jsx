import { useState, useEffect } from "react";

import Axios from "@/utils/axios";

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
import MyDepositTabItem from "../../components/pages/wallet/mydeposit/TabItem";
import PageLoader from "../../components/loading/PageLoader";
const MyDeposit = () => {
  // const tabs = [
  //   { title: "存入中心钱包", id: 0 },
  //   { title: "存入虚拟币钱包", id: 1 },
  // ];

  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios({ url: "/pay/list", method: "POST" })
      .then((res) => {
        setTabs(res.data.info);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);
  return (
    <div className="bg-common-bg h-full flex flex-col">
      {loading && <PageLoader />}
      <header>
        <nav className="bg-white flex items-center justify-center relative py-3 px-2">
          <div className="absolute inset-0 flex items-center px-2">
            <Link to={-1} className="inset-0 flex items-center">
              <BsChevronLeft className="font-bold text-xl" />
            </Link>
          </div>
          <h2>存款</h2>
          {/* <div className="flex items-center space-x-1">
            <div>教程</div>
            <BiHelpCircle />
          </div> */}
        </nav>
      </header>

      <div className="grow h-full overflow-y-auto">
        <Tabs defaultTab={0}>
          <TabsButtons className="flex items-center text-xs pt-3 justify-center bg-light-bg cursor-pointer overflow-hidden">
            {tabs.map((tab, i) => (
              <TabButton
                className="flex flex-col items-center py-1.5 text-xs rounded-b-lg text-light basis-2/3 relative"
                activeClass="bg-white text-black rounded-t-lg"
                key={i}
                tab={i}
              >
                {({ isActive }) => (
                  <>
                    <span>{tab.Name}</span>
                    {isActive && (
                      <span className="h-0.5 w-8 bg-secondary my-1 absolute -bottom-0.5"></span>
                    )}
                  </>
                )}
              </TabButton>
            ))}
          </TabsButtons>

          <TabsItems>
            {tabs.map((tab, i) => (
              <TabItem tab={i} key={i} defaultTab={i == 0}>
                <MyDepositTabItem tabs={tab.Merchants} />
                {/* {i == 0 && <TabOne />}
                {i == 1 && <TabTwo />} */}
              </TabItem>
            ))}
          </TabsItems>
        </Tabs>
      </div>
    </div>
  );
};

export default MyDeposit;
