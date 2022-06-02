import {
  Tabs,
  TabsButtons,
  TabsItems,
  TabButton,
  TabItem,
} from "@/components/tabs";
import NestedTabItem from "./NestedTabItem";

const MyDepositTabItem = ({ tabs }) => {
  return (
    <>
      <Tabs defaultTab={0}>
        <TabsButtons className="grid grid-cols-4 gap-3 px-4 bg-white items-center text-xs pt-3 pb-5 justify-center cursor-pointer overflow-hidden">
          {tabs.map((tab, i) => (
            <TabButton
              className="text-xs flex flex-col h-20 rounded-lg items-center justify-center border space-y-1"
              activeClass="bg-white text-black border-[#4080ff] icon-select-bg"
              key={i}
              tab={i}
            >
              {({ isActive }) => (
                <>
                  <img src={tab.Img} className="w-8" alt="" />
                  <div
                    className={`text-[10px] ${
                      isActive ? "text-secondary" : ""
                    }`}
                  >
                    <div>{tab.Name}</div>
                  </div>
                </>
              )}
            </TabButton>
          ))}
        </TabsButtons>

        <TabsItems>
          {tabs.map((tab, i) => (
            <TabItem key={i} tab={i} defaultTab={i == 0}>
              <NestedTabItem details={tab} />
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
        存款遇到问题？联系<span className="text-secondary">人工客服</span>解决
      </div>
    </>
  );
};

export default MyDepositTabItem;
