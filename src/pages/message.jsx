import { useState } from "react";
import {
  Tabs,
  TabsButtons,
  TabsItems,
  TabButton,
  TabItem,
} from "@/components/tabs";
import { Modal } from "@/components/modal";
import { BsChevronLeft, BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Notification from "../components/pages/message/Notification";

const selects = ["one", "two", "three"];

const Message = () => {
  const tabs = [
    {
      title: "通知",
      no: 100,
    },
    {
      title: "活动",
      no: 0,
    },
    {
      title: "公告",
      no: 10,
    },
    {
      title: "充提",
      no: 0,
    },
  ];

  const [modal, setModal] = useState(false);

  return (
    <div className="bg-common-bg h-full flex flex-col">
      <Tabs className="h-full flex flex-col">
        <header className="bg-white px-4 mb-2">
          <nav className="mb-2 flex items-center justify-between relative py-3">
            <Link to="/" className="">
              <BsChevronLeft className="font-bold text-xl" />
            </Link>
            <h2>消息中心</h2>
            <BsThreeDots onClick={() => setModal(true)} />
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
                    <div className="relative">
                      {tab.title}
                      {tab.no && (
                        <span className="absolute inset-0 -right-5 -top-1 flex items-start justify-end">
                          <span className="rounded-full bg-primary text-white text-[7px] px-1 flex items-center justify-center">
                            {tab.no > 99 ? "99+" : tab.no}
                          </span>
                        </span>
                      )}
                    </div>
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
                {Array.from({ length: tab.no }).map((d, i) => (
                  <div key={i}>
                    <Notification />
                  </div>
                ))}

                {!tab.no && (
                  <div className="h-full bg-common-bg flex items-center justify-center">
                    <p className="text-light text-sm">还没有新的消息</p>
                  </div>
                )}
              </TabItem>
            ))}
          </TabsItems>
        </div>
      </Tabs>

      <Modal
        open={modal}
        onOutsideClick={() => setModal(false)}
        align="end"
        className="!w-screen !m-0 !mt-10 rounded-b-none"
        containerClass="bg-black bg-opacity-50"
      >
        {/* <Modal.Header className="relative text-center">
          选择所属银行
          <div className="absolute inset-0 text-blue-400 flex items-center px-2">
            <div onClick={() => setModal(false)}>取消</div>
          </div>
        </Modal.Header> */}
        <Modal.Body className="!p-0">
          {selects.map((select, i) => (
            <div
              key={i}
              onClick={() => setModal(false)}
              className="py-4 text-center shadow"
            >
              {select}
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Message;
