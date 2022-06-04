import { Link, Outlet } from "react-router-dom";
import login_bg from "@/assets/images/entry/login_bg.webp";
import logo1 from "@/assets/images/entry/logo1.png";
import logo2 from "@/assets/images/entry/logo2.png";
import icon_online_service from "@/assets/images/entry/icon-online-service.svg";
import { useSelector } from "react-redux";

const EntryLayout = () => {
  const { config } = useSelector((state) => state.config);
  return (
    <div
      className="h-full bg-center bg-cover relative flex flex-col justify-center overflow-x-hidden overflow-hidden"
      style={{ backgroundImage: `url(${login_bg})` }}
    >
      <div className="overflow-y-auto">
        <div className="relative z-10">
          <div className="px-3 flex flex-col justify-center items-center space-y-4">
            <Link to="/">
              <img src={config?.CsConfig?.H5Logo} className="block" alt="" />
            </Link>
            <img src={logo2} className="block" alt="" />
          </div>
          <Outlet />
        </div>

        <a
          href={config?.CsConfig?.ServiceLink || "/"}
          className="flex items-center justify-center space-x-2 relative z-10 text-white py-10"
        >
          <img src={icon_online_service} className="w-6" alt="" />
          <span>联系客服</span>
        </a>
      </div>
    </div>
  );
};

export default EntryLayout;
