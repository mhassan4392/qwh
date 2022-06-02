import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";

import item_jpg from "@/assets/images/promo/item.jpg";

import {
  Tabs,
  TabsButtons,
  TabsItems,
  TabButton,
  TabItem,
} from "@/components/tabs";
import TabOne from "../../components/pages/promo/TabOne";
import TabTwo from "../../components/pages/promo/TabTwo";
import TabThree from "../../components/pages/promo/TabThree";
import TabFour from "../../components/pages/promo/TabFour";

import Axios from "@/utils/axios";

const PromoItem = () => {
  const [item, setItem] = useState(null);
  const tabs = [
    { id: 0, title: "EB加赠1%" },
    { id: 1, title: "关于EBpay" },
    { id: 2, title: "买卖EB" },
    { id: 3, title: "如何提币" },
  ];

  const [activeTab, setActiveTab] = useState("EB加赠1%");

  useEffect(() => {
    Axios({
      url: "/pro/get",
      method: "POST",
      data: { id: 1 },
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => setItem(res.data.info));
  }, []);
  return (
    <div className="bg-light-bg h-full flex flex-col">
      <header>
        <nav className="bg-white flex items-center justify-center relative py-3 px-2">
          <div className="absolute inset-0 flex mx-2">
            <Link to={-1} className="inset-0 flex items-center">
              <BsChevronLeft className="font-bold text-xl" />
            </Link>
          </div>
          <h2>{activeTab}</h2>
        </nav>
      </header>

      <div>
        <div>
          {item && (
            <div className="text-center space-y-2">
              <img src={item?.H5Cover} alt="" />
              <div className="font-semibold">{item?.Title}</div>
              <div className="text-xs">{item?.StartTime}</div>
              <div className="text-sm">{item?.Description}</div>
            </div>
          )}
        </div>

        <Tabs className="">
          <header className="py-4">
            <TabsButtons className="grid grid-cols-2 gap-5 items-center justify-between w-2/3 mx-auto">
              {tabs.map((tab, i) => (
                <TabButton
                  className="py-3 border rounded-lg"
                  activeClass="bg-gradient-to-b from-primary-light to-primary text-white"
                  tab={i}
                  key={i}
                  onClick={() => setActiveTab(tab.title)}
                >
                  {tab.title}
                </TabButton>
              ))}
            </TabsButtons>
          </header>
          <div className="mx-4">
            <TabsItems className="bg-white mx-auto">
              <TabItem tab={0} defaultTab className="h-full overflow-y-auto">
                <TabOne />
              </TabItem>

              <TabItem tab={1} className="h-full overflow-y-auto">
                <TabTwo />
              </TabItem>

              <TabItem tab={2} className="h-full overflow-y-auto">
                <TabThree />
              </TabItem>

              <TabItem tab={3} className="h-full overflow-y-auto">
                <TabFour />
              </TabItem>
            </TabsItems>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PromoItem;
