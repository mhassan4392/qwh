import { Outlet } from "react-router-dom";
import login_bg from "@/assets/images/entry/login_bg.webp";
import logo1 from "@/assets/images/entry/logo1.png";
import logo2 from "@/assets/images/entry/logo2.png";
import icon_online_service from "@/assets/images/entry/icon-online-service.svg";

const EntryLayout = () => {
  return (
    <div
      className="h-full bg-center bg-cover relative flex flex-col justify-center overflow-x-hidden overflow-y-auto"
      style={{ backgroundImage: `url(${login_bg})` }}
    >
      {/* <div className="absolute inset-0 z-0 bg-black bg-opacity-20"></div> */}
      <div className="h-full">
        <div className="relative z-10">
          <div className="px-3 flex flex-col justify-center space-y-4">
            <img src={logo1} className="block" alt="" />
            <img src={logo2} className="block" alt="" />
          </div>
          <Outlet />
        </div>

        <div className="flex items-center justify-center space-x-2 relative z-10 text-white py-10">
          <img src={icon_online_service} className="w-6" alt="" />
          <span>联系客服</span>
        </div>
      </div>
    </div>
  );
};

export default EntryLayout;
