import { useState } from "react";
import logo from "@/assets/images/logo.webp";
import message_logo from "@/assets/images/message_logo.svg";
import navbar_download_logo from "@/assets/images/navbar_download_logo.webp";
import { BsX } from "react-icons/bs";

const Navbar = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      {display && (
        <div className="flex items-center justify-between bg-light bg-opacity-10 px-4 py-2">
          <div className="flex items-center justify-between">
            <div>
              <BsX
                className="text-2xl text-light"
                onClick={() => setDisplay(false)}
              />
            </div>
            <div>
              <img src={navbar_download_logo} className="w-10 mr-1" alt="" />
            </div>
            <div className="text-xs">
              <div>球王会体育APP</div>
              <div className="text-[9px] text-light">
                真人娱乐，体育投注，电子游艺等尽在一手掌握
              </div>
            </div>
          </div>
          <div>
            <button className="bg-gradient-to-r from-red-300 to-primary px-3 py-1.5 text-white text-xs rounded-full">
              立即下载
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between py-2 px-4">
        <div>
          <img src={logo} className="w-32" alt="" />
        </div>
        <div>
          <img src={message_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
