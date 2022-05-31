import { useState, useEffect } from "react";
import {
  Tabs,
  TabsButtons,
  TabsItems,
  TabButton,
  TabItem,
} from "@/components/tabs";

import Axios from "@/utils/axios";
import ListItem from "@/components/pages/promo/ListItem";

const PromoList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios({ url: "/pro/list", method: "POST" }).then((res) =>
      setList(res.data.info || [])
    );
  }, []);

  const tabs = [
    {
      Id: 0,
      Name: "全部优惠",
      Dtls: [
        {
          Id: 1,
          CatId: 1,
          H5Img: "http://img.wwzznn.com/upload/202111/a04bae1c3961803c.jpeg",
        },
      ],
    },
    { Id: 0, Name: "限时活动", Dtls: [] },
    { Id: 0, Name: "新人首存", Dtls: [] },
  ];
  return (
    <div className="bg-common-bg h-full flex flex-col">
      <Tabs className="h-full flex flex-col">
        <header className="bg-white px-4 mb-2">
          <nav className="mb-2 flex items-center justify-center relative py-3">
            <h2>优惠活动</h2>
          </nav>
          <TabsButtons className="flex items-center justify-between">
            {tabs.map((tab, i) => (
              <TabButton
                className="flex flex-col items-center pb-2 basis-1/4 relative"
                tab={i}
                key={i}
              >
                {({ isActive }) => (
                  <>
                    <div className="relative">{tab.Name}</div>
                    {isActive && (
                      <span className="absolute inset-0 flex items-end justify-center">
                        <span className="h-0.5 w-1/2 bg-primary"></span>
                      </span>
                    )}
                  </>
                )}
              </TabButton>
            ))}
          </TabsButtons>
        </header>
        <div className="grow h-full overflow-hidden bg-white">
          <TabsItems className="h-full w-screen">
            {tabs.map((tab, i) => (
              <TabItem
                tab={i}
                key={i}
                defaultTab={i == 0}
                className="h-full overflow-y-auto"
              >
                {tab.Dtls.map((d, i) => (
                  <div key={i}>
                    <ListItem item={d} />
                  </div>
                ))}

                {/* {!tab.Dtls.length && (
                  <div className="h-full bg-common-bg flex items-center justify-center">
                    <p className="text-light text-sm">还没有新的消息</p>
                  </div>
                )} */}
              </TabItem>
            ))}
          </TabsItems>
        </div>
      </Tabs>
    </div>
  );
};

export default PromoList;
