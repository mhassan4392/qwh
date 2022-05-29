import message_logo from "@/assets/images/message_logo.svg";
import chat_logo from "@/assets/images/chat_logo.webp";
import settings_logo from "@/assets/images/settings_logo.webp";
import profile from "@/assets/images/profile.png";
import account_vip0 from "@/assets/images/account_vip0.webp";
import { BsChevronRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const MineNavbar = () => {
  const { user } = useSelector((state) => state.auth);
  const imgs = [message_logo, settings_logo, chat_logo];
  return (
    <div className="px-4">
      <div className="flex items-center justify-end space-x-4 py-4 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          我的
        </div>
        {imgs.map((img, i) => (
          <img key={i} src={img} className="w-5" alt="" />
        ))}
      </div>

      <NavLink
        to={user ? "/userinfo/main" : "/entry/login"}
        className="flex items-center justify-between"
      >
        <div className="flex space-x-2 items-center">
          <img src={profile} className="w-14" alt="" />
          <div>
            <div className="flex items-center">
              {user?.UserName || "个人头像"}
              <img src={account_vip0} className="w-8 ml-2" alt="" />
            </div>
            <div className="text-xs text-light">
              已加入球王会体育 <span className="text-black">239</span> 天
            </div>
          </div>
        </div>
        <BsChevronRight className="text-light" />
      </NavLink>
    </div>
  );
};

export default MineNavbar;
